import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function useBooks () {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const controller = new AbortController();

  async function getBooks () {
    setLoading(true);
    try {
      const resp = await fetch(
        'https://bookstore-api-a6n5.onrender.com/books/',
        { signal: controller.signal }
      );
      const data = await resp.json();

      setBooks(data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooks();

    return () => controller.abort();
  }, []);

  return { books, loading, getBooks };
}
