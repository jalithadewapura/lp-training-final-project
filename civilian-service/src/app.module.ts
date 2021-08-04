import { District } from 'src/family/entities/district.entity';
import { FamilyResolver } from './family/resolvers/family.resolver';
import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { MONGO_CONNECTION } from './app.properties';
import { CivilianModule } from './civilian/civilian.module';
import { FamilyModule } from './family/family.module';
import { CivilianTransferModule } from './civilian-transfer/civilian-transfer.module';
import { Province } from './family/entities/province.entity';

@Module({
  imports: [
    CivilianModule,
    FamilyModule,
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schemas/graphql-schema.gql'),
      buildSchemaOptions: {
        orphanedTypes: [Province, District]
      }
    }),
    MongooseModule.forRoot(MONGO_CONNECTION),
    CivilianTransferModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
