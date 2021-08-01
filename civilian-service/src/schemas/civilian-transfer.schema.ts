import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CivilianTransferDocument = CivilianTransfer & Document;

@Schema()
export class CivilianTransfer {
    @Prop()
    id: string;

    @Prop()
    civilianId: string;

    @Prop()
    fromId: string;

    @Prop()
    toId: string;
}

export const CivilianTransferSchema = SchemaFactory.createForClass(CivilianTransfer);
