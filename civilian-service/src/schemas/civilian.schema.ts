import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender, MaterialStatus } from 'src/civilian/entities/civilian.entity';
import { Family } from 'src/family/entities/family.entity';
import { Document } from 'mongoose';

export type CivilianDocument = Civilian & Document;

@Schema()
export class Civilian {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    dob: string;

    @Prop()
    nid: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop()
    gender: Gender;

    @Prop()
    materialStatus: MaterialStatus;

    @Prop()
    jobType: string;

    @Prop()
    jobCategory: string;

    @Prop()
    monthlyIncome: number;

    @Prop()
    educationLevel: string;

    @Prop()
    educationDetails: string;

    @Prop()
    familyId: string;

    @Prop()
    family: Family;
}

export const CivilianSchema = SchemaFactory.createForClass(Civilian);
