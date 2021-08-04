import { CreateFamilyInput } from './create-family.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFamilyInput extends PartialType(CreateFamilyInput) {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  provinceId: string;

  @Field()
  districtId: string;

  @Field()
  divisionId: string;

  @Field()
  vasamaId: string;
}
