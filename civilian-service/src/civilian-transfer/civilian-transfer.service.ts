import { CivilianTransferRepository } from './civilian-transfer.repository';
import { Injectable } from '@nestjs/common';
import { CreateCivilianTransferInput } from './dto/create-civilian-transfer.input';
import { UpdateCivilianTransferInput } from './dto/update-civilian-transfer.input';

@Injectable()
export class CivilianTransferService {

  constructor(private civilianTransferRepository: CivilianTransferRepository) { }

  create(createCivilianTransferInput: CreateCivilianTransferInput) {
    return this.civilianTransferRepository.create(createCivilianTransferInput);
  }

  findAll() {
    return this.civilianTransferRepository.findAll();
  }

  findOne(id: string) {
    return this.civilianTransferRepository.findById(id);
  }



  remove(id: string) {
    return this.civilianTransferRepository.remove(id);
  }
}
