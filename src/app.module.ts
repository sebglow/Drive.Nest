import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StreetModule } from './street/street.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [StreetModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
