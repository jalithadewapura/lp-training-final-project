import { Family, FamilyDocument } from '../schemas/family.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { CreateFamilyInput } from './dto/create-family.input';
import { UpdateFamilyInput } from './dto/update-family.input';

@Injectable()
export class FamilyRepository {
    constructor(
        @InjectModel('Family') private familyModel: Model<FamilyDocument>) { }

    async create(createCivilianInput: CreateFamilyInput): Promise<Family> {
        const newCivilian = new this.familyModel(createCivilianInput);
        return await newCivilian.save();
    }

    async findAll(): Promise<Family[]> {
        return await this.familyModel.find();
    }

    async findById(id: string): Promise<Family> {
        if (isValidObjectId(id)) return await this.familyModel.findById(id);
    }

    async findByProvince(provinceId: string): Promise<Family[]> {
        return await this.familyModel.find({ 'provinceId': provinceId });
    }

    async findByDistrict(districtId: string): Promise<Family[]> {
        return await this.familyModel.find({ 'districtId': districtId });
    }

    async findByDivision(divisionId: string): Promise<Family[]> {
        return await this.familyModel.find({ 'divisionId': divisionId });
    }

    async findByVasama(vasamaId: string): Promise<Family[]> {
        return await this.familyModel.find({ 'vasamaId': vasamaId });
    }

    async update(id: string, updatePetInput: UpdateFamilyInput): Promise<Family> {
        if (isValidObjectId(id))
            return await this.familyModel.findByIdAndUpdate(id, updatePetInput, {
                new: true,
            });
    }

    async remove(id: string): Promise<Family> {
        if (isValidObjectId(id))
            return await this.familyModel.findByIdAndRemove(id);
    }
}