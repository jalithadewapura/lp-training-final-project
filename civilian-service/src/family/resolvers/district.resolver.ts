import { Family } from 'src/schemas/family.schema';
import { FamilyService } from '../family.service';
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { District } from '../entities/district.entity';

@Resolver((of) => District)
export class DistrictResolver {

    constructor(private readonly familyService: FamilyService) { }

    @ResolveField((of) => [Family])
    families(@Parent() district: District): Promise<Family[]> {
        return this.familyService.findByDistrict(district.id);
    }
}