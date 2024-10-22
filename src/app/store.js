import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice.js"
import productReducer from "../features/slices/productSlice.js"
import cartReducer from "../features/slices/cartSlice.js"
import authReducer from "../features/slices/authSlice.js"
export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productReducer,
        cart: cartReducer,
        auth: authReducer
    }
})