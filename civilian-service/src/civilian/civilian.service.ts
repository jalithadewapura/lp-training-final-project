import { FamilyService } from './../family/family.service';
import { CivilianRepository } from './civilian.repository';
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { CreateCivilianInput } from './dto/create-civilian.input';
import { UpdateCivilianInput } from './dto/update-civilian.input';

@Injectable()
export class CivilianService {
  constructor(private civilianRepository: CivilianRepository, @Inject(forwardRef(() => FamilyService)) private familyService: FamilyService) { }

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

  findByFamily(familyId: string) {
    return this.civilianRepository.findByFamily(familyId);
  }

  getFamily(familyId: string) {
    return this.familyService.findOne(familyId);
  }
}
