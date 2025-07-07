import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistIds: JSON.parse(localStorage.getItem("wishlistIds") || "[]"),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.wishlistIds.includes(action.payload))
        state.wishlistIds.push(action.payload);
      localStorage.setItem("wishlistIds", JSON.stringify(state.wishlistIds));
    },
    deleteFromWishlist: (state, action) => {
      state.wishlistIds = state.wishlistIds.filter(
        (id) => id !== action.payload
      );
      localStorage.setItem("wishlistIds", JSON.stringify(state.wishlistIds));
    },
  },
});

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
