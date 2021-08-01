import { DivisionService } from './../division/division.service';
import { Vasama } from './entities/vasama.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVasamaInput } from './dto/create-vasama.input';
import { UpdateVasamaInput } from './dto/update-vasama.input';
import { Repository } from 'typeorm';

@Injectable()
export class VasamaService {

  constructor(@InjectRepository(Vasama) private vasamaRepository: Repository<Vasama>, private divisionService: DivisionService) { }

  async create(createVasamaInput: CreateVasamaInput) {
    return await this.vasamaRepository.save(createVasamaInput);
  }

  async findAll() {
    return await this.vasamaRepository.find();
  }

  async findOne(id: string) {
    return await this.vasamaRepository.findOne(id);
  }

  async update(updateVasamaInput: UpdateVasamaInput) {
    return await this.vasamaRepository.save(updateVasamaInput);
  }

  async remove(id: string) {
    const vasama = await this.findOne(id);
    if (vasama) {
      const deleteResult = await this.vasamaRepository.delete(id);
      if ((deleteResult).affected)
        return vasama;
    }
    return new NotFoundException(`Record not found by id ${id}`);
  }

  getDivision(divisionId) {
    return this.divisionService.findOne(divisionId);
  }
}
