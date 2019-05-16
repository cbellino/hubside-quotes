import { useState, useEffect } from "react";

const baseUrl = "/.netlify/functions";

export function useFetch<T>(url: string): [boolean, T | null] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      const response = await fetch(baseUrl + url);
      const json = await response.json();
      setData(json.data as T);
      setLoading(false);
    };
    fetchUrl();
  }, [url]);

  return [loading, data];
}
