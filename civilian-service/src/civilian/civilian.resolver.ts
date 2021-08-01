import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CivilianService } from './civilian.service';
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
}
