import { District } from 'src/family/entities/district.entity';
import { Province } from 'src/family/entities/province.entity';
import { Division } from 'src/family/entities/division.entity';
import { Vasama } from 'src/family/entities/vasama.entity';

import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Family {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  provinceId: string;

  @Field(() => Province)
  province: Province;

  @Field()
  districtId: string;

  @Field(() => District)
  district: District;

  @Field()
  divisionId: string;

  @Field(() => Division)
  division: Division;

  @Field()
  vasamaId: string;

  @Field(() => Vasama)
  vasama: Vasama;

}
