import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthBody, Authstate } from "../types";

const initialState: Authstate = {
  isLoading: false,
  isAuth: localStorage.getItem("token") ? true : false,
  userName: localStorage.getItem("userName"),
  encodedToken: localStorage.getItem("token"),
  error: null,
  darkMode: true,
};

export const login = createAsyncThunk(
  "auth/login",
  async (body: AuthBody, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", body);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("userName", response.data.foundUser.firstName);
      if (response.data) {
        toast.success("Login succesfully");
      }
      return response.data;
    } catch (Error) {
      rejectWithValue(Error);
      toast.error("User not found try again later");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.encodedToken = null;
      state.isAuth = false;
      state.userName = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.encodedToken = action.payload.encodedToken;
        state.userName = action.payload.foundUser.firstName;
      })
      .addCase(login.rejected, (state, action: any) => {
        state.error = action.message;
      });
  },
});
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
