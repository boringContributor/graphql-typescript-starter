import { getAuthors, getBooks } from '../util/db';
import { Author, Book } from '../types/schema';
import Context from 'types/context';
import { AuthenticationError } from 'apollo-server';

const getGenre = async (
  parent,
  { genre }: { genre: string },
  { auth: { scopes } }: Context
): Promise<Book[]> => {
  if (!scopes.includes('read_genres'))
    throw new AuthenticationError('You are not allowed to read genres');

  const books = await getBooks();

  return books.filter(({ genre: bookGenre }) => genre === bookGenre);
};

const getAuthor = async (
  parent,
  { authorId }: { authorId: string },
  { auth: { scopes } }: Context
): Promise<Author | undefined> => {
  if (!scopes.includes('read_author'))
    throw new AuthenticationError('You are not allowed to read author');

  const authors = await getAuthors();
  const books = await getBooks();

  const author = authors.find(({ id }) => id === authorId);
  if (!author) return;

  const authorBooks = books.filter(
    ({ author: bookAuthor }) => bookAuthor === authorId
  );

  console.log(author);

  return { ...author, books: authorBooks };
};

export { getAuthor, getGenre };
