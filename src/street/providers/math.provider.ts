import { Line } from "src/data/model/line";
import { GeoLocation } from "src/data/model/geo.location";

export class MathProvider {
  
  CalculateLine(x1: number, y1: number, x2: number, y2: number) : Line
  {
    //y = mx + d
    let m = this.calculateSlope(x1,y1,x2,y2);
    if(m === null)
    {
      return null;
    }

    let d = y1 - m*x1;
    
    //convert to: ax + by + c = 0 
    let a = -1 * m;
    let b = 1;
    let c = -1 * d;

    return {
      A: a,
      B: b,
      C: c
    };
  }

  private calculateSlope(x1: number, y1: number, x2: number, y2: number) : number {
    if(x2 === x1)
    {
      return null;
    }

    return (y2 -y1)/(x2-x1);
  }

  calculateDistance = (point: GeoLocation) => (line: Line, start: GeoLocation) => {
    let distance = 0;
    if(line !== null) 
    {
      distance = Math.abs(line.A * point.X + line.B * point.Y + line.C) /
                 Math.sqrt(Math.pow(line.A, 2) + Math.pow(line.B, 2));
    }
    else //vertical line
    {
      distance = Math.abs(point.X - start.X);
    }

    return distance;
  }
}
