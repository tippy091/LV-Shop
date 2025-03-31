import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import App from "./App";
import ShopApplicationWrapper from "./Pages/ProductListPage/ShopApplicationWrapper";
import ProductDetail from "./Pages/ProductListPage/ProductDetail";
import { loadProductById } from "./routes/Product";
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
        path: "/women",
        element: <ProductListPage categoryType={"WOMEN"} />,
      },
      {
        path: "/men",
        element: <ProductListPage categoryType={"MEN"} />,
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
