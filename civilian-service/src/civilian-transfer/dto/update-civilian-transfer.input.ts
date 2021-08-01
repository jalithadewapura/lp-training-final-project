import { CreateCivilianTransferInput } from './create-civilian-transfer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCivilianTransferInput extends PartialType(CreateCivilianTransferInput) {
  @Field(() => Int)
  id: number;
}
