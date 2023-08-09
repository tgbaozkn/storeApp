import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data_r = await response.json();
      setData(data_r);
      setLoading(false);
    } catch ( err )
    {
      setError( err.message );
    }
  };
    useEffect( () =>
    { 
        fetchData();
    }, [] );
    return{error,loading,data}
}
export default useFetch;