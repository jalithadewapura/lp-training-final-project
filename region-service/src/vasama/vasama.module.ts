import { DivisionModule } from './../division/division.module';
import { Module } from '@nestjs/common';
import { VasamaService } from './vasama.service';
import { VasamaResolver } from './vasama.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vasama } from './entities/vasama.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vasama]),
    DivisionModule
  ],
  providers: [VasamaResolver, VasamaService]
})
export class VasamaModule { }
