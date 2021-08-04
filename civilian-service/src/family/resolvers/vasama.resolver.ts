import { Family } from 'src/schemas/family.schema';
import { FamilyService } from '../family.service';
import { Vasama } from 'src/family/entities/vasama.entity';
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";

@Resolver((of) => Vasama)
export class VasamaResolver {

    constructor(private readonly familyService: FamilyService) { }

    @ResolveField((of) => [Family])
    families(@Parent() vasama: Vasama): Promise<Family[]> {
        return this.familyService.findByVasama(vasama.id);
    }
}