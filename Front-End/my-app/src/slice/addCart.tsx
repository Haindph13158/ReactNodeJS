import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addProductCart } from "../api/cartAPI";

export interface addCartState {
    error: String,
    loading: boolean,
    products: any
    
  }
  const initialState: addCartState = {
    error: "",
    loading: false,
    products: []
  }
  export const addCart = createAsyncThunk(
    "cart/addcart",
    async (cart: any) => {
      const { data } = await addProductCart(cart);
      return data;
    }
  );
 
  

  export const addCartSlice =  createSlice ({
    name: "cart", 
    reducers: {
  
    },
    initialState,
    extraReducers: (builder) => {
      builder.addCase(addCart.fulfilled, (state, action) => {
        console.log(state);
        
        state.products = [];
        state.loading = false
      });
     
      
    }
  })
      
  
  
  export default addCartSlice;
  