import { Province } from './entities/province.entity';

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProvinceInput } from './dto/create-province.input';
import { UpdateProvinceInput } from './dto/update-province.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProvinceService {

  constructor(@InjectRepository(Province) private provinceRepository: Repository<Province>) { }

  async create(createProvinceInput: CreateProvinceInput) {
    return await this.provinceRepository.save(createProvinceInput);
  }

  async findAll() {
    return await this.provinceRepository.find({
      relations: ['districts']
    });
  }

  async findOne(id: string) {
    return await this.provinceRepository.findOne(id, {
      relations: ['districts']
    });
  }

  async update(updateProvinceInput: UpdateProvinceInput) {
    return await this.provinceRepository.save(updateProvinceInput);
  }

  async remove(id: string) {
    const province = await this.findOne(id);
    if (province) {
      const deleteResult = await this.provinceRepository.delete(id);
      if (deleteResult.affected)
        return province;
    }
    return new NotFoundException(`Record not found by id ${id}`);
  }
}
