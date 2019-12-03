import { Component, OnInit } from '@angular/core';

import { Context } from 'chartjs-plugin-datalabels';

import { HomeService, MarchesByLines, Line, Point, RunInfo, Station, GeoPoint, TrainPos, Marche } from './home.service';
import * as Chart from 'chart.js';
//@ts-ignore
const simplify = require('simplify-js');

Chart.defaults.global.elements.line.fill = false;
Chart.pluginService.register({
  beforeDraw: function(chart: any) {
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;
    ctx.fillStyle = '#999999';
    ctx.save();
    ctx.rect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    ctx.fill();
    ctx.rect(
      0,
      ctx.canvas.height - (ctx.canvas.height - chartArea.bottom),
      chartArea.left,
      ctx.canvas.height - chartArea.bottom
    );
    ctx.fill();
    ctx.restore();
  }
});
const colorList = [
  '#6E1E78',
  '#E05206',
  '#A1006B',
  '#FFB612',
  '#009AA6',
  '#CD0037',
  '#0088CE',
  '#e6194b',
  '#3cb44b',
  '#4363d8',
  '#f58231',
  '#f032e6',
  '#9a6324',
  '#800000',
  '#4363d8',
  '#f58231',
  '#f032e6',
  '#9a6324',
  '#800000',
  '#808000',
  '#000075'
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  manchettes: any = undefined;
  isLoading = true;
  linesName: string[] = [];
  continueUpdateStopTrains: boolean = false;
  manchetteStatus: string = null;
  selected = 0;
  _manchetteselect: any = undefined;
  private worker = [
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' }),
    new Worker('./home.worker', { type: 'module' })
  ];
  readonly maxWorker = this.worker.length - 1;
  private saveUpdatedTrains: string[] = [];
  private saveTimeUpdateTrains: number[] = [];
  private chart: any;
  private actualWorker = 0;
  private hiddenDataSets: Chart.ChartDataSets[] = [];
  private stations: { line: string; stations: string[] }[] = [];
  private displayedStations: string[] = [];
  private simTime: Date;
  private runInfos: RunInfo[] = [];
  private maxStation: number;
  private minTime: number;
  private maxTime: number;
  private onUpdate: boolean = false;
  private data: MarchesByLines;
  private savedStations: any[];
  private selectedManchette: any = null;
  private dataSaves: any[] = [];
  private manchetteStations: any[] = [];
  private save: TrainPos[] = [];

  constructor(private homeService: HomeService) {}

  async ngOnInit() {
    const eel = window.eel;
    eel.set_host('ws://localhost:8000');

    const UpdateTrain = (data: string) => {
      if (!this.chart) {
        return;
      }
      const dataSplited = data.split(' ');
      const coordTrain: Point = { x: parseFloat(dataSplited[2]), y: parseFloat(dataSplited[3]) };
      const runName = dataSplited[0];
      this.updateTrain(runName, coordTrain);
    };
    const UpdateSimTime = (data: string) => {
      if (!this.chart && !this.chart.config.datasets) {
        return;
      }
      this.simTime = this.homeService.parseDateTime(data);
      this.updateRealTime();
    };
    eel.expose(UpdateTrain, 'update_train_js');
    eel.expose(UpdateSimTime, 'update_sim_time_js');
    const walks = await eel.receive_walks_from_py()();
    const manchettes = await eel.receive_manchettes_from_py()();
    this.manchettes = JSON.parse(manchettes);
    this.data = JSON.parse(walks);
    this.linesName = this.data.lines.map((x: Line) => (x.marches.length > 0 ? x.line_name : undefined));
    this.linesName = this.linesName.filter((x: string) => x);
    this.initLines();
    this.initChart();
    for (let line of this.linesName) {
      this.selectLine(line, true);
      this.selectLine(line, false);
      this.selectLine(line, true);
    }
    this.selectManchette(this.manchettes[0]);
    this.selectManchette(this.manchettes[0]);
    this.isLoading = false;
  }

  getStationWithGeoPoint(lat: Number, lon: Number) {
    for (let i = 0; i < this.data.lines.length; i++) {
      for (let j = 0; j < this.data.lines[i].stations.length; j++) {
        const station = this.data.lines[i].stations[j];
        if (Number(station.coord.lat) === lat && Number(station.coord.lon) === lon) {
          return station;
        }
      }
    }
    return null;
  }

  getStationGeoPoint(name: string) {
    for (let i = 0; i < this.data.lines.length; i++) {
      for (let j = 0; j < this.data.lines[i].stations.length; j++) {
        const station = this.data.lines[i].stations[j];
        if (station.name === name) {
          return { lat: Number(station.coord.lat), lon: Number(station.coord.lon) };
        }
      }
    }
    return null;
  }

  clearRealTime() {
    const datasets = this.chart.config.data.datasets;

    for (let i = 0; i < datasets.length; i++) {
      if (datasets[i].prediction === false) {
        datasets[i].data = [];
      }
    }
  }

  getDisplayedStationsCoords() {
    const coords = [];

    for (let i = 0; i < this.displayedStations.length; i++) {
      coords.push(this.getStationGeoPoint(this.displayedStations[i]));
    }
    return coords;
  }

  changePointsY() {
    const coords = this.getDisplayedStationsCoords();

    this.chart.config.data.datasets.forEach((dataset: any) => {
      dataset.data.forEach((point: any) => {
        for (let i = 0; i < this.displayedStations.length; i++) {
          if (!point.coord || point.realTime || point.prediction === false) {
            continue;
          }
          if (
            this.displayedStations[i][0] !== '*' &&
            point.coord.lat === coords[i].lat &&
            point.coord.lon === coords[i].lon
          ) {
            point.y = i;
          }
        }
      });
    });
  }

  getGeoPointsToKeep() {
    const pointsToKeep: GeoPoint[] = [];

    for (let i = 0; i < this.displayedStations.length; i++) {
      const coord = pointsToKeep.push(this.getStationGeoPoint(this.displayedStations[i]));
    }
    return pointsToKeep;
  }

  checkIfGeoPointsMatch(coord: GeoPoint, geoPoints: GeoPoint[]) {
    if (!coord.lat || !coord.lon) {
      return false;
    }
    for (let i = 0; i < geoPoints.length; i++) {
      if (this.displayedStations[i][0] !== '*' && coord.lat === geoPoints[i].lat && coord.lon === geoPoints[i].lon) {
        return true;
      }
    }
    return false;
  }

  removePointsOutsideManchette() {
    const geoPointsToKeep = this.getGeoPointsToKeep();
    let datasets = this.chart.config.data.datasets;

    this.chart.config.data.datasets.forEach((dataset: any) => {
      if (dataset.borderColor === undefined) {
        dataset.borderColor = '#323232';
      }
      this.dataSaves.push(JSON.parse(JSON.stringify(dataset.data)));
    });
    datasets.forEach((dataset: any) => {
      for (let i = 0; i < dataset.data.length; i++) {
        if (dataset.data[i].realTime || !dataset.data[i].coord) {
          continue;
        } else if (this.checkIfGeoPointsMatch(dataset.data[i].coord, geoPointsToKeep) === false) {
          dataset.data.splice(i, 1);
          i--;
        }
      }
    });
  }

  manchetteStationExists(manchetteStation: string, stations: any[]) {
    for (let i = 0; i < stations.length; i++) {
      if (stations[i].stations.includes(manchetteStation)) {
        return true;
      }
    }
    return false;
  }

  getSelectedStationsInfos(names: string[]) {
    const stations: Station[] = [];

    this.data.lines.forEach(line => {
      line.stations.forEach(station => {
        for (let i = 0; i < names.length; i++) {
          const addedStations = stations.map(station => station.name);
          if (names[i] === station.name && !addedStations.includes(station.name)) {
            stations.push(station);
          }
        }
      });
    })
    return stations;
  }

  setStationsInManchette() {
    let stationsToDisplay: string[] = [];
    const manchette = this.selectedManchette;

    for (let i = 0; i < manchette.stop_points.length; i++) {
      if (this.manchetteStationExists(manchette.stop_points[i].name, this.stations)) {
        stationsToDisplay.push(manchette.stop_points[i].name);
      } else {
        stationsToDisplay.push('*' + manchette.stop_points[i].name);
      }
    }
    stationsToDisplay = stationsToDisplay.reverse();
    this.manchetteStations = this.getSelectedStationsInfos(stationsToDisplay);
    this.displayedStations = stationsToDisplay;
  }

  resetManchettes() {
    if (this.savedStations && this.savedStations.length > 0) {
      this.stations = this.savedStations;
      this.savedStations = [];
      for (let i = 0; i < this.chart.config.data.datasets.length; i++) {
        if (!this.chart.config.data.datasets[i].realTime && this.chart.config.data.datasets[i].prediction === true) {
          this.chart.config.data.datasets[i].data = JSON.parse(JSON.stringify(this.dataSaves[i]));
        }
      }
      this.maxStation = this.stations[0].stations.length;
      this.chart.update();
    }
  }

  getWalksWithTrainName(trainName: string) {
    for (let i = 0; i < this.data.lines.length; i++) {
      for (let j = 0; j < this.data.lines[i].marches.length; j++) {
        if (this.data.lines[i].marches[j].marche_name === trainName) {
          return this.data.lines[i].marches[j];
        }
      }
    }
    return null;
  }

  getTrainWalkInManchette(trainName: string) {
    const walks = this.getWalksWithTrainName(trainName).stop_points.map(point => point.stop_point_name);
    const manchetteWalks = [];

    for (let i = 0; i < walks.length; i++) {
      for (let j = 0; j < this.manchetteStations.length; j++) {
        if (walks[i] === this.manchetteStations[j].name) {
          const station = this.manchetteStations[j]
          if (station.coord.lat && station.coord.lon) {
            manchetteWalks.push({
              coord: {
                lat: Number(station.coord.lat),
                lon: Number(station.coord.lon)
              }
            });
          }
        }
      }
    }
    return manchetteWalks;
  }

  containsStation(name: string, arr: any[]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return true;
      }
    }
    return false;
  }

  getTrainWalk(trainName: string): any {
    const lines = this.data.lines;
    const walks = this.getWalksWithTrainName(trainName).stop_points.map(point => point.stop_point_name);
    const stations: any = [];

    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines[i].stations.length; j++) {
        for (let y = 0; y < walks.length; y++) {
          if (walks[y] === lines[i].stations[j].name && !this.containsStation(walks[y], stations)) {
            stations.push(lines[i].stations[j]);
          }
        }
      }
    }
    return stations;
  }

  createWalksPoints(walks: any) {
    const points: any[] = [];
    walks.forEach((walk: any) => {
      let i = 0;
      while (i < this.manchetteStations.length) {
        if (this.manchetteStations[i].name === walk.name) {
          break;
        }
        i++;
      }
      points.push({x: 0, y: i, coord: {lat: Number(walk.coord.lat), lon: Number(walk.coord.lon)}});
      points.push({x: 0, y: i, coord: {lat: Number(walk.coord.lat), lon: Number(walk.coord.lon)}});
    });
    return points;
  }

  fillRealTime() {
    this.save.forEach(train => {
      const index = this.hiddenDataSets.findIndex((x: any) => x.prediction && x.label === train.trainName);
      const walk = <any>this.hiddenDataSets[index];
      const manchetteWalk = this.chart.config.data.datasets.filter((dataset: any) => dataset.label === train.trainName && dataset.prediction === true)[0];
      const y = this.homeService.getTrainPosY(walk.data, manchetteWalk.data, {x: train.lat, y: train.lon}, train.trainName);
      const dataset = this.chart.config.data.datasets.filter((dataset: any) => dataset.label === train.trainName && dataset.prediction === false)[0];
      if (dataset && y && y.y && !y.isOutsideManchette) {
        dataset.data.push({x: train.time, y: y.y});
      }
    });
  }

  resetRealTimeSave() {
    const realTime = this.chart.config.data.datasets.filter((dataset: any) => dataset.prediction === false);
    
    realTime.forEach((train: any) => {train.data = []});
  }

  checkColor() {
    const realTime = this.chart.config.data.datasets.filter((dataset: any) => dataset.prediction === false);

    realTime.forEach((train: any) => {
      const prediction = this.chart.config.data.datasets.filter((pred: any) => pred.label === train.label)[0];
      train.borderColor = prediction.borderColor;
    });
  }

  selectManchette(manchette: any) {
    console.log(this.chart);
    this.resetManchettes();
    this.selectedManchette = manchette;
    this.savedStations = JSON.parse(JSON.stringify(this.stations));
    this.setStationsInManchette();
    this.maxStation = this.displayedStations.length - 1;
    this.removePointsOutsideManchette();
    this.changePointsY();
    this.updateInfo(this.chart);
    this.resetRealTimeSave();
    this.fillRealTime();
    this.chart.update();
  }

  selectLine(lineName: string, checked: boolean) {
    const _hiddenDataSets = this.hiddenDataSets;
    if (checked) {
      _hiddenDataSets.forEach((dataset: any) => {
        if (dataset.selectedLine === lineName) {
          this.chart.config.data.datasets.push(JSON.parse(JSON.stringify(dataset)));
        }
      });
      const indexRunInfo = this.runInfos.findIndex(x => x.lineName === lineName);
      const runInfo = this.runInfos[indexRunInfo];
      runInfo.hidden = false;
      this.maxStation = runInfo.maxStation > this.maxStation ? runInfo.maxStation : this.maxStation;
      this.stations.push({ line: runInfo.lineName, stations: runInfo.stations });
    } else {
      const indexRunInfo = this.runInfos.findIndex(x => x.lineName === lineName);
      const runInfo = this.runInfos[indexRunInfo];
      runInfo.hidden = true;
      this.maxStation = Math.max(...this.runInfos.filter(x => !x.hidden).map(x => x.maxStation));
      this.stations = this.stations.filter(x => x.line !== lineName);
      this.chart.config.data.datasets = this.chart.config.data.datasets.filter(
        (dataset: any) => dataset.selectedLine !== lineName
      );
    }
    if (this.chart) {
      this.chart.update();
    }
  }

  simplifyTraces(datasets: any, indexRealTime: number) {
    if (datasets[indexRealTime].data.length - datasets[indexRealTime].lastSimplify > 500) {
      if (datasets[indexRealTime].lastSimplify > 0) {
        const data = datasets[indexRealTime].data.slice(datasets[indexRealTime].lastSimplify);
        const simplified = simplify(data, 1);
        datasets[indexRealTime].data.length = datasets[indexRealTime].lastSimplify;
        datasets[indexRealTime].data.concat(simplified);
      } else {
        const data = datasets[indexRealTime].data.slice(datasets[indexRealTime].lastSimplify);
        datasets[indexRealTime].data = simplify(data, 1);
      }
      datasets[indexRealTime].lastSimplify = datasets[indexRealTime].data.length;
    }
  }

  stationCoordIsInManchette(lat: number, lon: number) {
    for (let i = 0; i < this.manchetteStations.length; i++) {
      const manchetteLat = Number(this.manchetteStations[i].coord.lat);
      const manchetteLon = Number(this.manchetteStations[i].coord.lon);
      if (lat == manchetteLat && lon == manchetteLon) {
        return true;
      }
    }
    return false;
  }

  private async updateTrain(runName: string, coordTrain: Point) {
    const _datasets: any = this.hiddenDataSets;
    const index = _datasets.findIndex((x: any) => x.prediction && x.label === runName);
    if (index === -1 || this.stations.findIndex(station => station.line === _datasets[index].selectedLine) === -1) {
      return;
    }

    const walk = <any>_datasets[index];
    const newWalk = this.chart.config.data.datasets.filter((dataset: any) => dataset.label === runName && dataset.prediction === true)[0];
    if (!this.saveUpdatedTrains.includes(runName)) {
      this.saveUpdatedTrains.push(runName);
      this.saveTimeUpdateTrains.push(1);
    } else {
      this.saveTimeUpdateTrains[this.saveUpdatedTrains.indexOf(runName)] += 1;
      if (this.saveTimeUpdateTrains[this.saveUpdatedTrains.indexOf(runName)] === 2) {
        let find: boolean = false;
        for (let trains of this.saveTimeUpdateTrains) {
          if (trains === 0) {
            for (let i = this.chart.config.data.datasets.length; i > 0; i--) {
              if (
                this.chart.config.data.datasets[i] &&
                this.chart.config.data.datasets[i].label ===
                  this.saveUpdatedTrains[this.saveTimeUpdateTrains.indexOf(trains)]
              ) {
                if (this.continueUpdateStopTrains) {
                  this.chart.config.data.datasets[i].data.push({
                    x: this.simTime,
                    y: this.chart.config.data.datasets[i].data[this.chart.config.data.datasets[i].data.length - 1].y
                  });
                }
                break;
              }
            }
            find = true;
            this.saveTimeUpdateTrains[this.saveTimeUpdateTrains.indexOf(trains)] = 1;
          }
        }
        if (find === false) {
          for (let i = 0; i < this.saveTimeUpdateTrains.length; i++) {
            this.saveTimeUpdateTrains[i] = 0;
          }
        }
      }
    }
    this.worker[this.actualWorker].onmessage = ({ data }) => {
      const runName = data.runName;
      const indexRealTime = _datasets.findIndex((x: any) => x.label === runName && !x.prediction);
      this.save.push({
        trainName: runName,
        time: this.simTime,
        lat: data.coordTrain.x,
        lon: data.coordTrain.y
      });
      if (indexRealTime === -1 && !data.isOutsideManchette) {
        const newDataset = {
          type: 'scatter',
          selectedLine: newWalk.selectedLine,
          label: runName,
          data: [{}],
          showLine: true,
          borderColor: "#0000CD",
          hidden: false,
          pointRadius: 0,
          borderWidth: 3,
          prediction: false,
          lastSimplify: 0
        };
        if (
          this.stationCoordIsInManchette(data.stations1.coord.lat, data.stations1.coord.lon) &&
          this.stationCoordIsInManchette(data.stations2.coord.lat, data.stations2.coord.lon)
        ) {
          newDataset.data.push({ x: this.simTime, y: data.y });
        }
        _datasets.push(JSON.parse(JSON.stringify(newDataset)));
        this.chart.config.data.datasets.push(JSON.parse(JSON.stringify(newDataset)));
      } else {
        if (_datasets[indexRealTime]) {
          // @ts-ignore
          _datasets[indexRealTime].data.push({ x: this.simTime, y: data.y });
          if (!data.isOutsideManchette) {
            //console.log(data, this.getStationWithGeoPoint(data.stations1.coord.lat, data.stations1.coord.lon), this.getStationWithGeoPoint(data.stations2.coord.lat, data.stations2.coord.lon));
            this.chart.data.datasets[indexRealTime].data.push({ x: this.simTime, y: data.y });
          }
          this.simplifyTraces(this.chart.data.datasets, indexRealTime);
          this.simplifyTraces(_datasets, indexRealTime);
        }
      }
    };
    let clonedWalk = JSON.parse(JSON.stringify(walk.data));
    if (newWalk) {
      clonedWalk = JSON.parse(JSON.stringify(newWalk.data));
    }
    const clonedCoordTrain = JSON.parse(JSON.stringify(coordTrain));
    this.worker[this.actualWorker].postMessage({ walks: walk.data, manchetteWalks: clonedWalk, coordTrain: clonedCoordTrain, runName });
    this.actualWorker += 1;
    if (this.actualWorker > this.maxWorker) {
      this.actualWorker = 0;
    }
  }

  private updateRealTime() {
    let minutes: string = '';
    if (this.simTime.getMinutes().toString().length === 1) {
      minutes = 0 + this.simTime.getMinutes().toString();
    } else {
      minutes = this.simTime.getMinutes().toString();
    }
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
    const _datasets: any = this.chart.config.data.datasets;
    const _options = this.chart.options;
    const indexRealTime = _datasets.findIndex((x: any) => x.realTime === true);
    let offset = 0;
    if (indexRealTime !== -1) {
      offset = this.simTime.getTime() - _datasets[indexRealTime].data[0].x;
      _datasets.splice(indexRealTime, 1);
    }
    this.chart.options.scales.xAxes[0].time.min += offset;
    this.chart.options.scales.xAxes[0].time.max += offset;
    if (data[0].x < _options.plugins.zoom.pan.rangeMin.x) {
      _options.plugins.zoom.pan.rangeMin = {
        x: data[0].x
      };
      _options.plugins.zoom.zoom.rangeMin = {
        x: data[0].x
      };
    }
    if (data[0].x > _options.plugins.zoom.pan.rangeMax.x) {
      _options.plugins.zoom.pan.rangeMax = {
        x: data[0].x
      };
      _options.plugins.zoom.zoom.rangeMax = {
        x: data[0].x
      };
    }
    _datasets.push({
      type: 'scatter',
      label: this.simTime.getHours() + ':' + minutes,
      data: data,
      showLine: true,
      borderColor: 'black',
      pointRadius: 0,
      borderWidth: 1,
      realTime: true
    });
    if (this.onUpdate) {
      return;
    }
    this.updateInfo(this.chart);
    this.chart.update();
  }

  centerToSimTime() {
    const size = this.chart.options.scales.xAxes[0].time.max - this.chart.options.scales.xAxes[0].time.min;
    this.chart.options.scales.xAxes[0].time.min = this.simTime.getTime() - size / 2;
    this.chart.options.scales.xAxes[0].time.max = this.simTime.getTime() + size / 2;
  }

  changeOption(value: boolean) {
    this.continueUpdateStopTrains = value;
  }

  private onPanZoom = () => {
    this.onUpdate = true;
  };

  private onEndPanZoom = (chart: any) => {
    this.onUpdate = false;
    this.updateInfo(chart.chart);
  };

  private updateInfo = (chart: any) => {
    const min = this.chart.options.scales.xAxes[0].time.min;
    const max = this.chart.options.scales.xAxes[0].time.max;
    const _datasets: any = this.chart.config.data.datasets.filter((dataset: any) => dataset.prediction);
    _datasets.forEach((dataset: any, index: number) => {
      _datasets[index].data = _datasets[index].data.filter((data: any) => data.coord);
      if (
        dataset.data.length === 0 ||
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
          _datasets[index].data.splice(i, 0, { x: intersect.x, y: intersect.y });
          break;
        }
      }
    });
    this.chart.update();
  };

  private initChart() {
    const options: any = {
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
      hover: { mode: null },
      events: [],
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
              distribution: 'series',
              // @ts-ignore
              min: this.minTime,
              // @ts-ignore
              max: this.minTime + 600000 * 5,
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
                return this.displayedStations[value];
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
              x: this.minTime
            },
            rangeMax: {
              x: this.maxTime + 60000000 * 24
            },
            onPanComplete: this.onEndPanZoom,
            onPan: this.onPanZoom
          },
          zoom: {
            enabled: true,
            mode: 'x',
            rangeMin: {
              x: this.minTime
            },
            rangeMax: {
              x: this.maxTime + 60000000 * 24
            },
            onZoomComplete: this.onEndPanZoom,
            onPan: this.onPanZoom
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
            const min = context.chart.options.scales.xAxes[0].time.min;
            const len = context.dataset.data.length - 1;
            const dataIndex = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const dataset = this.chart.config.data.datasets[datasetIndex];
            if (dataset.realTime) {
              return true;
            }
            if (dataset.data[dataIndex].x < min || !dataset.prediction) {
              return false;
            }
            return dataIndex === 0 || dataIndex === len || !dataset.data[dataIndex].coord;
          }
        }
      }
    };
    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    this.chart = new Chart.Chart(canvas, {
      type: 'scatter',
      data: {
        datasets: []
      },
      options: options
    });
  }

  private initLines() {
    this.data.lines.forEach(line => {
      const color = "#FFFFFF";
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
        this.minTime = minTime;
      }
      if (!this.maxTime || this.maxTime < maxTime) {
        this.maxTime = maxTime;
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

  changeRange(unit: string, offset: number) {
    this.chart.options.scales.xAxes[0].time.unitStepSize = offset;
    this.chart.options.scales.xAxes[0].time.unit = unit;
  }

  compareSite(a: any, b: any): boolean {
    if (!a || !b) {
      return false;
    }
    return a.name === b.name;
  }

  get selectedManchettes(): any {
    if (this._manchetteselect === undefined) {
      this._manchetteselect = this.manchettes[0];
    }
    return this._manchetteselect;
  }
  set selectedManchettes(selectedSite: any) {
    this._manchetteselect = selectedSite;
    this.selectManchette(selectedSite);
  }
}
