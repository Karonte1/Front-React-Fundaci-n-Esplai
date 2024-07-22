import { useContext } from 'react';
import { BooksContext } from '../contexts/BooksProvider';

export default function useBooksContext () {
  const context = useContext(BooksContext);

  if (!context) throw new Error('useBooksContext solo puede ser usado dentro de BooksContext');
  return context;
}
