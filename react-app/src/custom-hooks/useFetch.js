import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      const res = await fetch(url);
      const fetchedData = res.json();
      console.log(fetchedData);
      if (fetchedData) {
        setData(fetchedData);
        setError(false);
      }
    };
    fetcher();
  }, [url]);

  return { loading, data, error };
}
