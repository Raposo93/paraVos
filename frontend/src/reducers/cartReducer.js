import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartReducer = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {
           

            state.reduce((state, action)=>{
                if(!state.includes(action.payload)){
                  state.push(action.payload);
                }
                return state;
              },[])



        },
        deleteItems: (state, action) => {
            state.filter(() => action.payload)
        }

    }

});

export const { addItems, deleteItems } = cartReducer.actions;
export const selectCart = (state) => state.cart.value;
export default cartReducer.reducer;