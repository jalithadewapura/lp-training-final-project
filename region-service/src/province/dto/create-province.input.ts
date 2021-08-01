import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProvinceInput {

  @Field()
  name: string;

  @Field()
  code: string;
}
