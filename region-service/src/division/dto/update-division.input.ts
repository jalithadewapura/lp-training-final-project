import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDivisionInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  districtId: string;
}
