import { Injectable } from '@nestjs/common';
import { Road } from './model/road';

@Injectable()
export class DataService {

  private readonly roads: Road[] = [];

  get() {
    return this.roads;
  }

  add(road: Road) {
    this.roads.push(road); 
  }
}
