import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../app-config";
import CardSearch from "./CardSearch";

const CourseSearch = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  console.log(params); // courseSearch 값
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `${API_BASE_URL}/api/course/search?courseSearch=` + params.courseSearch
      );
      console.log(result.data);
      console.log(result.data.result);
      // setSearchData(result);
    }
    fetchData();
  }, []);

  return (
    <>
      {searchData.map((data, i) => (
        <div key={i}>
          <CardSearch data={data} />
        </div>
      ))}
    </>
  );
};

export default CourseSearch;
