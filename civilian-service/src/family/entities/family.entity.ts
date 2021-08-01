import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Family {
  @Field((type) => ID)
  id: string;

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
