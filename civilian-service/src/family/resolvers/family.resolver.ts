import { Resolver, Query, Mutation, Args, Int, ResolveReference, ResolveField, Parent } from '@nestjs/graphql';
import { Province } from 'src/family/entities/province.entity';
import { District } from 'src/family/entities/district.entity';
import { Division } from 'src/family/entities/division.entity';
import { Vasama } from 'src/family/entities/vasama.entity';
import { FamilyService } from '../family.service';
import { Family } from '../entities/family.entity';
import { CreateFamilyInput } from '../dto/create-family.input';
import { UpdateFamilyInput } from '../dto/update-family.input';
import { Civilian } from 'src/civilian/entities/civilian.entity';

@Resolver(() => Family)
export class FamilyResolver {
  constructor(private readonly familyService: FamilyService) { }

  @Mutation(() => Family)
  createFamily(@Args('createFamilyInput') createFamilyInput: CreateFamilyInput) {
    return this.familyService.create(createFamilyInput);
  }

  @Query(() => [Family], { name: 'getAllFamilies' })
  findAll() {
    return this.familyService.findAll();
  }

  @Query(() => Family, { name: 'familyById' })
  findOne(@Args('id') id: string) {
    return this.familyService.findOne(id);
  }

  @Mutation(() => Family)
  updateFamily(@Args('id') id: string, @Args('updateFamilyInput') updateFamilyInput: UpdateFamilyInput) {
    return this.familyService.update(id, updateFamilyInput);
  }

  @Mutation(() => Family)
  removeFamily(@Args('id') id: string) {
    return this.familyService.remove(id);
  }

  @ResolveField((of) => [Civilian])
  civilians(@Parent() family: Family) {
    return this.familyService.getCivilians(family.id);
  }

  @ResolveReference()
  resolvereference(ref: { __typename: string, id: string }) {
    return this.familyService.findOne(ref.id);
  }

  @ResolveField((of) => Province)
  province(@Parent() family: Family) {
    return { __type: "Province", id: family.provinceId };
  }

  @ResolveField((of) => District)
  district(@Parent() family: Family) {
    return { __type: "District", id: family.districtId };
  }

  @ResolveField((of) => Division)
  division(@Parent() family: Family) {
    return { __type: "Division", id: family.divisionId };
  }

  @ResolveField((of) => Vasama)
  vasama(@Parent() family: Family) {
    return { __type: "Vasama", id: family.vasamaId };
  }
}

