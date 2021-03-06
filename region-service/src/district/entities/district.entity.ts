import { Division } from 'src/division/entities/division.entity';
import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Province } from 'src/province/entities/province.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
@Directive('@key(fields: "id")')
export class District {
  @Field((type) => ID)
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
  provinceId: string;

  @Field(() => Province)
  @ManyToOne(() => Province, province => province.districts)
  province: Province;

  @Field(() => [Division])
  @OneToMany(() => Division, division => division.district)
  divisions: Division[]
}
