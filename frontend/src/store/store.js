import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer } from '../reducers/productReducer';
import { productDetailsReducer } from '../reducers/productReducer';
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
});
// const initialState = {}
const middleware = [thunk];
const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: middleware,
})
export default store;