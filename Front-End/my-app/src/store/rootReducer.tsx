import { combineReducers } from "redux";
import { addCart } from "../slice/addCart";

import authSlice from "../slice/authSlice";
import cartSlice from "../slice/cartSlice";
import categoriesSlice from "../slice/categorySlice";

import productSlice from "../slice/productSlice";
import userSlice from "../slice/userSlice";

const rootReducer = combineReducers({
    products: productSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice,
    auth: authSlice.reducer,
    users: userSlice.reducer
    
    
});
export default rootReducer;