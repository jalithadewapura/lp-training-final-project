import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCivilianTransferInput {

  @Field()
  civilianId: string;

  @Field()
  fromId: string;

  @Field()
  toId: string;
}
