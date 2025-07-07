import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchProducts: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productsBySearch(state, action) {
      state.searchProducts.push(action.payload);
    },
  },
});

export const { productsBySearch } = productSlice.actions;

export default productSlice.reducer;
