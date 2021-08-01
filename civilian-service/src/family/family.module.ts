import { FamilySchema } from '../schemas/family.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FamilyRepository } from './family.repository';
import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
import { FamilyResolver } from './family.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Family', schema: FamilySchema }])

  ],
  providers: [FamilyResolver, FamilyService, FamilyRepository]
})
export class FamilyModule { }
