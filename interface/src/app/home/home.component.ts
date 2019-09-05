import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BaseChartDirective } from 'ng2-charts';
import { Context } from 'chartjs-plugin-datalabels';

import { HomeService, MarchesByLines, Line } from './home.service';
import * as Chart from 'chart.js';

Chart.defaults.global.elements.line.fill = false;
Chart.pluginService.register({
  beforeDraw: function(chart) {
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;
    ctx.save();
    ctx.fillStyle = 'lightgray';
    ctx.strokeStyle = 'black';
    ctx.rect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    ctx.fill();
    ctx.rect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    ctx.stroke();
    ctx.rect(
      0,
      ctx.canvas.height - (ctx.canvas.height - chartArea.bottom),
      chartArea.left,
      ctx.canvas.height - chartArea.bottom
    );
    ctx.fill();
    ctx.rect(
      0,
      ctx.canvas.height - (ctx.canvas.height - chartArea.bottom),
      chartArea.left,
      ctx.canvas.height - chartArea.bottom
    );
    ctx.stroke();
    ctx.restore();
  }
});
const colorList = ['#6E1E78', '#E05206', '#A1006B', '#FFB612', '#009AA6', '#CD0037', '#0088CE'];

interface Point {
  x: number;
  y: number;
}

interface RunInfo {
  lineName: string;
  marcheNames: string[];
  stations: string[];
  hidden: boolean;
  minTime: number;
  maxTime: number;
  minStation: number;
  maxStation: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = true;
  options: Chart.ChartOptions;
  datasets: Chart.ChartDataSets[] = [];
  linesName: string[] = [];
  private hiddenDataSets: Chart.ChartDataSets[] = [];
  private stations: { line: string; stations: string[] }[] = [];
  private intersect: { datasetIndex: number; dataIndex: number }[] = [];
  private simTime: Date;
  private colorIndex = 0;
  private runInfos: RunInfo[] = [];
  private maxStation: number;
  private minTime: number;
  private maxTime: number;
  private data: MarchesByLines;
  @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;

  constructor(private cd: ChangeDetectorRef, private homeService: HomeService) {}

  async ngOnInit() {
    const eel = window.eel;
    eel.set_host('ws://localhost:8000');

    const UpdateTrain = (data: string) => {
      if (!this.chart || !this.chart.chart) {
        return;
      }
      const dataSplited = data.split(' ');
      const coordTrain: Point = { x: parseFloat(dataSplited[2]), y: parseFloat(dataSplited[3]) };
      const runName = dataSplited[0];
      this.updateTrain(runName, coordTrain);
    };
    const UpdateSimTime = (data: string) => {
      if (!this.chart || !this.chart.chart) {
        return;
      }
      this.simTime = this.homeService.parseDateTime(data);
      this.updateRealTime();
    };
    eel.expose(UpdateTrain, 'update_train_js');
    eel.expose(UpdateSimTime, 'update_sim_time_js');
    const walks = await eel.receive_walks_from_py()();
    this.data = JSON.parse(walks);
    this.linesName = this.data.lines.map((x: Line) => (x.marches.length > 0) ? x.line_name : undefined);
    this.linesName = this.linesName.filter((x: string) => x);
    this.initLines();
    this.initChart();
    this.isLoading = false;
  }

  selectLine(lineName: string, checked: boolean) {
    const _datasets = this.datasets;
    const _hiddenDataSets = this.hiddenDataSets;
    if (checked) {
      _hiddenDataSets.forEach((dataset: any) => {
        if (dataset.selectedLine === lineName) {
          _datasets.push(dataset);
        }
      });
      const indexRunInfo = this.runInfos.findIndex(runInfo => runInfo.lineName === lineName);
      const runInfo = this.runInfos[indexRunInfo];
      this.maxStation = runInfo.maxStation > this.maxStation ? runInfo.maxStation : this.maxStation;
      this.stations.push({line: runInfo.lineName, stations: runInfo.stations});
    } else {
      _datasets.forEach((element: any, index) => {
        if (element.selectedLine === lineName) {
          this.intersect = this.intersect.filter(x => x.dataIndex !== index);
        }
      });
      const indexRunInfo = this.runInfos.findIndex(runInfo => runInfo.lineName === lineName);
      const runInfo = this.runInfos[indexRunInfo];
      runInfo.hidden = true;
      this.stations = this.stations.filter(x => x.line !== lineName);
      this.datasets = _datasets.filter((dataset: any) => dataset.selectedLine === lineName);
    }
    this.chart.update();
  }

