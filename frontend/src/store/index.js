import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../reducers/categoryReducer'
import productReducer from '../reducers/productReducer';
import  userReducer from '../reducers/userReducer';


export const store = configureStore({
    reducer: {
        change: categoryReducer,
        product: productReducer,
        Users: userReducer,
    }
});