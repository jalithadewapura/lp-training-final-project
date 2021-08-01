import { InputType, Int, Field } from '@nestjs/graphql';
import { Family } from 'src/family/entities/family.entity';
import { Gender, MaterialStatus } from '../entities/civilian.entity';

@InputType()
export class CreateCivilianInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  dob: string;

  @Field()
  nid: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field()
  gender: Gender;

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
