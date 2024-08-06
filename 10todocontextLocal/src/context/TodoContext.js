import { Theme } from 'blockly';
import React from 'react'
import { createContext , useContext } from 'react'


export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo message",
            completed:false ,
        } 
    ],
    addTodo : (todo) =>{} ,
    updateTodo: (id,todo) => {} ,
    deleteTodo: (id) =>{},
    togoleComplete : (id ) =>{}

})

 export const useTodo = () =>{
    
    
  return  useContext(  TodoContext) ; 
}

export const TodoProvider = TodoContext.Provider;