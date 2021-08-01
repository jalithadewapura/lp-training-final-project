import { Family } from './../../family/entities/family.entity';
import { CreateCivilianInput } from './create-civilian.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { MaterialStatus } from '../entities/civilian.entity';

@InputType()
export class UpdateCivilianInput extends PartialType(CreateCivilianInput) {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field()
  materialStatus: MaterialStatus;

  @Field()
  jobType: string;

  @Field()
  jobCategory: string;

  @Field()
  monthlyIncome: number;

  @Field()
  educationLevel: string;

  @Field()
  educationDetails: string;

  @Field()
  familyId: string;
}
