import { useEffect, useState } from 'react';

export default function useAPI<T>(func?: Promise<T>) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (func && loading) {
      func
        .then((json) => setData(json))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [func]);

  return { data, loading, error };
}
