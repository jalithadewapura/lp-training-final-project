import { Province } from './../province/entities/province.entity';
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, ResolveReference } from '@nestjs/graphql';
import { DistrictService } from './district.service';
import { District } from './entities/district.entity';
import { CreateDistrictInput } from './dto/create-district.input';
import { UpdateDistrictInput } from './dto/update-district.input';

@Resolver(() => District)
export class DistrictResolver {
  constructor(private readonly districtService: DistrictService) { }

  @Mutation(() => District)
  createDistrict(@Args('createDistrictInput') createDistrictInput: CreateDistrictInput) {
    return this.districtService.create(createDistrictInput);
  }

  @Query(() => [District], { name: 'getAllDistrict' })
  findAll() {
    return this.districtService.findAll();
  }

  @Query(() => District, { name: 'districtById' })
  findOne(@Args('id') id: string) {
    return this.districtService.findOne(id);
  }

  @Mutation(() => District)
  updateDistrict(@Args('updateDistrictInput') updateDistrictInput: UpdateDistrictInput) {
    return this.districtService.update(updateDistrictInput);
  }

  @Mutation(() => District)
  removeDistrict(@Args('id') id: string) {
    return this.districtService.remove(id);
  }

  @ResolveField(() => Province)
  province(@Parent() district: District) {
    return this.districtService.getProvince(district.provinceId);
  }

  @ResolveReference()
  resolvereference(ref: { __typename: string, id: string }) {
    return this.districtService.findOne(ref.id);
  }
}
