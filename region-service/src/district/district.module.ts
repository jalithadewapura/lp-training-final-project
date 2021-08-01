import { ProvinceModule } from './../province/province.module';
import { District } from 'src/district/entities/district.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictResolver } from './district.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([District]),
    ProvinceModule
  ],
  providers: [DistrictResolver, DistrictService],
  exports: [DistrictService]
})
export class DistrictModule { }
