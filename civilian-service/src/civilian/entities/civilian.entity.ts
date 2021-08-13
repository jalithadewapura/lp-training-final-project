import { Family } from 'src/family/entities/family.entity';
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

  @Field()
  jobStatus: string;

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

  @Field(() => Family)
  family: Family;

}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum MaterialStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCE = 'DIVORCE',
  WINDOWED = 'WINDOWED',
}
