import { DistrictModule } from './../district/district.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionService } from './division.service';
import { DivisionResolver } from './division.resolver';
import { Division } from './entities/division.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Division]),
    DistrictModule
  ],
  providers: [DivisionResolver, DivisionService],
  exports: [DivisionService]
})
export class DivisionModule { }
