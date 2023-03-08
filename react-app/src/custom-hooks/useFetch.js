import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(url);
      const fetchedData = await res.json();
      if (fetchedData) {
        setLoading(false);
        setData(fetchedData);
        setError(false);
      }
    };
    fetcher();
  }, [url]);

  return { loading, data, error };
}
