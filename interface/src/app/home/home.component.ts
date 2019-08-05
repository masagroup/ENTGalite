import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BaseChartDirective } from 'ng2-charts';
// @ts-ignore
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { HomeService, MarchesByLines, Line, Marche, StopPoint } from './home.service';
import * as Chart from 'chart.js';

Chart.defaults.global.elements.line.fill = false;
const colorList = ['#6E1E78', '#E05206', '#82BE00', '#A1006B', '#FFB612', '#009AA6', '#CD0037', '#D2E100', '#0088CE'];

function line_intersect(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
) {
  let ua,
    ub,
    // tslint:disable-next-line: prefer-const
    denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
  if (denom === 0) {
    return null;
  }
  ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
  ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
  return {
    x: x1 + ua * (x2 - x1),
    y: y1 + ua * (y2 - y1),
    seg1: ua >= 0 && ua <= 1,
    seg2: ub >= 0 && ub <= 1
  };
}

interface Point {
  x: number;
  y: number;
}
function project(p: Point, a: Point, b: Point) {
  var atob = { x: b.x - a.x, y: b.y - a.y };
  var atop = { x: p.x - a.x, y: p.y - a.y };
  var len = atob.x * atob.x + atob.y * atob.y;
  var dot = atop.x * atob.x + atop.y * atob.y;
  var t = Math.min(1, Math.max(0, dot / len));

  dot = (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x);

  return {
    point: {
      x: a.x + atob.x * t,
      y: a.y + atob.y * t
    },
    left: dot < 1,
    dot: dot,
    t: t
  };
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  var R = 6371;
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = true;
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
  datasets: any[];
  marcheNames: any[] = [];
  maxStation: number;
  minTime: number;
  maxTime: number;
  plugins = [ChartDataLabels];
  file: FormControl = new FormControl([]);
  @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    const eel = window.eel;
    eel.set_host('ws://localhost:8000');
    const UpdateTrain = (data: string) => {
      if (!this.chart || !this.chart.chart) {
        return;
      }
      this.updateTrain(data);
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

    this.file.valueChanges.subscribe((files: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.data = JSON.parse(<string>reader.result);
        this.linesName = this.data.lines.map((x: Line) => {
          if (x.marches.length > 0) {
            return x.line_name;
          }
        });
        this.linesName = this.linesName.filter((x: string) => x);
      };
      reader.readAsText(files.files[0]);
    });
    this.isLoading = false;
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
      const position = project(coordTrain, coord1, coord2);
      if (Number.isNaN(position.t)) {
        return;
      }
      console.log(position);

      const testDist = getDistanceFromLatLonInKm(position.point.x, position.point.y, coordTrain.x, coordTrain.y);
      if (!bestStations || testDist < minDist) {
        minDist = testDist;
        bestStations = position;
        stations1 = walk.stations[i];
        stations2 = walk.stations[i + 1];
      }
    });
    if (bestStations) {
      const totalDist = getDistanceFromLatLonInKm(
        parseFloat(stations1.coord.lat),
        parseFloat(stations1.coord.lon),
        parseFloat(stations2.coord.lat),
        parseFloat(stations2.coord.lon)
      );
      const dist = getDistanceFromLatLonInKm(
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
        console.log(walk.color);
      } else {
        // @ts-ignore
        _datasets[indexRealTime].data.push({ x: this.simTime, y: y });
      }
      console.log(stations1.coord, stations2.coord, bestStations.point, y, stations1.y, stations2.y);
      console.log(dist, totalDist, percent, dataSplited);
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
    const _datasets = this.chart.chart.data.datasets;
    const indexRealTime = _datasets.findIndex(x => x.label === 'REAL TIME');
    if (indexRealTime !== -1) {
      _datasets.splice(indexRealTime, 1);
    }
    _datasets.forEach((element: any, index: number) => {
      if (element.prediction === true) {
        if (element.data[element.data.length - 1].x < this.simTime.getTime()) {
          _datasets.splice(index, 1);
        }
        if (element.data[0] && element.data[0].x < this.simTime.getTime()) {
          const higherIndex = element.data.findIndex((x: any) => x.x > this.simTime.getTime());
          if (element.data[higherIndex - 1]) {
            const intersect = line_intersect(
              element.data[higherIndex - 1].x,
              element.data[higherIndex - 1].y,
              element.data[higherIndex].x,
              element.data[higherIndex].y,
              data[0].x,
              data[0].y,
              data[1].x,
              data[1].y
            );
            element.data.splice(0, element.data.length - (element.data.length - higherIndex));
            element.data.unshift({ x: intersect.x, y: intersect.y });
          }
        }
      }
    });
    if (data[0].x < this.chart.chart.options.plugins.zoom.pan.rangeMin.x) {
      this.chart.chart.options.plugins.zoom.pan.rangeMin.x = data[0].x;
      this.chart.chart.options.plugins.zoom.zoom.rangeMin.x = data[0].x;
    }
    if (data[0].x > this.chart.chart.options.plugins.zoom.pan.rangeMax.x) {
      this.chart.chart.options.plugins.zoom.pan.rangeMax.x = data[0].x;
      this.chart.chart.options.plugins.zoom.zoom.rangeMax.x = data[0].x;
    }
    _datasets.push({
      type: 'scatter',
      label: 'REAL TIME',
      data: data,
      showLine: true,
      borderColor: 'black',
      pointRadius: 0,
      borderWidth: 1
    });
    this.chart.chart.update();
  }

  selectLine(lineName: string, event: any) {
    if (!this.datasets) {
      this.selectedLine = lineName;
    } else if (event.checked) {
      const {
        traces,
        stations,
        minTime,
        maxTime,
        minStation,
        maxStation,
        marchNames
      } = this.homeService.getInitialTraces(this.data, lineName, colorList[this.colorIndex]);
      this.marcheNames.push({ lineName: lineName, marcheNames: marchNames });
      this.stations.push({ line: lineName, stations: stations.map(station => station.name) });
      traces.forEach((trace: any) => {
        this.walk.push({
          color: colorList[this.colorIndex],
          line: lineName,
          walk: trace.label,
          stations: trace.data.slice(0)
        });
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
      this.datasets.forEach((element, index) => {
        if (element.selectedLine === lineName) {
          this.intersect = this.intersect.filter(x => x.dataIndex !== index);
        }
      });
      this.stations = this.stations.filter(x => x.line !== lineName);
      this.datasets = this.datasets.filter(x => x.selectedLine !== lineName);
      this.marcheNames = this.marcheNames.filter(x => x.lineName !== lineName);
      this.walk = this.walk.filter(x => x.line !== lineName);
      console.log(this.walk);
      this.chart.update();
    }
  }

  private updateInfo = (chart: any) => {
    const min = chart.chart.options.scales.xAxes[0].time.min;
    const max = chart.chart.options.scales.xAxes[0].time.max;
    const _datasets = this.datasets;
    const _options = this.options;
    let change = false;
    this.intersect.forEach(intersect => {
      change = true;
      _datasets[intersect.datasetIndex].data.splice(intersect.dataIndex, 1);
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
          const intersect = line_intersect(
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
          const intersect = line_intersect(
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
                this.stations.forEach(station => {
                  if (station.stations[value]) {
                    if (!stationsLabel) {
                      stationsLabel = station.stations[value];
                    } else {
                      stationsLabel += ' / ' + station.stations[value];
                    }
                  }
                });
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
            onPan: this.updateInfo
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
            onZoom: this.updateInfo
          }
        },
        datalabels: {
          backgroundColor: 'transparent',
          color: function(context: any) {
            return context.dataset.borderColor;
          },
          borderRadius: 4,
          clip: false,
          font: {
            weight: 'bold',
            size: 14
          },
          anchor: (context: any) => {
            const dataIndex = context.dataIndex;
            if (context.dataset.data[dataIndex].x === minTime) {
              return 'end';
            }
            return 'start';
          },
          clamp: true,
          align: (context: any) => {
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
          formatter: function(value: any, context: any, t: any) {
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
