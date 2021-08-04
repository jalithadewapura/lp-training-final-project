import { CivilianService } from 'src/civilian/civilian.service';
import { Family } from 'src/family/entities/family.entity';
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Civilian } from './entities/civilian.entity';
import { CreateCivilianInput } from './dto/create-civilian.input';
import { UpdateCivilianInput } from './dto/update-civilian.input';

@Resolver(() => Civilian)
export class CivilianResolver {
  constructor(private readonly civilianService: CivilianService) { }

  @Mutation(() => Civilian)
  createCivilian(@Args('createCivilianInput') createCivilianInput: CreateCivilianInput) {
    return this.civilianService.create(createCivilianInput);
  }

  @Query(() => [Civilian], { name: 'getAllCivilian' })
  findAll() {
    return this.civilianService.findAll();
  }

  @Query(() => Civilian, { name: 'civilianById' })
  findOne(@Args('id') id: string) {
    return this.civilianService.findOne(id);
  }

  @Mutation(() => Civilian)
  updateCivilian(@Args('id') id: string, @Args('updateCivilianInput') updateCivilianInput: UpdateCivilianInput) {
    return this.civilianService.update(id, updateCivilianInput);
  }

  @Mutation(() => Civilian)
  removeCivilian(@Args('id') id: string) {
    return this.civilianService.remove(id);
  }

  @ResolveField((of) => Family)
  family(@Parent() civilian: Civilian) {
    return this.civilianService.getFamily(civilian.familyId);
  }
}

