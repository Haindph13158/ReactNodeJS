import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {listCart} from "../api/cartAPI";
import { toast } from "react-toastify";



export interface cartState {
    error: String;
    loading: boolean;
    products: any;
    
  }
  const initialState: cartState = {
    error: "",
    loading: false,
    products: [],
  
};




const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
        addToCart(state, action) {
            const newProduct = action.payload;
            const existProduct = state.products.find((item: { slug: any; }) => item.slug === newProduct.slug);
            if (!existProduct) {
                state.products.push(newProduct);
                toast.success("Thêm sản phẩm vào giỏ hàng thành công")
            } else {
                existProduct.quantity += newProduct.quantity
                toast.success("Thêm số lượng thành công")
            }
          
        },
        increaseCart(state, action) {
            state.products.find((item: { slug: any; }) => item.slug === action.payload).quantity++;
        },
        decreaseCart(state, action) {
            const items = state.products.find((item: { slug: any; }) => item.slug === action.payload);
            items.quantity--;
            if (items.quantity < 1) {
                const slug = action.payload
                state.products = state.products.filter((item: { slug: any; }) => item.slug !== slug);
            }
        },
       
        removeCart(state, action) {
            const slug = action.payload;
            state.products = state.products.filter((item: { slug: any; }) => item.slug !== slug);
        },
        
        
        removeAllCart(state, action) {
         
            state.products = [];
        },
        
    },
   
});

export const { addToCart, removeAllCart, removeCart,increaseCart,decreaseCart } = cartSlice.actions;
export default cartSlice.reducer