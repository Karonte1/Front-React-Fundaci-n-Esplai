import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import axiosAPI from '../config/axios';
import useBooksContext from './useBooksContext';
import { Book } from '../config/types';

type Options = {
  [k:string]: string;
}

export default function useBooksAxios (options: Options) {
  const { limit, sort } = options;

  const { addAllBooks } = useBooksContext();
  const [loading, setLoading] = useState(false);

  const controller = new AbortController();

  async function getBooks () {
    setLoading(true);
    try {
      let { data } = await axiosAPI.get('/books');

      // if (options?.sort) {
      //   if (options.sort === 'asc') {
      //     data.sort((bookA: Book, bookB: Book) => {
      //       if (bookA.title.toLowerCase() > bookB.title.toLowerCase()) return 1;
      //       if (bookA.title.toLowerCase() < bookB.title.toLowerCase()) return -1;
      //       return 0;
      //     });
      //   } else if (options.sort === 'desc') {
      //     data.sort((bookA: Book, bookB: Book) => {
      //       if (bookA.title.toLowerCase() > bookB.title.toLowerCase()) return -1;
      //       if (bookA.title.toLowerCase() < bookB.title.toLowerCase()) return 1;
      //       return 0;
      //     });
      //   }
      // }
      if (sort === 'asc') {
        data.sort((bookA: Book, bookB: Book) => bookA.title.localeCompare(bookB.title));
      } else if (sort === 'desc') {
        data.sort((bookA: Book, bookB: Book) => bookB.title.localeCompare(bookA.title));
      }

      if (!isNaN(Number(limit))) {
        data = data.slice(0, limit);
      }

      addAllBooks(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.status === 404 ? 'Libro no encontrado' : 'Error');
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooks();

    return () => controller.abort();
  }, []);

  return { loading, getBooks };
}
