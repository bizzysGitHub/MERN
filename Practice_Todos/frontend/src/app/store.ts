import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer:{
        todos:todoReducer
    }
})