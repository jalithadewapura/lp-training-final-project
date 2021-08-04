import { Family } from 'src/schemas/family.schema';
import { FamilyService } from '../family.service';
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Division } from '../entities/division.entity';

@Resolver((of) => Division)
export class DivisionResolver {

    constructor(private readonly familyService: FamilyService) { }

    @ResolveField((of) => [Family])
    families(@Parent() division: Division): Promise<Family[]> {
        return this.familyService.findByDivision(division.id);
    }
}