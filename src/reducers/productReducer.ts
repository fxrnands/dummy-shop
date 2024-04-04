import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Product } from "../utils/type";
import { getData } from "../pages/libs/api";

export interface InitialStateType {
    productList: Product[] | null
    productDetail: Product | null
    loading: boolean
    error: string | null
    name: string
}

export const fetchProducts = createAsyncThunk<string[], { id?: string, category?: string | null }, { rejectValue: string }>(
  "fetchProducts",
  async ({ id, category }, thunkAPI) => {
    try {
      let url = '/products/';

      if (id) {
        url = `/products/${id}`;
      } else if (category) {
        url = `/products/category/${category}`;
      }

      const response = await getData(url);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch issues.");
    }
  }
);

const initialState: InitialStateType = {
    productList: null,
    productDetail: null,
    loading: false,
    error: "",
    name: ""
}

export const productSlice = createSlice({
    name: "product", 
    initialState,
    reducers: { 
        changeName: (state, action) => {
            state.loading = action.payload;
        },
        filterProductByName: (state, action) => {
          const inputValue = action.payload
          
          state.productList = state?.productList?.filter
          (product => product.title.toLowerCase().includes(inputValue)) ?? null;
        } 
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.productList = action.payload as any
          state.productDetail = action.payload as any
          state.error = null
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
          state.error = action.error.message!;
          state.loading = false;
        })
    } 
})

export default productSlice.reducer; 
export const { filterProductByName } = productSlice.actions