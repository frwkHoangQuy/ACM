import { useState, useEffect } from "react";

const useFetch = (fetchFunction) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetchFunction();
        setdata(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, [fetchFunction]);

  return { data, loading, error };
};

export default useFetch;
