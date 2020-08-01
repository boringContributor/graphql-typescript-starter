import { gql } from 'apollo-server';
const typeDefs = gql`
  type Query {
    getBooks: [Book]
  }

  type Mutation {
    addBook(title: String, author: String!): Book
  }

  type Book {
    title: String
    author: String!
  }
`;

export { typeDefs as default };
