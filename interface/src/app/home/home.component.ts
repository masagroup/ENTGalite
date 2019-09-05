import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BaseChartDirective } from 'ng2-charts';
import { Context } from 'chartjs-plugin-datalabels';
import { ChangeDetectorRef } from '@angular/core';

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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: MarchesByLines;
  linesName: string[] = [];
  stations: { line: string; stations: string[] }[] = [];
  intersect: { datasetIndex: number; dataIndex: number }[] = [];
  walk: {
    walk: string;
    line: string;
    color: string;
    stations: { x: number; y: number; coord: { lat: string; lon: string } }[];
  }[] = [];
  _selectedLine = '';
  dateTime: Date;
  simTime: Date;
  colorIndex = 0;
  options: any;
  datasets: Chart.ChartDataSets[];
  marcheNames: { lineName: string; marcheNames: string[] }[] = [];
  maxStation: number;
  minTime: number;
  maxTime: number;
  file: FormControl = new FormControl([]);
  @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;

  constructor(private zone: NgZone, private homeService: HomeService) {}

  ngOnInit() {
    const eel = window.eel;
    eel.set_host('ws://localhost:8000');

    const UpdateTrain = (data: string) => {
      if (!this.chart || !this.chart.chart) {
        return;
      }
      this.updateTrain(data);
    };
    const ReceiveWalks = (walks: string) => {
      this.zone.run(() => {
        this.data = JSON.parse(walks);
        this.linesName = this.data.lines.map((x: Line) => {
          if (x.marches.length > 0) {
            return x.line_name;
          }
        });
        this.linesName = this.linesName.filter((x: string) => x);
      });
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
    eel.receive_walks_from_py()(ReceiveWalks);
  }

  private updateTrain(train: string) {
    const dataSplited = train.split(' ');
    const coordTrain: Point = { x: parseFloat(dataSplited[2]), y: parseFloat(dataSplited[3]) };
    const walkName = dataSplited[0];
    const index = this.walk.findIndex(x => x.walk === walkName);
    if (index === -1) {
      return;
    }
    const walk = this.walk[index];
    let bestStations: any;
    let stations1: any;
    let stations2: any;
    let minDist: number;
    walk.stations.forEach((element: any, i: number) => {
      if (i === walk.stations.length - 1) {
        return;
      }
      const coord1: Point = { x: parseFloat(element.coord.lat), y: parseFloat(element.coord.lon) };
      const coord2: Point = {
        x: parseFloat(walk.stations[i + 1].coord.lat),
        y: parseFloat(walk.stations[i + 1].coord.lon)
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
        stations1 = walk.stations[i];
        stations2 = walk.stations[i + 1];
      }
    });
    if (bestStations) {
      const totalDist = this.homeService.getDistanceFromLatLonInKm(
        parseFloat(stations1.coord.lat),
        parseFloat(stations1.coord.lon),
        parseFloat(stations2.coord.lat),
        parseFloat(stations2.coord.lon)
      );
      const dist = this.homeService.getDistanceFromLatLonInKm(
        parseFloat(stations1.coord.lat),
        parseFloat(stations1.coord.lon),
        parseFloat(bestStations.point.x),
        parseFloat(bestStations.point.y)
      );
      const percent = (100 * dist) / totalDist;
      const y = stations1.y + ((stations2.y - stations1.y) / 100) * percent;
      const _datasets = this.chart.chart.data.datasets;
      const indexRealTime = _datasets.findIndex((x: any) => x.label === dataSplited[0] && !x.prediction);
      if (indexRealTime === -1) {
        _datasets.push(<any>{
          type: 'scatter',
          selectedLine: walk.line,
          label: dataSplited[0],
          data: [{ x: this.simTime, y: y }],
          showLine: true,
          borderColor: walk.color,
          pointRadius: 0,
          borderWidth: 3,
          prediction: false
        });
      } else {
        // @ts-ignore
        _datasets[indexRealTime].data.push({ x: this.simTime, y: y });
      }
    }
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
    const _datasets: any = this.chart.chart.data.datasets;
    const indexRealTime = _datasets.findIndex((x: any) => x.realTime === true);
    if (indexRealTime !== -1) {
      _datasets.splice(indexRealTime, 1);
    }
    if (data[0].x < this.chart.chart.options.plugins.zoom.pan.rangeMin.x) {
      this.chart.chart.options.plugins.zoom.pan.rangeMin.x = data[0].x;
      this.chart.chart.options.plugins.zoom.zoom.rangeMin.x = data[0].x;
    }
    if (data[0].x > this.chart.chart.options.plugins.zoom.pan.rangeMax.x) {
      this.chart.chart.options.plugins.zoom.pan.rangeMax.x = data[0].x;
      this.chart.chart.options.plugins.zoom.zoom.rangeMax.x = data[0].x;
    }
  _datasets.push(
      {
        type: 'scatter',
        label: this.simTime.getHours() + ':' + this.simTime.getMinutes(),
        data: data,
        showLine: true,
        borderColor: 'black',
        pointRadius: 0,
        borderWidth: 1,
        realTime: true
      }
    );
    this.chart.chart.update();
  }

  selectLine(lineName: string, event: any) {
    if (!this.datasets) {
      this.selectedLine = lineName;
    } else if (event.checked) {
      let color;
      this.datasets.forEach((dataset: any) => {
        if (dataset.selectedLine === lineName) {
          color = dataset.borderColor;
        }
      });
      if (!color) {
        color = colorList[this.colorIndex];
      }
      const {
        traces,
        stations,
        minTime,
        maxTime,
        minStation,
        maxStation,
        marchNames
      } = this.homeService.getInitialTraces(this.data, lineName, color);
      this.marcheNames.push({ lineName: lineName, marcheNames: marchNames });
      this.stations.push({ line: lineName, stations: stations.map(station => station.name) });
      let found = false;
      this.walk.forEach(walk => {
        if (walk.line === lineName) {
          found = true;
        }
      });
      if (!found) {
        traces.forEach((trace: any) => {
          this.walk.push({
            color: colorList[this.colorIndex],
            line: lineName,
            walk: trace.label,
            stations: trace.data.slice(0)
          });
        });
      }
      this.datasets.forEach((dataset: any) => {
        if (dataset.selectedLine === lineName && dataset.hidden === true) {
          dataset.hidden = false;
        }
      });
      this.colorIndex += 1;
      if (this.colorIndex === colorList.length - 1) {
        this.colorIndex = 0;
      }
      this.datasets = this.datasets.concat(traces);
      if (this.chart.options.plugins.zoom.pan.rangeMax.x < maxTime) {
        this.chart.options.plugins.zoom.pan.rangeMax.x = maxTime;
      }
      if (this.chart.options.plugins.zoom.pan.rangeMin.x < minTime) {
        this.chart.options.plugins.zoom.pan.rangeMax.x = minTime;
      }
      if (this.chart.options.plugins.zoom.zoom.rangeMax.x < maxTime) {
        this.chart.options.plugins.zoom.zoom.rangeMax.x = maxTime;
      }
      if (this.chart.options.plugins.zoom.zoom.rangeMin.x < minTime) {
        this.chart.options.plugins.zoom.zoom.rangeMax.x = minTime;
      }
      this.chart.update();
    } else {
      if (this.colorIndex === colorList.length - 1) {
        this.colorIndex = 0;
      }
      this.datasets.forEach((element: any, index) => {
        if (element.selectedLine === lineName) {
          this.intersect = this.intersect.filter(x => x.dataIndex !== index);
        }
      });
      this.stations = this.stations.filter(x => x.line !== lineName);
      this.datasets = this.datasets.filter((x: any) => {
        if (x.selectedLine !== lineName) {
          return true;
        }
        if (x.selectedLine === lineName && x.prediction !== true) {
          return true;
        }
        return false;
      });
      this.datasets.forEach((dataset: any) => {
        if (dataset.selectedLine === lineName) {
          dataset.hidden = true;
        }
      });
      this.marcheNames = this.marcheNames.filter(x => x.lineName !== lineName);
      this.chart.update();
    }
  }

  private updateInfo = (chart: any) => {
    const min = chart.chart.options.scales.xAxes[0].time.min;
    const max = chart.chart.options.scales.xAxes[0].time.max;
    const _datasets = this.datasets;
    let change = false;
    this.intersect.forEach(intersect => {
      change = true;
      if (_datasets[intersect.datasetIndex]) {
        _datasets[intersect.datasetIndex].data.splice(intersect.dataIndex, 1);
      }
    });
    this.intersect = [];
    this.datasets.forEach((dataset: any, index: number) => {
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
          change = true;
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
          change = true;
          if (typeof intersect.x === 'string') {
            continue;
          }
          _datasets[index].data.splice(i, 0, { x: intersect.x, y: intersect.y });
          break;
        }
      }
    });
    if (max - min > 7200000) {
      if (chart.chart.options.scales.xAxes[0].time.unitStepSize !== 2) {
        chart.chart.options.scales.xAxes[0].time.unitStepSize = 2;
        chart.chart.options.scales.xAxes[0].time.unit = 'hour';
        chart.chart.update();
      }
    } else {
      if (chart.chart.options.scales.xAxes[0].time.unitStepSize !== 10) {
        chart.chart.options.scales.xAxes[0].time.unitStepSize = 10;
        chart.chart.options.scales.xAxes[0].time.unit = 'minute';
        chart.chart.update();
      }
    }
    if (change) {
      this.chart.update();
    }
  };

  set selectedLine(selectedLine: string) {
    this._selectedLine = selectedLine;
    const {
      traces,
      stations,
      minTime,
      maxTime,
      minStation,
      maxStation,
      marchNames
    } = this.homeService.getInitialTraces(this.data, this._selectedLine, colorList[this.colorIndex]);
    traces.forEach((trace: any) => {
      this.walk.push({
        color: colorList[this.colorIndex],
        line: selectedLine,
        walk: trace.label,
        stations: trace.data.slice(0)
      });
    });
    this.marcheNames.push({ lineName: selectedLine, marcheNames: marchNames });
    this.stations.push({ line: selectedLine, stations: stations.map(station => station.name) });
    this.colorIndex += 1;
    this.minTime = minTime;
    this.maxTime = maxTime;
    this.maxStation = maxStation;
    this.intersect = [];
    this.datasets = traces;
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
              fontColor: 'dark',
              min: minTime,
              max: minTime + 600000 * 5
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
              x: minTime
            },
            rangeMax: {
              x: maxTime
            },
            onPanComplete: this.updateInfo
          },
          zoom: {
            enabled: true,
            mode: 'x',
            rangeMin: {
              x: minTime
            },
            rangeMax: {
              x: maxTime
            },
            onZoomComplete: this.updateInfo
          }
        },
        datalabels: {
          backgroundColor: 'transparent',
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
            if (context.dataset.data[dataIndex].x === minTime) {
              return 'end';
            }
            return 'start';
          },
          clamp: true,
          align: (context: Context | any) => {
            const dataIndex = context.dataIndex;
            const x = context.dataset.data[dataIndex].x;
            const y = context.dataset.data[dataIndex].y;
            if (x === minTime && y === 0) {
              return -45;
            }
            if (x === minTime && y === maxStation) {
              return 45;
            }
            if (x === minTime) {
              return 'right';
            }
            if (y === 0) {
              return 'top';
            }
            if (y === maxStation) {
              return 'bottom';
            }
            return 'left';
          },
          formatter: function(value: any, context: Context | any) {
            return context.dataset.label;
          },
          display: (context: any) => {
            const min = context.chart.chart.config.options.scales.xAxes[0].time.min;
            const max = context.chart.config.options.scales.xAxes[0].time.max;
            const len = context.dataset.data.length - 1;
            if (context.dataIndex === 0 && context.dataset.data[0].x < min) {
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
  }
  get selectedLine(): string {
    return this._selectedLine;
  }
}
