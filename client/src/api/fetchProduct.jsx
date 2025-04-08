import axios from "axios";
import { API_BASE_URL, API_URLS } from "./constant";

export const getAllProducts = async (id, typeID) => {
  let url = API_BASE_URL + API_URLS.GET_PRODUCTS + `?categoryId=${id}`;

  if (typeID) {
    url = url + `&typeId=${typeID}`;
  }

  try {
    const result = await axios(url, {
      method: "GET",
    });
    return result?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductBySlug = async (slug) => {
  const url = API_BASE_URL + API_URLS.GET_PRODUCTS + `?slug=${slug}`;

  try {
    const result = await axios(url, {
      method: "GET",
    });

    console.log(result?.data?.[0]);

    return result?.data?.[0];
  } catch (error) {
    console.log(error);
  }
};
