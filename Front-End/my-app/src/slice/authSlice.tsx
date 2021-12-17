import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signin, signout, signup } from '../api/authAPI';
import { Iuser } from '../model/user';

export interface userState {
    error: String,
    loading: boolean,
   
  }
  const initialState: userState = {
    error: "",
    loading: false,
   
  }

export const signIn = createAsyncThunk(
    'auth/signin',
    async (user : Iuser) => {
        const { data } = await signin(user)
        return data
    }
)
export const signUp = createAsyncThunk(
    'auth/signup',
    async (user : Iuser) => {
        const { data } = await signup(user)
        return data
    }
)
export const Signout = createAsyncThunk(
    'auth/signout',
    async () => {
        const { data } = await signout()
        return data
    }
)
const authSlice = createSlice({
    name: 'auth',
    initialState: { auth: {}, isAuthenticated: false, loading: false },
    reducers: {},
    extraReducers: (builder) => {
       
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.auth = action.payload
            state.loading = false
        })
        builder.addCase(Signout.fulfilled, (state, action) => {
            state.auth = [];
        })
        builder.addCase(signIn.pending, (state) => {
            state.loading = true;
          });
      
    }
});

export default authSlice