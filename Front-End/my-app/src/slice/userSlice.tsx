import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createCategory, removeCategory, updateCategory } from "../api/categories";
import { ICategory } from "../model/category";

export interface usersState {
  error: String;
  loading: boolean;
  users: any;
}
const initialState: usersState = {
  error: "",
  loading: false,
  users: [],
};
export const fetchUser = createAsyncThunk(
  // type action
  "users/fetchUsers",
  async () => {
    const { data } = await axios.get("http://localhost:8081/api/users");
    return data;
  }
);


export const userSlice = createSlice({
  name: "users",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    // trường hợp 2: Trang thai call api chua thanh cong
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
   
   
  },
});

export default userSlice;
