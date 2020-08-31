interface Book {
  title: string;
  author: string;
  id: string
  genre: string
}

interface Author {
  name: string
  age?: number
  id: string
}

export { Book, Author };
