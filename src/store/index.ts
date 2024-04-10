import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { CategoryReducer, ProductReducer, LoginReducer } from "../reducers";

export const store = configureStore({
    reducer: {
        productList: ProductReducer, 
        productDetail: ProductReducer, 
        category: CategoryReducer,
        username: LoginReducer,
        password: LoginReducer,
        loading: LoginReducer
    }
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 