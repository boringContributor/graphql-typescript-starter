import { ApolloServer, AuthenticationError } from 'apollo-server';
import typeDefs from '../typeDefs/schema';
import * as dotenv from 'dotenv';
import resolvers from './resolver/index';
import  Context  from './types/context';
import authorize from './util/auth';
dotenv.config();

const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

const options = {
  port: process.env.PORT || 4000,
  playground: isDevelopment,
  introspective: isDevelopment,
  tracing: isDevelopment,
  debug: isDevelopment,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  ...options,
  context: async ({ req }): Promise<Context> => {
    const token = req.headers.authorization || '';

    const authInfo = await authorize(token)
    if (!authInfo?.isAllowed) throw new AuthenticationError('Not authorized');

    return {auth: authInfo};
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
