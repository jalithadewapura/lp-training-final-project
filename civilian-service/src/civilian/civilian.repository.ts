import { Civilian } from '../schemas/civilian.schema';
import { CivilianDocument } from './../schemas/civilian.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateCivilianInput } from './dto/create-civilian.input';
import { UpdateCivilianInput } from './dto/update-civilian.input';

@Injectable()
export class CivilianRepository {
    constructor(
        @InjectModel('Civilian') private civilianModel: Model<CivilianDocument>,
    ) { }

    async create(createCivilianInput: CreateCivilianInput): Promise<Civilian> {
        const newCivilian = new this.civilianModel(createCivilianInput);
        return await newCivilian.save();
    }

    async findAll(): Promise<Civilian[]> {
        return await this.civilianModel.find();
    }

    async findById(id: string): Promise<Civilian> {
        if (isValidObjectId(id)) return await this.civilianModel.findById(id);
    }

    async update(id: string, updatePetInput: UpdateCivilianInput): Promise<Civilian> {
        if (isValidObjectId(id))
            return await this.civilianModel.findByIdAndUpdate(id, updatePetInput, {
                new: true,
            });
    }

    async remove(id: string): Promise<Civilian> {
        if (isValidObjectId(id))
            return await this.civilianModel.findByIdAndRemove(id);
    }

    async findByFamily(familyId: string): Promise<Civilian[]> {
        return this.civilianModel.find({ 'familyId': familyId });
    }
}
