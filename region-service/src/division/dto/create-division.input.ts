import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDivisionInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  districtId: string;
}
