import {createContext, useContext} from'react';

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"Todo msg",
        completed:false
    }],
    addTodo:(todo: any)=>{},
    updateTodo:(id: any,todo: any)=>{},
    deleteTodo:(id: any)=>{},
    toogleComplete:(id: any)=>{}
})


export const TodoContextProvider = TodoContext.Provider

export const useTodoContext=()=>{
    return useContext(TodoContext)
}