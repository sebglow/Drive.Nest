import { Module } from '@nestjs/common';
import { StreetController } from './street.controller';
import { StreetService } from './street.service';
import { MathProvider } from './providers/math.provider';
import { DataModule } from 'src/data/data.module';
import { DataService } from 'src/data/data.service';

@Module({
  imports: [DataModule],
  controllers: [StreetController],
  providers: [StreetService, MathProvider, DataService],
})
export class StreetModule {}
