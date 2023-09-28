import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../constants";

const { access, email } = auth;
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, email } = action.payload;
      state.accessToken = accessToken;
      state.email = email || localStorage.getItem(user_email);
      localStorage.setItem(accessToken, access);
      localStorage.setItem(user_email, state.email);
    },
  },
});
export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;
