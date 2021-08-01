import { CivilianRepository } from './civilian.repository';
import { Module } from '@nestjs/common';
import { CivilianService } from './civilian.service';
import { CivilianResolver } from './civilian.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CivilianSchema } from 'src/schemas/civilian.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Civilian', schema: CivilianSchema }]),
  ],
  providers: [CivilianResolver, CivilianService, CivilianRepository],
})
export class CivilianModule { }
