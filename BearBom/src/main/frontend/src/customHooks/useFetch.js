import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { API_BASE_URL } from "../app-config";

// 서버 통신하는 useFetch Hooks
// 사용법 예시
// const data = useFetch("/api/inquiry", "get") 과 같이 입력하여 사용

const useFetch = (url, postData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("hello?");
      setLoading(true);
      try {
        const res = await axios({
          url: API_BASE_URL + url,
          method: "post",
          data: postData,
        });
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