  private updateTrain(runName: string, coordTrain: Point) {
    const _datasets = this.hiddenDataSets;
    const index = _datasets.findIndex((x: any) => x.prediction && x.label === runName);
    if (index === -1) {
      return;
    }
    const walk = <any>_datasets[index];
    let bestStations: any;
    let stations1: any;
    let stations2: any;
    let minDist: number;
    walk.data.forEach((element: any, i: number) => {
      if (!walk.data[i + 1]) {
        return;
      }
      const coord1: Point = { x: element.coord.lat, y: element.coord.lon };
      const coord2: Point = {
        x: walk.data[i + 1].coord.lat,
        y: walk.data[i + 1].coord.lon
      };
      const position = this.homeService.project(coordTrain, coord1, coord2);
      if (Number.isNaN(position.t)) {
        return;
      }
      const testDist = this.homeService.getDistanceFromLatLonInKm(
        position.point.x,
        position.point.y,
        coordTrain.x,
        coordTrain.y
      );
      if (!bestStations || testDist < minDist) {
        minDist = testDist;
        bestStations = position;
        stations1 = walk.data[i];
        stations2 = walk.data[i + 1];
      }
    });
    if (!bestStations) {
      return;
    }
    const totalDist = this.homeService.getDistanceFromLatLonInKm(
      stations1.coord.lat,
      stations1.coord.lon,
      stations2.coord.lat,
      stations2.coord.lon
    );
    const dist = this.homeService.getDistanceFromLatLonInKm(
      stations1.coord.lat,
      stations1.coord.lon,
      bestStations.point.x,
      bestStations.point.y,
    );
    const percent = (100 * dist) / totalDist;
    const y = stations1.y + ((stations2.y - stations1.y) / 100) * percent;
    const indexRealTime = _datasets.findIndex((x: any) => x.label === runName && !x.prediction);
    if (indexRealTime === -1) {
      const newDataset = {
        type: 'scatter',
        selectedLine: walk.selectedLine,
        label: runName,
        data: [{ x: this.simTime, y: y }],
        showLine: true,
        borderColor: walk.borderColor,
        hidden: walk.hidden,
        pointRadius: 0,
        borderWidth: 3,
        prediction: false
      }
      _datasets.push(newDataset);
      if ( this.datasets.findIndex((dataset: any) => walk.selectedLine === dataset.selectdLine) != - 1) {
        this.datasets.push(newDataset);
      }
    } else {
      // @ts-ignore
      _datasets[indexRealTime].data.push({ x: this.simTime, y: y });
    }
    this.chart.update();
  }

  private updateRealTime() {
    const data = [
      {
        x: this.simTime.getTime(),
        y: 0
      },
      {
        x: this.simTime.getTime(),
        y: this.maxStation
      }
    ];
    const _datasets: any = this.datasets;
    const _options = this.options;
    const indexRealTime = _datasets.findIndex((x: any) => x.realTime === true);
    if (indexRealTime !== -1) {
      _datasets.splice(indexRealTime, 1);
    }
    if (data[0].x < _options.plugins.zoom.pan.rangeMin.x) {
      _options.plugins.zoom.pan.rangeMin.x = data[0].x;
      _options.plugins.zoom.zoom.rangeMin.x = data[0].x;
    }
    if (data[0].x > _options.plugins.zoom.pan.rangeMax.x) {
      _options.plugins.zoom.pan.rangeMax.x = data[0].x;
      _options.plugins.zoom.zoom.rangeMax.x = data[0].x;
    }
    _datasets.push({
      type: 'scatter',
      label: this.simTime.getHours() + ':' + this.simTime.getMinutes(),
      data: data,
      showLine: true,
      borderColor: 'black',
      pointRadius: 0,
      borderWidth: 1,
      realTime: true
    });
    this.chart.update();
  }


