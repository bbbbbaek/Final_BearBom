import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { API_BASE_URL } from "../app-config";

// ***** state 변경 시 마다 계속 렌더링 되는 성능 문제로 인해 해당 hooks 사용 금지 *****

const useFetch = (requestUrl, requestMethod, requestData, requestHeader) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    console.log(requestData);
    console.log("start server communication");
    setLoading(true);
    try {
      const res = await axios({
        // url: API_BASE_URL + requestUrl,
        url: requestUrl,
        method: requestMethod,
        headers: requestHeader,
        data: requestData ? requestData : null,
      });
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);

    console.log("continue");
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("start data fetching");
      setLoading(true);
      try {
        const res = await axios({
          url: API_BASE_URL + requestUrl,
          method: requestMethod,
          headers: requestHeader,
        });
        // console.log(res.data);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [requestUrl]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios({
        // url: API_BASE_URL + requestUrl,
        url: requestUrl,
        method: requestMethod,
        headers: requestHeader,
        data: requestData ? requestData : null,
      });
      // console.log(res.data);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
