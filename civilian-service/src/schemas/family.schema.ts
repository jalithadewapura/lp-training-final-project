import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FamilyDocument = Family & Document;

@Schema()
export class Family {
    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    provinceId: string;

    @Prop()
    districtId: string;

    @Prop()
    divisionId: string;

    @Prop()
    vasamaId: string;
}

export const FamilySchema = SchemaFactory.createForClass(Family);