  private updateInfo = (chart: any) => {
    const min = parseInt(this.options.scales.xAxes[0].time.min);
    const max = parseInt(this.options.scales.xAxes[0].time.max);
    const _datasets = this.datasets;
    const _options = this.options;
    this.intersect.forEach(intersect => {
      if (_datasets[intersect.datasetIndex]) {
        _datasets[intersect.datasetIndex].data.splice(intersect.dataIndex, 1);
      }
    });
    this.intersect = [];
    _datasets.forEach((dataset: any, index: number) => {
      if (dataset.hidden) {
        return;
      }
      if (
        (dataset.data[0].x < min && dataset.data[dataset.data.length - 1].x < min) ||
        (dataset.data[0].x > max && dataset.data[dataset.data.length - 1].x > max)
      ) {
        return;
      }
      for (let i = 0; i < dataset.data.length - 1; i++) {
        if (dataset.data[i].x < min && dataset.data[i + 1].x > min) {
          const intersect = this.homeService.line_intersect(
            dataset.data[i].x,
            dataset.data[i].y,
            dataset.data[i + 1].x,
            dataset.data[i + 1].y,
            min,
            0,
            min,
            this.maxStation
          );
          this.intersect.push({ datasetIndex: index, dataIndex: i });
          _datasets[index].data.splice(i, 0, { x: intersect.x, y: intersect.y });
          break;
        }
      }
      for (let i = dataset.data.length - 1; i > 1; i--) {
        if (dataset.data[i].x > max && dataset.data[i - 1].x < max) {
          const intersect = this.homeService.line_intersect(
            dataset.data[i].x,
            dataset.data[i].y,
            dataset.data[i - 1].x,
            dataset.data[i - 1].y,
            max,
            0,
            max,
            this.maxStation
          );
          this.intersect.push({ datasetIndex: index, dataIndex: i });
          if (typeof intersect.x === 'string') {
            continue;
          }
          _datasets[index].data.splice(i, 0, { x: intersect.x, y: intersect.y });
          break;
        }
      }
    });
    if (max - min > 7200000) {
      if (_options.scales.xAxes[0].time.unitStepSize !== 2) {
        _options.scales.xAxes[0].time.unitStepSize = 2;
        _options.scales.xAxes[0].time.unit = 'hour';
      }
    } else {
      if (_options.scales.xAxes[0].time.unitStepSize !== 10) {
        _options.scales.xAxes[0].time.unitStepSize = 10;
        _options.scales.xAxes[0].time.unit = 'minute';
      }
    }
    this.chart.chart.update();
  };

