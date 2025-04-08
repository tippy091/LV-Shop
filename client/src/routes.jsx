import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import App from "./App";
import ShopApplicationWrapper from "./Pages/ProductListPage/ShopApplicationWrapper";
import ProductDetail from "./Pages/ProductListPage/ProductDetail";
import { loadProductBySlug } from "./routes/Product";
import ProductListPageComponent from "./Pages/ProductListPage/ProductListPageComponent";
import AuthenticationWrapper from "./Pages/AuthenticationWrapper";
import Login from "./Pages/Login/Login";
import Registrer from "./Pages/Register/Registrer";
import OAuth2LoginCallback from "./Pages/OAuth2LoginCallback";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";

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
        path: "/product/:slug",
        loader: loadProductBySlug,
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/v1/",
    element: <AuthenticationWrapper />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registrer />,
      },
    ],
  },
  {
    path: "/oauth2/callback",
    element: <OAuth2LoginCallback />,
  },
  {
    path: "/admin/*",
    element: (
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    ),
  },
]);
