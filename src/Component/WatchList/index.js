import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            state.cartItem.push(action.payload)

            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        removeFromCart(state, action){
            const nextCartItem = state.cartItem.filter(
                cartItems => cartItems.mal_id !== action.payload.mal_id
            )
            state.cartItem = nextCartItem;
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))

            
        }
    }
});

export const { addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