  private initChart() {
    this.options = {
      type: 'scatter',
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      animation: {
        duration: 0
      },

      layout: {
        padding: {
          left: 50,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: 'rgba(90, 94, 91)'
            },
            type: 'time',
            time: {
              unitStepSize: 10,
              unit: 'minute',
              displayFormats: {
                minute: 'HH:mm',
                hour: 'HH:mm'
              },
              min: this.minTime.toString(),
              max: (this.minTime + 600000 * 5).toString(),
              // @ts-ignore
              fontColor: 'dark'
            },
            ticks: {
              fontColor: 'black',
              fontSize: 15
            },
            autoSkip: false,
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: 'rgba(90, 94, 91)'
            },
            ticks: {
              fontColor: 'black',
              stepSize: 1,
              padding: 50,
              callback: (value: number, index: number) => {
                let stationsLabel: string;
                let firstStation: string;
                let lastStation: string;
                this.stations.forEach(station => {
                  if (station.stations[value]) {
                    if (!stationsLabel) {
                      stationsLabel = station.stations[value];
                      firstStation = station.stations[value];
                    } else {
                      stationsLabel += ' / ' + station.stations[value];
                      lastStation = station.stations[value];
                    }
                  }
                });
                if (stationsLabel && stationsLabel.length > 40) {
                  stationsLabel = firstStation + '...' + lastStation;
                }
                return stationsLabel;
              }
            }
          }
        ]
      },
      plugins: {
        zoom: {
          pan: {
            enabled: true,
            mode: 'x',
            rangeMin: {
              x: this.minTime.toString()
            },
            rangeMax: {
              x: this.maxTime.toString()
            },
            onPanComplete: this.updateInfo
          },
          zoom: {
            enabled: true,
            mode: 'x',
            rangeMin: {
              x: this.minTime.toString()
            },
            rangeMax: {

              x: this.maxTime.toString()
            },
            onZoomComplete: this.updateInfo
          }
        },
        datalabels: {
          backgroundColor: 'transparent',
          // @ts-ignore
          color: function(context: Context) {
            return context.dataset.borderColor;
          },
          borderRadius: 4,
          clip: false,
          font: {
            weight: 'bold',
            size: 14
          },
          anchor: (context: Context | any) => {
            const dataIndex = context.dataIndex;
            if (context.dataset.data[dataIndex].x === this.minTime) {
              return 'end';
            }
            return 'start';
          },
          clamp: true,
          align: (context: Context | any) => {
            const dataIndex = context.dataIndex;
            const x = context.dataset.data[dataIndex].x;
            const y = context.dataset.data[dataIndex].y;
            if (x === this.minTime && y === 0) {
              return -45;
            }
            if (x === this.minTime && y === this.maxStation) {
              return 45;
            }
            if (x === this.minTime) {
              return 'right';
            }
            if (y === 0) {
              return 'top';
            }
            if (y === this.maxStation) {
              return 'bottom';
            }
            return 'left';
          },
          formatter: function(_: any, context: Context | any) {
            return context.dataset.label;
          },
          display: (context: any) => {
            const min = parseInt(this.options.scales.xAxes[0].time.min);
            const len = context.dataset.data.length - 1;
            if (context.dataset.data[0].x < min) {
              return false;
            }
            if (context.dataIndex === len && context.dataset.data[len].x < min) {
              return false;
            }
            for (const intersect of this.intersect) {
              if (intersect.dataIndex === context.dataIndex && intersect.datasetIndex === context.datasetIndex) {
                return true;
              }
            }
            if (
              this.simTime &&
              context.dataIndex === 0 &&
              context.dataset.prediction &&
              this.simTime.getTime() === context.dataset.data[context.dataIndex].x
            ) {
              return false;
            }
            return context.dataIndex === 0 || context.dataIndex === context.dataset.data.length - 1;
          }
        }
      }
    };
    if (this.maxTime - this.minTime > 7200000) {
      if (this.options.scales.xAxes[0].time.unitStepSize !== 2) {
        this.options.scales.xAxes[0].time.unitStepSize = 2;
        this.options.scales.xAxes[0].time.unit = 'hour';
      }
    } else {
      if (this.options.scales.xAxes[0].time.unitStepSize !== 10) {
        this.options.scales.xAxes[0].time.unitStepSize = 10;
        this.options.scales.xAxes[0].time.unit = 'minute';
      }
    }
  }

  private initLines() {
    this.data.lines.forEach(line => {
      const color = colorList[this.colorIndex];
      const {
        traces,
        stations,
        minTime,
        maxTime,
        minStation,
        maxStation,
        marchNames
      } = this.homeService.getInitialTraces(this.data, line.line_name, color);
      this.hiddenDataSets.push(...traces);
      if (!this.minTime || this.minTime > minTime) {
        this.minTime = minTime
      }
      if (!this.maxTime || this.maxTime < maxTime) {
        this.maxTime = maxTime
      }
      this.runInfos.push({
        lineName: line.line_name,
        marcheNames: marchNames,
        stations: stations.map(station => station.name),
        hidden: true,
        minTime: minTime,
        maxTime: maxTime,
        minStation: minStation,
        maxStation: maxStation
      });
    });
  }
}
