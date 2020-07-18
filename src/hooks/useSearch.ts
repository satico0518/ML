import { useState, useEffect } from 'react';

// axios
import axios from 'axios';

const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=';

export default (query: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const doRequest = async () => {
    try {
      const result = await axios(`${baseUrl}${query}`);
      if (result.status !== 200) throw new Error(result.statusText);
      setData(result.data.results.slice(0, 4));
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.length > 0) doRequest();
    // eslint-disable-next-line
  }, [query]);

  return {
    data,
    loading,
    error,
  };
};
