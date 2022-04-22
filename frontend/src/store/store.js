import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from '../reducers/productReducer';
import { cartReducer } from '../reducers/cartReducer';
import { userLoginReducer } from '../reducers/userReducer';
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const UserInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    },
    userLogin: {
        userInfo: UserInfoFromStorage
    }
}
const middleware = [thunk];
const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: middleware,
    preloadedState: initialState
})
export default store;