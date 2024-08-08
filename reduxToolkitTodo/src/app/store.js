 // step  1  store the house of data where we keep all data and the variable and use for syncronization of state 
 // further configure store 
 import { configureStore } from "@reduxjs/toolkit"  // it is coming from core redux not from react redux 
 import todoReducer from '../features/todo/todoSlice';

 
export const store  = configureStore({
    reducer:todoReducer
})  


