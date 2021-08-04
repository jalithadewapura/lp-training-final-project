import { FamilyModule } from 'src/family/family.module';
import { CivilianRepository } from './civilian.repository';
import { forwardRef, Module } from '@nestjs/common';
import { CivilianService } from './civilian.service';
import { CivilianResolver } from './civilian.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CivilianSchema } from 'src/schemas/civilian.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Civilian', schema: CivilianSchema }]),
    forwardRef(() => FamilyModule)
  ],
  providers: [CivilianResolver, CivilianService, CivilianRepository],
  exports: [CivilianService]
})
export class CivilianModule { }
