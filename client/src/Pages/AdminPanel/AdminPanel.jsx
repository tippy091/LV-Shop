import React from "react";
import {
  Admin,
  fetchUtils,
  Resource,
  withLifecycleCallbacks,
} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import ProductList from "./ProductList";
import EditProduct from "./EditProduct";
import CreateProduct from "./CreateProduct";
import CategoryList from "./Category/CategoryList";
import CategoryEdit from "./Category/CategoryEdit";
import CreateCategory from "./Category/CreateCategory";
import { fileUploadAPI } from "../../api/fileUpload";

const httpClient = (url, options = {}) => {
  const token = localStorage.getItem("authToken");
  if (!options.headers) options.headers = new Headers();
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = withLifecycleCallbacks(
  simpleRestProvider("http://localhost:8080/api", httpClient),
  [
    {
      resource: "products",

      beforeSave: async (params) => {
        const payload = { ...params };

        // ✅ Thumbnail: link hoặc file
        if (params.thumbnail?.rawFile) {
          const uploadedUrl = await uploadFile(params.thumbnail.rawFile);
          payload.thumbnail = uploadedUrl;
        } else if (
          typeof params.thumbnail === "object" &&
          params.thumbnail.src
        ) {
          payload.thumbnail = params.thumbnail.src;
        } else if (typeof params.thumbnail === "string") {
          payload.thumbnail = params.thumbnail;
        }

        // ✅ Resources: link hoặc file
        payload.productResources = await Promise.all(
          (params.productResources ?? []).map(async (res) => {
            const result = { ...res };

            if (res?.url?.rawFile) {
              const uploadedUrl = await uploadFile(res.url.rawFile);
              result.url = uploadedUrl;
            } else if (typeof res?.url === "object" && res?.url?.src) {
              result.url = res.url.src;
            } else if (typeof res?.url === "string") {
              result.url = res.url;
            }

            return result;
          })
        );

        return payload;
      },

      // 🔁 Dữ liệu trả về từ server → chuyển thành định dạng mà React Admin hiểu
      transform: async (response) => {
        const result = { ...response };

        // Thumbnail dạng string → object có src
        if (typeof result.thumbnail === "string") {
          result.thumbnail = { src: result.thumbnail, title: "Thumbnail" };
        }

        // Mỗi productResource.url: string → object có src
        if (Array.isArray(result.productResources)) {
          result.productResources = result.productResources.map((res) => ({
            ...res,
            url:
              typeof res.url === "string"
                ? { src: res.url, title: res.name || "Product Image" }
                : res.url,
          }));
        }

        return result;
      },
    },
  ]
);

const AdminPanel = () => {
  return (
    <Admin dataProvider={dataProvider} basename="/admin">
      <Resource
        name="products"
        list={ProductList}
        edit={EditProduct}
        create={CreateProduct}
      />
      <Resource
        name="category"
        list={CategoryList}
        edit={CategoryEdit}
        create={CreateCategory}
      />
    </Admin>
  );
};

export default AdminPanel;
