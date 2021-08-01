import { ProvinceService } from 'src/province/province.service';
import { District } from 'src/district/entities/district.entity';
import { Injectable } from '@nestjs/common';
import { CreateDistrictInput } from './dto/create-district.input';
import { UpdateDistrictInput } from './dto/update-district.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DistrictService {

  constructor(@InjectRepository(District) private districtRepository: Repository<District>,
    private provinceService: ProvinceService) { }

  create(createDistrictInput: CreateDistrictInput) {
    return this.districtRepository.save(createDistrictInput);
  }

  findAll() {
    return this.districtRepository.find({
      relations: ['divisions']
    });
  }

  findOne(id: string) {
    return this.districtRepository.findOne(id, {
      relations: ['divisions']
    });
  }

  update(updateDistrictInput: UpdateDistrictInput) {
    return this.districtRepository.save(updateDistrictInput);
  }

  remove(id: string) {
    return this.remove(id);
  }

  getProvince(provinceId: string) {
    return this.provinceService.findOne(provinceId);
  }
}
