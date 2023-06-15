import React, { useState } from 'react'

export const Addtodo = ({ addTodo }) => {
    
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    
    const submit=(e)=>{
        e.preventDefault()
        if (!desc || !title){
            alert("Title or Description can't be empty")
        }
        else{
            // console.log(title,desc)
            addTodo(title, desc)
            setTitle("")
            setDesc("")
        }
    }
    return (
        <div className='container my-4'>
            <h3 className='my-3'>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3 mx-3">
                    <label htmlFor="formTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="formTitle" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Todo-Title" />
                </div>
                <div className="mb-3 mx-3">
                    <label htmlFor="formDesc" className="form-label">Description</label>
                    <textarea className="form-control" id="formDesc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} rows="2"></textarea>
                </div>
                <button type="submit" className='btn btn-primary btn-sm mx-3' onClick={() => submit}>Add Todo</button>
            </form>
        </div>
    )
}
