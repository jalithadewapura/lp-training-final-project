import { CivilianTransferRepository } from './civilian-transfer.repository';
import { CivilianTransferSchema } from '../schemas/civilian-transfer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CivilianTransferService } from './civilian-transfer.service';
import { CivilianTransferResolver } from './civilian-transfer.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CivilianTransfer', schema: CivilianTransferSchema }])
  ],
  providers: [
    CivilianTransferResolver,
    CivilianTransferService,
    CivilianTransferRepository
  ]
})
export class CivilianTransferModule { }
