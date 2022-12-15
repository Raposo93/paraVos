import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import categoryReducer from '../reducers/categoryReducer'
import productReducer from '../reducers/productReducer';

export const store = configureStore({
    reducer: {
        change: categoryReducer,
        product: productReducer,
        cart: cartReducer,
    }
});