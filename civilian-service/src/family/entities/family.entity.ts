import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
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
