import { useEffect, useState } from 'react';

export default function useFetch (url = '') {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const controller = new AbortController();

  async function getData () {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(
        url,
        { signal: controller.signal }
      );
      const data = await resp.json();

      setData(data);
    } catch (error) {
      if (error instanceof Error) setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();

    return () => controller.abort();
  }, []);

  return { data, loading, getData, error };
}
