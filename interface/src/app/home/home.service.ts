import { Injectable } from '@angular/core';

export interface TrainPos {
  trainName: string;
  time: Date;
  lat: number;
  lon: number;
}

export interface StopPoint {
  stop_point_name: string;
  stop_point_id: string;
  departure_time: string;
  arrival_time: string;
}
export interface Marche {
  marche_name: string;
  stop_points: StopPoint[];
}

export interface Station {
  name: string;
  label: string;
  coord: {
    lat: string;
    lon: string;
  };
}
export interface Line {
  line_name: string;
  line_id: string;
  marches: Marche[];
  stations: Station[];
}
export interface MarchesByLines {
  date_times: string;
  lines: Line[];
}

export interface Point {
  x: number;
  y: number;
}

export interface GeoPoint {
  lat: number | string;
  lon: number | string;
}

export interface RunInfo {
  lineName: string;
  marcheNames: string[];
  stations: string[];
  hidden: boolean;
  minTime: number;
  maxTime: number;
  minStation: number;
  maxStation: number;
}

Date.prototype.pad = function pad(number: number): string {
  if (number < 10) {
    return '0' + number.toString();
  }
  return number.toString();
};

Date.prototype.getUTCTime = function() {
  return this.pad(this.getUTCHours()) + ':' + this.pad(this.getUTCMinutes()) + ':' + this.pad(this.getSeconds());
};

function degToRad(deg: number) {
  return deg * (Math.PI / 180);
}

@Injectable()
export class HomeService {
  constructor() {}

  getTime(time: string) {
    const timeList = time.match(/.{1,2}/g);
    return timeList.map((x: string) => parseInt(x, 10));
  }

  parseDateTime(rawDate: string): Date {
    const datePattern = /^(\d{4})(\d{2})(\d{2})[T](\d{2})(\d{2})(\d{2})$/;
    const [, year, month, day, hours, minute, second] = datePattern.exec(rawDate).map((x: string) => parseInt(x, 10));
    const utcDate = new Date(year, month - 1, day, hours, minute, second);
    return new Date(utcDate);
  }

  getRealtime(date: Date): number {
    return date.getTime() - date.getTimezoneOffset() * 60000;
  }

  getTimeWithDate(rawTime: string, actualDate: Date): Date {
    const [hours, minutes, second] = this.getTime(rawTime);
    const date = new Date(actualDate);
    date.setUTCHours(hours, minutes, second);
    return date;
  }
  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getInitialTraces(data: MarchesByLines, selectedLine: string, color: string) {
    const line = data.lines.find((x: Line) => x.line_name === selectedLine);
    const stations: Station[] = line.stations;
    const traces: any[] = [];
    const stopName: string[] = [];
    const marchNames: string[] = [];
    let minTime: number;
    let maxTime: number;
    let minStation: number;
    let maxStation: number;
    line.marches.forEach((marche: Marche) => {
      const stopPoints = marche.stop_points;
      if (marchNames.includes(marche.marche_name)) {
        return;
      }
      marchNames.push(marche.marche_name);
      const trace: any[] = [];
      stopPoints.forEach((stopPoint: StopPoint) => {
        const arrivalTime = this.parseDateTime(stopPoint.arrival_time).getTime();
        const departureTime = this.parseDateTime(stopPoint.departure_time).getTime();
        const y = stations.findIndex(station => station.name === stopPoint.stop_point_name);
        if (y === -1) {
          return;
        }
        if (!maxTime) {
          maxTime = departureTime;
        } else if (maxTime && maxTime < departureTime) {
          maxTime = departureTime;
        }
        if (!minTime) {
          minTime = arrivalTime;
        } else if (minTime && minTime > arrivalTime) {
          minTime = arrivalTime;
        }
        if (!minStation) {
          minStation = y;
        } else if (minStation && minStation > y) {
          minStation = y;
        }
        if (!maxStation) {
          maxStation = y;
        } else if (maxStation && maxStation < y) {
          maxStation = y;
        }
        trace.push({
          x: arrivalTime,
          y: y,
          coord: {
            lat: parseFloat(stations[y].coord.lat),
            lon: parseFloat(stations[y].coord.lon)
          }
        });
        trace.push({
          x: departureTime,
          y: y,
          coord: {
            lat: parseFloat(stations[y].coord.lat),
            lon: parseFloat(stations[y].coord.lon)
          }
        });
        stopName.push(stopPoint.stop_point_name);
      });
      traces.push({
        type: 'scatter',
        label: marche.marche_name,
        data: trace,
        showLine: true,
        borderColor: color,
        pointRadius: 0,
        lineTension: 0,
        borderDash: [10, 5],
        borderWidth: 1,
        selectedLine: selectedLine,
        prediction: true,
        hidden: false
      });
    });
    return { traces, stations, minTime, maxTime, minStation, maxStation, marchNames };
  }
  line_intersect(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
    let ua,
      ub,
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
  
  getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dist = R * c; // Distance in km
    return dist;
  }

