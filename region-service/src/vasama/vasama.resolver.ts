import { Division } from 'src/division/entities/division.entity';
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, ResolveReference } from '@nestjs/graphql';
import { VasamaService } from './vasama.service';
import { Vasama } from './entities/vasama.entity';
import { CreateVasamaInput } from './dto/create-vasama.input';
import { UpdateVasamaInput } from './dto/update-vasama.input';

@Resolver(() => Vasama)
export class VasamaResolver {
  constructor(private readonly vasamaService: VasamaService) { }

  @Mutation(() => Vasama)
  createVasama(@Args('createVasamaInput') createVasamaInput: CreateVasamaInput) {
    return this.vasamaService.create(createVasamaInput);
  }

  @Query(() => [Vasama], { name: 'getAllVasama' })
  findAll() {
    return this.vasamaService.findAll();
  }

  @Query(() => Vasama, { name: 'vasamaById' })
  findOne(@Args('id') id: string) {
    return this.vasamaService.findOne(id);
  }

  @Query(() => [Vasama], { name: 'getVasamByDivision' })
  findByDivision(@Args('divisionId') divisionId: string) {
    return this.vasamaService.findByDivision(divisionId);
  }

  @Mutation(() => Vasama)
  updateVasama(@Args('updateVasamaInput') updateVasamaInput: UpdateVasamaInput) {
    return this.vasamaService.update(updateVasamaInput);
  }

  @Mutation(() => Vasama)
  removeVasama(@Args('id') id: string) {
    return this.vasamaService.remove(id);
  }

  @ResolveField(() => Division)
  division(@Parent() vasama: Vasama) {
    return this.vasamaService.getDivision(vasama.divisionId);
  }

  @ResolveReference()
  resolvereference(ref: { __typename: string, id: string }) {
    return this.vasamaService.findOne(ref.id);
  }
}
