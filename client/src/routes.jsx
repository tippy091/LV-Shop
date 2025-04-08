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
import OAuth2LoginCallBack from "./Pages/OAuth2LoginCallback";
import Cart from "./Pages/Cart/Cart";
import Account from "./Pages/Account/Account";
import Orders from "./Pages/Account/Orders";
import Settings from "./Pages/Account/Settings";
import Profile from "./Pages/Account/Profile";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Checkout from "./Pages/Checkout/Checkout";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import OrderConfirmed from "./Pages/OrderConfirmed/OrderConfirmed";
import ConfirmPayment from "./Pages/ConfirmPayment/ConfirmPayment";
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
        path: "/product/:slug",
        loader: loadProductBySlug,
        element: <ProductDetail />,
      },
      {
        path: "/cart-items",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <ProtectedRoute>
            <PaymentPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/orderConfirmed",
        element: <OrderConfirmed />,
      },
      {
        path: "/account-details/",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "profile",
            element: (
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            ),
          },
          {
            path: "orders",
            element: (
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            ),
          },
          {
            path: "settings",
            element: (
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            ),
          },
        ],
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
    element: <OAuth2LoginCallBack />,
  },
  {
    path: "/confirmPayment",
    element: <ConfirmPayment />,
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
