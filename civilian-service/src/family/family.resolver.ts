import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FamilyService } from './family.service';
import { Family } from './entities/family.entity';
import { CreateFamilyInput } from './dto/create-family.input';
import { UpdateFamilyInput } from './dto/update-family.input';

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
}
