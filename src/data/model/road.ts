import { GeoLocation } from "./geo.location";
import { Line } from "./line";

export interface Road
{
  Name: string,
  Start: GeoLocation,
  End: GeoLocation,
  RoadPattern: Line    
}