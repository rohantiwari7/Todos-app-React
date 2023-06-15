import React from 'react'
import { TodoItem } from "./TodoItem.js"

export const Todos = ({todos, onDelete}) => {
  return (
    <>
        <div className='container my-3' style={{"minHeight":"85vh"}}>
            <h3 className='my-3'>Todos List</h3>
            
            {todos.length===0 ? "No Todos to display"
             :
            todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
                // console.log("map called")
            })
            }
        </div>
    </>
  )
}
