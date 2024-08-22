import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/users/userSlice";
import cartSlice from "./redux/cart/cartSlice";
import counterSlice from "./redux/cart/cartSlice";


export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartSlice,
        counter:counterSlice
    },
});
