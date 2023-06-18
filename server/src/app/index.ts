import express from "express";
import bodyParser, { json } from "body-parser";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { users } from "./user";


 export async function initServer() {
    const app= express();
    app.use(bodyParser.json())


    const graphqlServer = new ApolloServer({
        typeDefs:`${users.types}
        type Query {
         ${users.querirs}
        }`,
        resolvers:{
           Query:{ 
            ...users.resolvers.queries,
         }
        },
      });


      await graphqlServer.start()
    
      app.use("/graphql",expressMiddleware(graphqlServer))

      return app 
}