import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createCategory, removeCategory, updateCategory } from "../api/categories";
import { ICategory } from "../model/category";

export interface categorySate {
  error: String;
  loading: boolean;
  categories: any;
}
const initialState: categorySate = {
  error: "",
  loading: false,
  categories: [],
};
export const fetchCategories = createAsyncThunk(
  // type action
  "categories/fetchProduct",
  async () => {
    const { data } = await axios.get("http://localhost:8081/api/categories");
    return data;
  }
);
export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category: ICategory) => {
    const { data } = await createCategory(category);
    return data;
  }
);
export const deleteCategory = createAsyncThunk(
  'category/deleteCategory', async (slug: any) => {
          const { data } = await removeCategory(slug);
          return data
      
  }
)
export const editCategory = createAsyncThunk(
  'category/editCategory', async (slug: any) => {
          const { data } = await updateCategory(slug);
          return data
      
}
)
export const categoriesSlice = createSlice({
  name: "category",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    // trường hợp 2: Trang thai call api chua thanh cong
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter((item : ICategory) => item.slug !== action.payload.slug)
       
    });
    builder.addCase(editCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter((item : ICategory) => item.slug !== action.payload.slug)
       
    });
  },
});

export default categoriesSlice;
