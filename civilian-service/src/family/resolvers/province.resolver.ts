import { Family } from 'src/schemas/family.schema';
import { FamilyService } from '../family.service';
import { Province } from 'src/family/entities/province.entity';
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";

@Resolver((of) => Province)
export class ProvinceResolver {

    constructor(private readonly familyService: FamilyService) { }

    @ResolveField((of) => [Family])
    families(@Parent() province: Province): Promise<Family[]> {
        return this.familyService.findByProvince(province.id);
    }
}