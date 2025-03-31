import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import App from "./App";
import ShopApplicationWrapper from "./Pages/ProductListPage/ShopApplicationWrapper";
import ProductDetail from "./Pages/ProductListPage/ProductDetail";
import { loadProductById } from "./routes/Product";
import ProductListPageComponent from "./Pages/ProductListPage/ProductListPageComponent";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: ":mainCategory/:subCategory?",
        element: <ProductListPageComponent />,
      },
      {
        path: "/perfumes",
        element: <ProductListPage categoryType={"PERFUMES"} />,
      },
      {
        path: "/product/:productId",
        loader: loadProductById,
        element: <ProductDetail />,
      },
    ],
  },
]);
