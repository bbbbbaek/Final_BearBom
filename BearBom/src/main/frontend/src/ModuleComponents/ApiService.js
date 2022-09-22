import axios from "axios";
import API_BASE_URL from "../app-config";

export const onRequest = async (
  requestUrl,
  requestMethod,
  requestData,
  requestHeader
) => {
  console.log("--------start trasmitting--------");
  let data;
  let loading = true;
  let error = false;
  try {
    const response = await axios({
      // url: API_BASE_URL + requestUrl,
      url: requestUrl,
      method: requestMethod,
      headers: requestHeader,
      data: requestData ? requestData : null,
    });
    // setData(response.data);
  } catch (err) {
    error(err);
  }
  loading = false;
};
