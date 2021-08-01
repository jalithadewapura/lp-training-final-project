import { CivilianRepository } from './civilian.repository';
import { Injectable } from '@nestjs/common';
import { CreateCivilianInput } from './dto/create-civilian.input';
import { UpdateCivilianInput } from './dto/update-civilian.input';

@Injectable()
export class CivilianService {
  constructor(private civilianRepository: CivilianRepository) { }

  create(createCivilianInput: CreateCivilianInput) {
    return this.civilianRepository.create(createCivilianInput);
  }

  findAll() {
    return this.civilianRepository.findAll();
  }

  findOne(id: string) {
    return this.civilianRepository.findById(id);
  }

  update(id: string, updateCivilianInput: UpdateCivilianInput) {
    return this.civilianRepository.update(id, updateCivilianInput);
  }

  remove(id: string) {
    return this.civilianRepository.remove(id);
  }
}
