/* eslint-disable no-unused-vars */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = { 
    user: user ? user : null,
    // i think i can remove these later with react router 
    //
    isError: false,
    isSuccess:false,
    isLoading:false,
    message:'',
};
export const register = createAsyncThunk('auth/register', async (user,thunkApi) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data &&  error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }

});
//login user
// using asyncThunk for async functions

export const login = createAsyncThunk('auth/login', async (user,thunkApi) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data &&  error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }

});

export const logout = createAsyncThunk('auth/logout', async ()=> {
    await authService.logout(user)
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset: state => { 
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    /**
     * 
     * I THINK I CAN GO BACK AND DO THE ASYC FUNCTIONS IN THE MAIN.JSX WITH REACT ROUTER
     * ONCE I FINISH THIS COURSE I'LL GO BACK AND REFACTOR 
     */
    extraReducers: (builder) => {
        builder
        .addCase(register.pending,(state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled,(state,action) => {
            state.isLoading = false;
            state.isSuccess =true;
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message =action.payload
            state.user = null
        })
        .addCase(login.pending,(state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled,(state, action) => {
            state.isLoading = false;
            state.isSuccess =true;
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message =action.payload
            state.user = null
        })
        .addCase(logout.fulfilled, (state)=> {
            state.user = null;
        })
    }
});

export const  { reset } = authSlice.actions
export default authSlice.reducer