import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFamilyInput {

  @Field()
  name: string;

  @Field()
  provinceId: string;

  @Field()
  districtId: string;

  @Field()
  divisionId: string;

  @Field()
  vasamaId: string;
}
