import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateCivilianTransferInput } from './dto/create-civilian-transfer.input';
import { CivilianTransfer, CivilianTransferDocument } from 'src/schemas/civilian-transfer.schema';


@Injectable()
export class CivilianTransferRepository {
    constructor(
        @InjectModel('CivilianTransfer') private civilianTransferModel: Model<CivilianTransferDocument>,
    ) { }

    async create(createCivilianTransferInput: CreateCivilianTransferInput): Promise<CivilianTransfer> {
        const newCivilian = new this.civilianTransferModel(createCivilianTransferInput);
        return await newCivilian.save();
    }

    async findAll(): Promise<CivilianTransfer[]> {
        return await this.civilianTransferModel.find();
    }

    async findById(id: string): Promise<CivilianTransfer> {
        if (isValidObjectId(id)) return await this.civilianTransferModel.findById(id);
    }



    async remove(id: string): Promise<CivilianTransfer> {
        if (isValidObjectId(id))
            return await this.civilianTransferModel.findByIdAndRemove(id);
    }
}
