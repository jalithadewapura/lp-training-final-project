import { Province } from '../../province/entities/province.entity';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDistrictInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  provinceId: string;

}
