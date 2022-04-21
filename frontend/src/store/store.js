import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from '../reducers/productReducer';
import { cartReducer } from '../reducers/cartReducer';
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});
// const initialState = {}
const middleware = [thunk];
const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: middleware,
})
export default store;