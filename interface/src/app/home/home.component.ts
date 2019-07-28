import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BaseChartDirective } from 'ng2-charts';
// @ts-ignore
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { HomeService, MarchesByLines, Line, Marche, StopPoint } from './home.service';
import * as Chart from 'chart.js';

Chart.defaults.global.elements.line.fill = false;
const colorList = ['#ffff00', '#008000', '#f23320', '#1d1cf2', '#4ef2f5', '#db59f5', '#0000'];

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
  _selectedLine = '';
  dateTime: Date;
  simTime: Date;
  colorIndex = 0;
  options: any;
  datasets: any[];
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
      console.log(data);
    };
    const UpdateSimTime = (data: string) => {
      this.simTime = new Date(data);
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

  selectLine(lineName: string, event: any) {
    if (!this.datasets) {
      this.selectedLine = lineName;
    } else if (event.checked) {
      const { traces, stations, minTime, maxTime, minStation, maxStation } = this.homeService.getInitialTraces(
        this.data,
        lineName,
        colorList[this.colorIndex]
      );
      this.stations.push({ line: lineName, stations: stations });
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
    const { traces, stations, minTime, maxTime, minStation, maxStation } = this.homeService.getInitialTraces(
      this.data,
      this._selectedLine,
      colorList[this.colorIndex]
    );
    this.stations.push({ line: selectedLine, stations: stations });
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
