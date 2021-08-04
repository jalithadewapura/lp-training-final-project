import { Family } from 'src/family/entities/family.entity';
import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Vasama {

    @Field((type) => ID)
    @Directive('@external')
    id: string;

    @Field((type) => [Family])
    families: Family[]


}