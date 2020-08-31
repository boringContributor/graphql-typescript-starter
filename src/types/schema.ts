interface Author {
  id: string;
  name: string;
  age?: number;
  books: Book[];
}

interface Book {
  id: string;
  title: string;
  genre: string;
}

export { Author, Book };
