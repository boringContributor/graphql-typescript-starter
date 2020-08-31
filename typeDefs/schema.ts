import { gql } from 'apollo-server';
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    age: Int
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    genre: String!
  }

  type Query {
    getAuthor(authorId: ID!): Author
    getGenre(genre: String!): [Book]
  }
`;

export { typeDefs as default };
