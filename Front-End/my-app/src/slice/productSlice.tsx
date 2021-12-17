import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { create, remove, updateProduct } from "../api/products";
import { IProduct } from "../model/product";



export interface productState {
  error: String,
  loading: boolean,
  products: any
  product: any
}
const initialState: productState = {
  error: "",
  loading: false,
  products: [],
  product: {}
}
export const fetchProducts = createAsyncThunk(
    // type action
    "product/fetchProduct",
    async () => {
      const { data } = await axios.get(
        "http://localhost:8081/api/products"
      );
      return data;
    }
);
export const deleteProduct = createAsyncThunk(
  'product/deleteCategory', async (slug: any) => {
          const { data } = await remove(slug);
          return data
      
  }
)
export const editProduct = createAsyncThunk(
  'product/editproduct', async (slug: any) => {
          const { data } = await updateProduct(slug);
          return data
      
  }
)

export const addProduct = createAsyncThunk(
  "product/addproduct",
  async (product: IProduct) => {
    const { data } = await create(product);
    return data;
  }
);
export const productSlice =  createSlice ({
  name: "product", // product/removeProduct
  reducers: {

  },
  initialState,
  extraReducers: (builder) => {
    // Gọi đến action FetchProducts và lấy sản phẩm
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      state.product = action.payload
    });
    builder.addCase(deleteProduct.fulfilled,(state,action) =>{
      state.products = state.products.filter((item : IProduct) => item.slug !== action.payload.slug)
    })
    // trường hợp 2: Trang thai call api chua thanh cong
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    
  }
})
    


export default productSlice;

  