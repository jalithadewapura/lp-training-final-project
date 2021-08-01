import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';


import { ProvinceModule } from './province/province.module';
import { DistrictModule } from './district/district.module';
import { DivisionModule } from './division/division.module';
import { VasamaModule } from './vasama/vasama.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password123',
      database: 'region-service',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,

    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schemas/gql-schema.gql'),
    }),
    ProvinceModule,
    DistrictModule,
    DivisionModule,
    VasamaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
