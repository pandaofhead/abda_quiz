import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "https://opentdb.com/";
const useAxios = ({url}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setloading(false));
    };

    fetchData();
  }, [url]);
  return { response, error, loading };
};

export default useAxios;


