import { District } from '../../district/entities/district.entity';
import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
@Directive('@key(fields: "id")')
export class Province {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  code: string;


  @Field(() => [District], { nullable: true })
  @OneToMany(() => District, district => district.province)
  districts: District[];

}
