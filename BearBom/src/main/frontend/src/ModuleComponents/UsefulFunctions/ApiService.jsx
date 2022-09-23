import axios from "axios";
import { API_BASE_URL } from "../../app-config";

export const onRequest = async (requestUrl, requestMethod, requestData) => {
  console.log("--------start transmission--------");
  let data;
  let loading = true;
  let error = false;
  try {
    const response = await axios({
      url: API_BASE_URL + requestUrl,
      method: requestMethod,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      data: requestData ? requestData : null,
    });
    console.log("--------transmission completed--------");
  } catch (err) {
    error(err);
  }
  loading = false;
};

// headers: {Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")}
