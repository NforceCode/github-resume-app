import { useEffect, useState } from 'react';

export function useLoadData(loadFunc) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    loadFunc()
      .then(({ data }) => {
        setData(data);
        setError(null);
      })
      .catch(({ response: { data: error } }) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
}
