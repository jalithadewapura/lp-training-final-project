import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Province } from './entities/province.entity';
import { ProvinceService } from './province.service';
import { ProvinceResolver } from './province.resolver';


@Module({
  imports: [
    TypeOrmModule.forFeature([Province]),
  ],
  providers: [ProvinceResolver, ProvinceService],
  exports: [
    ProvinceService
  ]
})
export class ProvinceModule { }
