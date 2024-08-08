// step 2 is to build your reducers it is called slices in redux toolkit 
// nanoid for generating unique ids  . 
import {createSlice , nanoid } from "@reduxjs/toolkit"

const initialState = {
     todos : [{id:1 , text : "hello world" }]

}


// reducer is functionalities  , slice is the big brother of that version 

// here comes the diffrence where we see that 
  function sayHello() {
    console.log("hello world") ; 
  }
 export const  todoSlice = createSlice({
    name : 'todo',
    initialState ,
    // reducers comprises of properties and functions  
    reducers:{
 // here comes diff btw context api that there we used to declare the function but here we will also define the function 
 // remember it we get two thigs one state and one action 
 // the access of states help us to keep an check of state 
 // and acion provide us the ids or information to do the task in the functions 
        addTodo : (state , action) => {
            const todo = {
                id:nanoid() , 
                text : action.payload
             } 
             state.todos.push(todo)
        } ,
 
        removeTodo : (state , action) =>{
          state.todos =   state.todos.filter((todo) => todo.id != action.payload )
        } ,

    } 
 })

 // step 3 
 export const {addTodo ,removeTodo} = todoSlice.actions


 export default todoSlice.reducer ;