import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state,action){
            const {ItemName, quantity, price, picture} = action.payload;
            const isItemThere = state.items.find(f => (f.ItemName === ItemName))
            if (isItemThere){
                isItemThere.quantity += quantity;
            } else {
                state.items.push({ItemName, quantity, price, picture})
            }
        },
        removeFromCart(state,action) {
            const {ItemName} = action.payload;
            state.items = state.items.filter(f => (f.ItemName !== ItemName));
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;