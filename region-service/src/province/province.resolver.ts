import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProvinceService } from './province.service';
import { Province } from './entities/province.entity';
import { CreateProvinceInput } from './dto/create-province.input';
import { UpdateProvinceInput } from './dto/update-province.input';

@Resolver(() => Province)
export class ProvinceResolver {
  constructor(private readonly provinceService: ProvinceService) { }

  @Mutation(() => Province)
  createProvince(@Args('createProvinceInput') createProvinceInput: CreateProvinceInput) {
    return this.provinceService.create(createProvinceInput);
  }

  @Query(() => [Province], { name: 'getAllProvince' })
  findAll() {
    return this.provinceService.findAll();
  }

  @Query(() => Province, { name: 'provinceById' })
  findOne(@Args('id') id: string) {
    return this.provinceService.findOne(id);
  }

  @Mutation(() => Province)
  updateProvince(@Args('updateProvinceInput') updateProvinceInput: UpdateProvinceInput) {
    return this.provinceService.update(updateProvinceInput);
  }

  @Mutation(() => Province)
  removeProvince(@Args('id') id: string) {
    return this.provinceService.remove(id);
  }


  // @ResolveField(() => [District])
  // districts(@Parent() province: Province) {
  //   return this.provinceService.getDistricts(province.id);
  // }
}
