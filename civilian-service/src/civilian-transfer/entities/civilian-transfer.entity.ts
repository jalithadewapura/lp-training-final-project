import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
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
