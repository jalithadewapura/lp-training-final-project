import { DistrictService } from 'src/district/district.service';
import { Division } from './entities/division.entity';
import { Injectable } from '@nestjs/common';
import { CreateDivisionInput } from './dto/create-division.input';
import { UpdateDivisionInput } from './dto/update-division.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class DivisionService {

  constructor(@InjectRepository(Division) private divisionRepository: Repository<Division>, private districtService: DistrictService) { }

  create(createDivisionInput: CreateDivisionInput) {
    return this.divisionRepository.save(createDivisionInput);
  }

  findAll() {
    return this.divisionRepository.find({
      relations: ['vasam']
    });
  }

  findOne(id: string) {
    return this.divisionRepository.findOne(id, {
      relations: ['vasam']
    });
  }

  findByDistrict(districtId: string) {
    return this.divisionRepository.find({ districtId: districtId });
  }

  update(updateDivisionInput: UpdateDivisionInput) {
    return this.divisionRepository.save(updateDivisionInput);
  }

  async remove(id: string) {
    const division = await this.findOne(id);
    if (division) {
      const deleteResult = await this.divisionRepository.delete(id);
      if ((deleteResult).affected)
        return division;
    }
    return new NotFoundException(`Record not found by id ${id}`);
  }

  getDistrict(districtId: string) {
    return this.districtService.findOne(districtId);
  }
}
