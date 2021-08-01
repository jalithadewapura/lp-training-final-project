import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class CivilianTransfer {
  @Field((type) => ID)
  id: string;

  @Field()
  civilianId: string;

  @Field()
  fromId: string;

  @Field()
  toId: string;

}
