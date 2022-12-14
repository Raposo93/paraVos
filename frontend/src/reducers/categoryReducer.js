import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Todos"];

export const categoryReducer = createSlice({

    name: 'change',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.length > 0 ? 
            (state.pop(), state.push(action.payload)) : 
            state.push(action.payload)
        },

    }

});

export const { changeCategory } = categoryReducer.actions;
export const selectCategory = (state) => state.change.value;
export default categoryReducer.reducer;