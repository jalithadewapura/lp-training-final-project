import { District } from 'src/district/entities/district.entity';
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, ResolveReference } from '@nestjs/graphql';
import { DivisionService } from './division.service';
import { Division } from './entities/division.entity';
import { CreateDivisionInput } from './dto/create-division.input';
import { UpdateDivisionInput } from './dto/update-division.input';

@Resolver(() => Division)
export class DivisionResolver {
  constructor(private readonly divisionService: DivisionService) { }

  @Mutation(() => Division)
  createDivision(@Args('createDivisionInput') createDivisionInput: CreateDivisionInput) {
    return this.divisionService.create(createDivisionInput);
  }

  @Query(() => [Division], { name: 'getAllDivision' })
  findAll() {
    return this.divisionService.findAll();
  }

  @Query(() => Division, { name: 'divisionById' })
  findOne(@Args('id') id: string) {
    return this.divisionService.findOne(id);
  }

  @Mutation(() => Division)
  updateDivision(@Args('updateDivisionInput') updateDivisionInput: UpdateDivisionInput) {
    return this.divisionService.update(updateDivisionInput);
  }

  @Mutation(() => Division)
  removeDivision(@Args('id') id: string) {
    return this.divisionService.remove(id);
  }

  @ResolveField(() => District)
  district(@Parent() division: Division) {
    return this.divisionService.getDistrict(division.districtId);
  }

  @ResolveReference()
  resolvereference(ref: { __typename: string, id: string }) {
    return this.divisionService.findOne(ref.id);
  }

}


