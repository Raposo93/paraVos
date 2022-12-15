import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}];

export const registerReducer = createSlice({

    name: 'Users',
    initialState,
    reducers: {
        userReducer: (state, action) => 
            (state.push(action.payload))

    }

});

export const { userReducer } = registerReducer.actions;
export default registerReducer.reducer;