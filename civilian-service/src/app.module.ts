import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { MONGO_CONNECTION } from './app.properties';
import { CivilianModule } from './civilian/civilian.module';
import { FamilyModule } from './family/family.module';
import { CivilianTransferModule } from './civilian-transfer/civilian-transfer.module';

@Module({
  imports: [
    CivilianModule,
    FamilyModule,
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schemas/graphql-schema.gql'),
    }),
    MongooseModule.forRoot(MONGO_CONNECTION),
    CivilianTransferModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
