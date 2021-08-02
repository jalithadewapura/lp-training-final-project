import { Vasama } from 'src/vasama/entities/vasama.entity';
import { District } from 'src/district/entities/district.entity';
import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
@Directive('@key(field: "id")')
export class Division {
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
  districtId: string;

  @Field(() => District)
  @ManyToOne(() => District, district => district.divisions)
  district: District;


  @Field(() => [Vasama])
  @OneToMany(() => Vasama, vasama => vasama.division)
  vasam: Vasama[]
}
