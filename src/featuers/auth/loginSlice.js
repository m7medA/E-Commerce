import { createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "../../utils/fetches";

const initialState = {
  username: null,
  password: null,
  isAutnenticated: localStorage.getItem("isAuthenticated") === "true",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: {
      prepare(username, password) {
        return {
          payload: {
            username,
            password,
          },
        };
      },

      reducer(state, action) {
        const auth = loginAPI("eve.holt@reqres.in", "cityslicka");
        state.username = action.payload.username;
        state.password = action.payload.password;
        state.isAutnenticated = Boolean(auth);
        localStorage.setItem("isAuthenticated", state.isAutnenticated);
      },
    },
    logout: (state, action) => {
      state.isAutnenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
