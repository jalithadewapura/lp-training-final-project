import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFamilyInput {

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
