import { bookData } from '../../data';
import { Context, Book } from '../types/types';

const addBook = (
  parent: undefined,
  { title, author }: Book,
  context: Context
): Book | null => {
  if (!context.token) return null;
  bookData.push({ title, author });
  return {
    title,
    author,
  };
};

export { addBook };
