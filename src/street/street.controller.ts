import * as rawbody from 'raw-body';
import { Controller, Get, Post, Body, Req, Query } from '@nestjs/common';
import { StreetService } from './street.service';
import { Street } from './model/street';
import json5 = require('json5');

@Controller('api')
export class StreetController {
  constructor(private readonly streetService: StreetService) {}

  @Get('street')
  index() {
    return this.streetService.GetAll();
  }

  @Post('street')
  async create(@Body() street: Street, @Req() req) {

    // I do this only to keep previous POSTMAN collection compatibility
    if(!street) {
      const raw = await rawbody(req);
      street =json5.parse(raw.toString().trim());
    }

    this.streetService.AddStreet(street);
  }

  @Get('closest')
  FindNearest(@Query() coordinates) {
    const x = coordinates.x;
    const y = coordinates.y;
    return this.streetService.FindNearest(x, y);
  }
}
 