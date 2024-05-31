import { useState, useEffect, useMemo } from "react";

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

  const memoizedResult = useMemo(() => ({
    data,
    loading,
    error
  }), [data, loading, error]);

  return { data: memoizedResult.data, loading: memoizedResult.loading, error: memoizedResult.error };
};

export default useFetch;
