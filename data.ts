import { Book, Author } from 'types/data';

const authors: Author[] = [
  { id: 'author_uid1', name: 'Marc Elsberg', age: 47 },
  { id: 'author_uid2', name: 'Robert Ludlum' },
  { id: 'author_uid3', name: 'Agatha Christie', age: 99 },
];

const books: Book[] = [
  {
    author: 'author_uid1',
    genre: 'Thriller',
    id: 'book_uid1',
    title: 'Blackout',
  },
  {
    author: 'author_uid1',
    genre: 'Thriller',
    id: 'book_uid2',
    title: 'Zero',
  },
  {
    author: 'author_uid1',
    genre: 'Thriller',
    id: 'book_uid3',
    title: 'Helix',
  },
  {
    author: 'author_uid2',
    genre: 'Action',
    id: 'book_uid4',
    title: 'Die Janson-Option',
  },
  {
    author: 'author_uid3',
    genre: 'Krimi',
    id: 'book_uid5',
    title: 'Mord im Orient-Express',
  },
];

export { books, authors };
