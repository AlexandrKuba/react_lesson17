import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  accessToken: null,
};
const sessionSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
    },
  },
});
export const { setCredentials, logout } = sessionSlice.actions;
export const selectAuthUser = (state) => state.auth.user;
export const selectAccessToken = (state) => state.auth.accessToken;
export const sessionReducer = sessionSlice.reducer;