  project(p: Point, a: Point, b: Point) {
    const atob = { x: b.x - a.x, y: b.y - a.y };
    const atop = { x: p.x - a.x, y: p.y - a.y };
    const len = atob.x * atob.x + atob.y * atob.y;
    let dot = atop.x * atob.x + atop.y * atob.y;
    const t = Math.min(1, Math.max(0, dot / len));
  
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

  getClosestStations(coordTrain: any, walks: any) {
    let bestStations: any;
    let stations1: any;
    let stations2: any;
    let minDist: number;
    const len = walks.length - 1;
    walks.forEach((element: any, i: number) => {
      if (i + 1 > len) {
        return;
      }
      const coord1: Point = { x: element.coord.lat, y: element.coord.lon };
      const coord2: Point = {
        x: walks[i + 1].coord.lat,
        y: walks[i + 1].coord.lon
      };
      const position = this.project(coordTrain, coord1, coord2);
      if (Number.isNaN(position.t)) {
        return;
      }
      const testDist = this.getDistanceFromLatLonInKm(position.point.x, position.point.y, coordTrain.x, coordTrain.y);
      if (!bestStations || testDist < minDist) {
        minDist = testDist;
        bestStations = position;
        stations1 = walks[i];
        stations2 = walks[i + 1];
      }
    });
  
    if (!bestStations) {
      return;
    }
    return { station1: stations1, station2: stations2 };
  }

  removeEmptyCoords(walks: any) {
    for (let i = 0; i < walks.length; i++) {
      if (!walks[i].coord || !walks[i].coord.lat || !walks[i].coord.lon) {
        walks.splice(i, 1);
        i--;
      }
    }
  }
  
  checkIfSameStationCoord(station1: any, station2: any) {
    if (station1.coord.lat != station2.coord.lat || station1.coord.lon != station2.coord.lon) {
      return false;
    }
    return true;
  }

  checkIfSameStations(manchetteStation1: any, manchetteStation2: any, station1: any, station2: any) {
    if ((!this.checkIfSameStationCoord(manchetteStation1, station1) && !this.checkIfSameStationCoord(manchetteStation1, station2)) ||
        (!this.checkIfSameStationCoord(manchetteStation2, station1) && !this.checkIfSameStationCoord(manchetteStation2, station2))
    ) {
      return false;
    }
    return true;
  }

  getTrainPosY(walks: any, manchetteWalks: any, coordTrain: any, runName: any) {
    this.removeEmptyCoords(manchetteWalks);
    let bestStations: any;
    let stations1: any;
    let stations2: any;
    let minDist: number;
    const len = manchetteWalks.length - 1;
    manchetteWalks.forEach((walk: any, i: number) => {
      if (i + 1 > len) {
        return;
      }
      const coord1: Point = { x: walk.coord.lat, y: walk.coord.lon };
      const coord2: Point = {
        x: manchetteWalks[i + 1].coord.lat,
        y: manchetteWalks[i + 1].coord.lon
      };
      const position = this.project(coordTrain, coord1, coord2);
      if (Number.isNaN(position.t)) {
        return;
      }
      const testDist = this.getDistanceFromLatLonInKm(position.point.x, position.point.y, coordTrain.x, coordTrain.y);
      if (!bestStations || testDist < minDist) {
        minDist = testDist;
        bestStations = position;
        stations1 = manchetteWalks[i];
        stations2 = manchetteWalks[i + 1];
      }
    });
  
    if (!bestStations) {
      return;
    }
    const totalDist = this.getDistanceFromLatLonInKm(
      stations1.coord.lat,
      stations1.coord.lon,
      stations2.coord.lat,
      stations2.coord.lon
    );
    const dist = this.getDistanceFromLatLonInKm(
      stations1.coord.lat,
      stations1.coord.lon,
      bestStations.point.x,
      bestStations.point.y
    );
    const closestStations = this.getClosestStations(coordTrain, walks);
    let isOutsideManchette = false;
    if (!this.checkIfSameStations(stations1, stations2, closestStations.station1, closestStations.station2)) {
      isOutsideManchette = true;
    }
    const percent = (100 * dist) / totalDist;
    const y = stations1.y + ((stations2.y - stations1.y) / 100) * percent;
    const response = { y: y, runName: runName, stations1: stations1, stations2: stations2, coordTrain: coordTrain, isOutsideManchette: isOutsideManchette };
    return response;
  }
}
