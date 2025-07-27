import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: JSON.parse(localStorage.getItem("cartProducts") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartProducts.includes(action.payload)) return;
      state.cartProducts.push(action.payload);
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    DeleteFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (id) => id !== action.payload
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
  },
});

export const { addToCart, DeleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
