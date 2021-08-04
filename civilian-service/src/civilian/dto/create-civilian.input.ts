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

  @Field({ nullable: true })
  nid: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  email: string;

  @Field()
  gender: Gender;

  @Field()
  materialStatus: MaterialStatus;

  @Field({ nullable: true })
  jobType: string;

  @Field({ nullable: true })
  jobCategory: string;

  @Field({ nullable: true })
  monthlyIncome: number;

  @Field({ nullable: true })
  educationLevel: string;

  @Field({ nullable: true })
  educationDetails: string;

  @Field()
  familyId: string;
}
