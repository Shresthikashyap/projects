import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state,action){
            // const newItem = action.payload;
            // const existingItem = state.items.find((item)=>item.id===newItem.id);
            // console.log(existingItem)
            // state.totalQuantity++;
            // if(!existingItem){
            //     state.items.push({
            //         id:newItem.id,
            //         price:newItem.price,
            //         quantity:1,
            //         total: newItem.price,
            //         name:newItem.title
            //     });
            // }else{
            //     existingItem.quantity++;
            //     existingItem.total += newItem.price
            // }
            const newItem = action.payload;
    
            // Check if state.items is undefined or not an array
            if (!Array.isArray(state.items)) {
                state.items = [];
            }
        
            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
        
            state.totalQuantity++;
        
            if (existingItemIndex === -1) {
                // If item not found, add it to the cart
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    total: newItem.price,
                    name: newItem.title
                });
            } else {
                // If item already exists, update quantity and total
                state.items[existingItemIndex].quantity++;
                state.items[existingItemIndex].total += newItem.price;
            }
        },
        removeItemFromCart(state,action){
            const id= action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }else{
                existingItem.quantity--;
                existingItem.total -= existingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;

