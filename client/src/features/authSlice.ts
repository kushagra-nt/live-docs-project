import { createSlice } from "@reduxjs/toolkit";

type InitialValueType = {
  user: null;
};

const initialValues: InitialValueType = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialValues,
  reducers: {
    setUser: (state, action) => {},
    logout: (state, action) => {},
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
