import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: "civilian", url: "http://localhost:3001/graphql" },
          { name: "region", url: "http://localhost:3002/graphql" },
        ]
      }
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
