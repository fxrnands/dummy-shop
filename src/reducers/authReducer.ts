import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../pages/libs/api";
import Cookies from 'js-cookie'


export interface LoginSliceType {
    username: string | null
    password: string | null
}

export const loginAccount = createAsyncThunk<LoginSliceType, LoginSliceType, { rejectValue: string }>(
    "login/loginAccount",
    async (payload, thunkAPI) => {
      try {
        const response = await postData("/auth/login", payload);
        const token = response?.data.token
        Cookies.set("token", token);
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to login.");
      }
    }
);
  
const initialState: LoginSliceType = {
    username: null,
    password: null,
}

export const loginSlice = createSlice({
    name: "auth", 
    initialState,
    reducers: { 
    },
    extraReducers:(builder) => {
        builder.addCase(loginAccount.fulfilled, (state, action) => {
          state.username = action.payload?.username;
          state.password = action.payload?.password;
        })
    } 
})

export default loginSlice.reducer;