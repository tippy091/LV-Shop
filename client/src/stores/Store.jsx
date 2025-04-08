import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/Product";
import cartReducer from "./features/Cart";
import categoryReducer from "./features/Category";
import commonReducer from "./features/Common";
import userReducer from "./features/User";

const rootReducer = combineReducers({
  productState: productReducer,
  cartState: cartReducer,
  categoryState: categoryReducer,
  commonState: commonReducer,
  userState: userReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
