import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVasamaInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  divisionId: string;
}
