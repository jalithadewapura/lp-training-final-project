import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { CivilianTransferService } from './civilian-transfer.service';
import { CivilianTransfer } from './entities/civilian-transfer.entity';
import { CreateCivilianTransferInput } from './dto/create-civilian-transfer.input';
import { UpdateCivilianTransferInput } from './dto/update-civilian-transfer.input';

@Resolver(() => CivilianTransfer)
export class CivilianTransferResolver {
  constructor(private readonly civilianTransferService: CivilianTransferService) { }

  @Mutation(() => CivilianTransfer)
  createCivilianTransfer(@Args('createCivilianTransferInput') createCivilianTransferInput: CreateCivilianTransferInput) {
    return this.civilianTransferService.create(createCivilianTransferInput);
  }

  @Query(() => [CivilianTransfer], { name: 'getAllCivilianTransfer' })
  findAll() {
    return this.civilianTransferService.findAll();
  }

  @Query(() => CivilianTransfer, { name: 'civilianTransferById' })
  findOne(@Args('id') id: string) {
    return this.civilianTransferService.findOne(id);
  }

  @Mutation(() => CivilianTransfer)
  removeCivilianTransfer(@Args('id') id: string) {
    return this.civilianTransferService.remove(id);
  }

  @ResolveReference()
  resolvereference(ref: { __typename: string, id: string }) {
    return this.civilianTransferService.findOne(ref.id);
  }
}
