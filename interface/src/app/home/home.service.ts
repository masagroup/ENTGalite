import { Injectable } from '@angular/core';

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
}
