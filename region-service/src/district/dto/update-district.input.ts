import { CreateDistrictInput } from './create-district.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDistrictInput extends PartialType(CreateDistrictInput) {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  provinceId: string;
}
