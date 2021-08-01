import { Family } from '../../family/entities/family.entity';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Civilian {
  @Field((type) => ID)
  id: string;

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

export enum Gender {
  Male = 'Male',
  FEMALE = 'FEMALE',
}

export enum MaterialStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCE = 'DIVORCE',
  WINDOWED = 'WINDOWED',
}
