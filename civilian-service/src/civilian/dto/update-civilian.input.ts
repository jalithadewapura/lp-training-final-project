import { CreateCivilianInput } from './create-civilian.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { MaterialStatus } from '../entities/civilian.entity';

@InputType()
export class UpdateCivilianInput extends PartialType(CreateCivilianInput) {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  email: string;

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
}
