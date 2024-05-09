import startApolloServer  from "./app";
import { typeDefs,resolvers } from "./graphql/index";
import { connectDB } from "./config/db";

connectDB();

startApolloServer(typeDefs,resolvers)