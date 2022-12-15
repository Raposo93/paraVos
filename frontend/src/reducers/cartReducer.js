import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {  
        id: 1,
        name: "producto 1",        
        image: "not found",
        price: 500,
        stock: 5,
    },
    {  
        id: 2,
        name: "producto 2",
        image: "not found",
        price: 500,
        stock: 5,
    },
];

export const cartReducer = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.push(action.payload)
        },
        deleteItems: (state, action) => {
            state.filter(() => action.payload)
        }

    }

});

export const { addItems, deleteItems } = cartReducer.actions;
export const selectCart = (state) => state.cart.value;
export default cartReducer.reducer;