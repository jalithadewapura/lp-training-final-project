import { FamilyRepository } from './family.repository';
import { Injectable } from '@nestjs/common';
import { CreateFamilyInput } from './dto/create-family.input';
import { UpdateFamilyInput } from './dto/update-family.input';
import { Family } from 'src/schemas/family.schema';

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

  async findByProvince(provinceId): Promise<Family[]> {
    return await this.familyRepository.findByProvince(provinceId);
  }

  async findByDistrict(districtId): Promise<Family[]> {
    return await this.familyRepository.findByDistrict(districtId);
  }

  async findByDivision(divisionId): Promise<Family[]> {
    return await this.familyRepository.findByDivision(divisionId);
  }

  async findByVasama(vasamaId): Promise<Family[]> {
    return await this.familyRepository.findByVasama(vasamaId);
  }
}
