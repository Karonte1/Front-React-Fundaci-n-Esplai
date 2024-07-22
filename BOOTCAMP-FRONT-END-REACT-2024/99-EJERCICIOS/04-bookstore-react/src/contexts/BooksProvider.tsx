import { createContext, useState } from 'react';
import { Book } from '../config/types';

type BooksContextType = {
  books: Book[];
  addBook: (book: Book, index?: number) => void;
  deleteBook: (id: number) => void;
  addAllBooks: (books: Book[]) => void;
}

export const BooksContext = createContext<BooksContextType | null>(null);

type Props = {
  children: React.ReactNode
}

export default function BooksProvider ({ children }: Props) {
  const [books, setBooks] = useState<Book[]>([]);

  function addAllBooks (books: Book[]) {
    setBooks(books);
  }

  function addBook (book: Book, index?: number) {
    if (!index) {
      setBooks([...books, book]);
      return;
    }

    const newBooks = [...books];
    newBooks.splice(index, 1, book);
    setBooks(newBooks);
  }

  function deleteBook (id: number) {
    // const index = books.findIndex(book => book.id === id);
    // setBooks(books.toSpliced(index, 1))
    setBooks(books.filter(book => book.id !== id));
  }

  const valueToSend = {
    books,
    addBook,
    deleteBook,
    addAllBooks
  };

  return (
    <BooksContext.Provider value={valueToSend}>
      {children}
    </BooksContext.Provider>
  );
}
