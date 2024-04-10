import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../pages/libs/api";
import Cookies from 'js-cookie'

export interface LoginSliceType {
    username: string | null
    password: string | null
    loading: boolean
}

export const loginAccount = createAsyncThunk<
  LoginSliceType,
  { username: string; password: string }, 
  { rejectValue: string }
>(
  "login/loginAccount",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await postData("/auth/login", { username, password });
      const token = response?.data.token;
      Cookies.set("token", token);
      if (response?.status === 200) {
        window.location.href = '/home'; 
      }
      return { username, password, loading: false }; 
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to login.");
    }
  }
);
  
const initialState: LoginSliceType = {
    username: null,
    password: null,
    loading: false
}

export const loginSlice = createSlice({
    name: "auth", 
    initialState,
    reducers: {},
    extraReducers:(builder) => {
      builder
      .addCase(loginAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAccount.fulfilled, (state, action) => {
        state.loading = false; 
        state.username = action.payload?.username;
        state.password = action.payload?.password;
      })
      .addCase(loginAccount.rejected, (state) => {
        state.loading = false; 
      });
    } 
})

export default loginSlice.reducer;