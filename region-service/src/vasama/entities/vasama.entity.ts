import { Division } from 'src/division/entities/division.entity';
import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
@Directive('@key(fields: "id")')
export class Vasama {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  divisionId: string;

  @Field(() => Division)
  @ManyToOne(() => Division, division => division.vasam)
  division: Division;

}
