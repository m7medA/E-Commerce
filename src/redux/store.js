import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../featuers/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
