import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender, MaterialStatus } from 'src/civilian/entities/civilian.entity';
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

    @Prop({ nullable: true })
    nid: string;

    @Prop({ nullable: true })
    phone: string;

    @Prop({ nullable: true })
    email: string;

    @Prop()
    gender: Gender;

    @Prop()
    materialStatus: MaterialStatus;

    @Prop()
    jobStatus: string;

    @Prop({ nullable: true })
    jobType: string;

    @Prop({ nullable: true })
    jobCategory: string;

    @Prop({ nullable: true })
    monthlyIncome: number;

    @Prop({ nullable: true })
    educationLevel: string;

    @Prop({ nullable: true })
    educationDetails: string;

    @Prop()
    familyId: string;

}

export const CivilianSchema = SchemaFactory.createForClass(Civilian);
