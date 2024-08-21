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
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;