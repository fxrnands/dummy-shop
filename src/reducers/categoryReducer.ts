import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../pages/libs/api";

export interface CategorySliceType {
    category: string[] | null
    loading: boolean
    error: string | null
}

export const fetchCategories = createAsyncThunk<string[], void, { rejectValue: string }>(
    "fetchCategories",
    async (_, thunkAPI) => {
      try {
        const response = await getData("/products/categories");
        return response?.data
      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to fetch categories.");
      }
    }
  );
  

  const initialState: CategorySliceType = {
    category: null,
    loading: false,
    error: null
  }

  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.error = null 
            state.loading = false
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.category = action.payload
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.error = action.error.message!
            state.loading = false
        })
    }
  })

  export default categorySlice.reducer;