import { createSlice } from "@reduxjs/toolkit";

export const  cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalPrice:0,
        totalQuantity: 0,
    },
    reducers:{
        addToCart:(state,action)=>{
            const {newItem, quantity}= action.payload;
           
            let find = state.items.findIndex((item) => item._id === newItem._id);
            // console.log(newItem._id, quantity, find, "did")
            // if (find >= 0) {
            //   state.items[find].quantity += 1;
            // } else {
            //   state.items.push(newItem);
            //   state.totalPrice  += newItem.price
            // }
            // console.log(newItem, quantity, "newItem")
            // console.log(find, "findItem")
            // console.log(state.items.quantity , "qq");
            state.items.push(newItem);
            state.totalPrice  += newItem.price
        },
        removeToCart:(state,action)=>{
            const newItem = action.payload;
            state.items.pop(newItem);
            state.totalPrice  -= newItem.price
        },
        clearCart:(state)=>{
            state.items = [],
            state.totalPrice = 0
        }
    }
})

export const selectCartItems = (state) =>state.cart.items

export const selectCartTotalPrice = (state)=>state.cart.totalPrice

export const selectCartTotalQuantity = (state)=>state.cart.totalQuantity

export const {addToCart, removeToCart, clearCart} = cartSlice.actions

export default cartSlice.reducer