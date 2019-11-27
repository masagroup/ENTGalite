/// <reference lib="webworker" />

interface Point {
  x: number;
  y: number;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const dist = R * c; // Distance in km
  return dist;
}

function project(p: Point, a: Point, b: Point) {
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

function getClosestStations(coordTrain: any, walks: any) {
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
    const position = project(coordTrain, coord1, coord2);
    if (Number.isNaN(position.t)) {
      return;
    }
    const testDist = getDistanceFromLatLonInKm(position.point.x, position.point.y, coordTrain.x, coordTrain.y);
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

function checkIfSameStationCoord(station1: any, station2: any) {
  if (station1.coord.lat != station2.coord.lat || station1.coord.lon != station2.coord.lon) {
    return false;
  }
  return true;
}


function checkIfSameStations(manchetteStation1: any, manchetteStation2: any, station1: any, station2: any) {
  if ((!checkIfSameStationCoord(manchetteStation1, station1) && !checkIfSameStationCoord(manchetteStation1, station2)) ||
      (!checkIfSameStationCoord(manchetteStation2, station1) && !checkIfSameStationCoord(manchetteStation2, station2))
  ) {
    return false;
  }
  return true;
}


addEventListener('message', (message: any) => {
  const manchetteWalks = message.data.manchetteWalks.filter((data: any) => data && data.coord);
  const walks = message.data.walks.filter((data: any) => data && data.coord);
  const coordTrain = message.data.coordTrain;
  const runName = message.data.runName;
  let bestStations: any;
  let stations1: any;
  let stations2: any;
  let minDist: number;
  const len = manchetteWalks.length - 1;
  manchetteWalks.forEach((element: any, i: number) => {
    if (i + 1 > len) {
      return;
    }
    const coord1: Point = { x: element.coord.lat, y: element.coord.lon };
    const coord2: Point = {
      x: manchetteWalks[i + 1].coord.lat,
      y: manchetteWalks[i + 1].coord.lon
    };
    const position = project(coordTrain, coord1, coord2);
    if (Number.isNaN(position.t)) {
      return;
    }
    const testDist = getDistanceFromLatLonInKm(position.point.x, position.point.y, coordTrain.x, coordTrain.y);
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
  const totalDist = getDistanceFromLatLonInKm(
    stations1.coord.lat,
    stations1.coord.lon,
    stations2.coord.lat,
    stations2.coord.lon
  );
  const dist = getDistanceFromLatLonInKm(
    stations1.coord.lat,
    stations1.coord.lon,
    bestStations.point.x,
    bestStations.point.y
  );
  const closestStations = getClosestStations(coordTrain, walks);
  let isOutsideManchette = false;
  if (!checkIfSameStations(stations1, stations2, closestStations.station1, closestStations.station2)) {
    isOutsideManchette = true;
  }
  const percent = (100 * dist) / totalDist;
  const y = stations1.y + ((stations2.y - stations1.y) / 100) * percent;
  const response = { y: y, runName: runName, stations1: stations1, stations2: stations2, coordTrain: coordTrain, isOutsideManchette: isOutsideManchette };
  postMessage(response);
});
