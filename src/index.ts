import { ApolloServer, AuthenticationError } from 'apollo-server';
import typeDefs from '../typeDefs/schema';
import * as dotenv from 'dotenv';
import resolvers from './resolver/index';
import { Context } from './types/types';
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
  context: ({ req }): Context => {
    const token = req.headers.authorization || '';
    /*  
        now you can call a method to check authorization and add it to context
        or only add it to context and authorize only on specific method calls
    */
    if (!token) throw new AuthenticationError('You are not authorized.');

    // you can also just return "req". This allows to extract the specific information at method invocation
    return { token };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
