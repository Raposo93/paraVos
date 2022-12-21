import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../reducers/categoryReducer'
import productReducer from '../reducers/productReducer';
import authSlice from '../reducers/auth/authSlice';

export const store = configureStore({
    reducer: {
        change: categoryReducer,
        product: productReducer,
        auth: authSlice,
    }
});