import { Injectable } from '@nestjs/common';
import { MathProvider } from './providers/math.provider';
import { Street } from './model/street';

import { Road } from "src/data/model/road";
import { GeoLocation } from "src/data/model/geo.location";
import { DataService } from 'src/data/data.service';

@Injectable()
export class StreetService {
  constructor(
    private readonly mathProvider : MathProvider,
    private readonly dataService: DataService) {
  }

  GetAll() : Street[] {
    let allRoads = this.dataService.get();

    return allRoads.map(r => ({
      name: r.Name,
      start: [r.Start.X, r.Start.Y],
      end: [r.End.X, r.End.Y]
    }));
  }
    
  AddStreet(street: Street) {

    let x1 = street.start[0];
    let y1 = street.start[1];
    let x2 = street.end[0];
    let y2 = street.end[1];

    let line = this.mathProvider.CalculateLine(x1, y1, x2, y2);

    let newRoad : Road = {
      Name: street.name,
      Start: {X: x1, Y: y1},
      End: {X: x2, Y: y2},
      RoadPattern: line
    };

    this.dataService.add(newRoad);
  }

  FindNearest(x: number, y: number) : Street[] {
    let point : GeoLocation = {
      X: x,
      Y: y
    };

    const roadsWithDistance = this.dataService.get().map(r => ({
      road: r,
      distance: this.mathProvider.calculateDistance(point)(r.RoadPattern, r.Start)
    }))
    .sort((a, b) => a.distance - b.distance);

    if(roadsWithDistance.length == 0)
    {
      return null;
    }

    const minDistance = roadsWithDistance[0].distance;

    return roadsWithDistance
      .filter(r => r.distance === minDistance)
      .map(r => ({
        name: r.road.Name,
        start: [r.road.Start.X, r.road.Start.Y],
        end: [r.road.End.X, r.road.End.Y]
      }))
  }
}
