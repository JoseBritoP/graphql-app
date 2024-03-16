import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan'
import htpp from 'http'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'

async function startApolloServer(typeDefs:any,resolvers:any) {

  const app = express();
  const htppServer = htpp.createServer(app);

  // app.use(cors());
  // app.use(morgan('dev'));
  // app.use(express.json());

  app.get('/',(req:any,res:any)=>res.send('Pong'));

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();

  app.use('/graphql',cors<cors.CorsRequest>(),express.json(),expressMiddleware(server))
  
  await new Promise<void>((resolve) => htppServer.listen({
    port: process.env.PORT || 3001
  },resolve));

  console.log(`Server on port ${process.env.PORT || 3001}`)
}

export default startApolloServer