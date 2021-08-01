import { FamilyRepository } from './family.repository';
import { Injectable } from '@nestjs/common';
import { CreateFamilyInput } from './dto/create-family.input';
import { UpdateFamilyInput } from './dto/update-family.input';

@Injectable()
export class FamilyService {
  constructor(private familyRepository: FamilyRepository) { }

  create(createFamilyInput: CreateFamilyInput) {
    return this.familyRepository.create(createFamilyInput);
  }

  findAll() {
    return this.familyRepository.findAll();
  }

  findOne(id: string) {
    return this.familyRepository.findById(id);
  }

  update(id: string, updateFamilyInput: UpdateFamilyInput) {
    return this.familyRepository.update(id, updateFamilyInput);
  }

  remove(id: string) {
    return this.familyRepository.remove(id);
  }
}
