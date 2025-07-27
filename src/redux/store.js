import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../featuers/cart/cartSlice";
import wishlistReducer from "../featuers/wishlist/wishlistSlice";
import loginReducer from "../featuers/auth/loginSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    login: loginReducer,
  },
});

export default store;
