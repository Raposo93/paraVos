import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productReducer = createSlice({

    name: 'product',
    initialState,
    reducers: {
        changeProduct: (state, action) => {
            state.length > 0 ? 
            (state.pop(), state.push(action.payload)) : 
            state.push(action.payload)
        },

    }

});

export const { changeProduct } = productReducer.actions;
export const selectProduct = (state) => state.product.value;
export default productReducer.reducer;
