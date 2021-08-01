import { CreateFamilyInput } from './create-family.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFamilyInput extends PartialType(CreateFamilyInput) {
  @Field()
  name: string;

  @Field()
  proviceId: string;

  @Field()
  districtId: string;

  @Field()
  divisionalId: string;

  @Field()
  vasamaId: string;
}
