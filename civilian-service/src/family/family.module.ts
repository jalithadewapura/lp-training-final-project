
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FamilySchema } from '../schemas/family.schema';
import { FamilyRepository } from './family.repository';
import { FamilyService } from './family.service';
import { FamilyResolver } from './resolvers/family.resolver';

import { ProvinceResolver } from 'src/family/resolvers/province.resolver';
import { DivisionResolver } from 'src/family/resolvers/division.resolver';
import { VasamaResolver } from 'src/family/resolvers/vasama.resolver';
import { DistrictResolver } from 'src/family/resolvers/district.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Family', schema: FamilySchema }])
  ],
  providers: [
    FamilyResolver,
    FamilyService,
    FamilyRepository,
    ProvinceResolver,
    DistrictResolver,
    DivisionResolver,
    VasamaResolver
  ]
})
export class FamilyModule { }
