import React from 'react'

export const Addtodo = ({addTodo}) => {
    return (
        <div className='container my-4'>
            <h3 className='my-3'>Add todo</h3>
            <div className="mb-3 mx-3">
                <label htmlFor="formTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="formTitle" placeholder="Todo-Title" />
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="formDesc" className="form-label">Description</label>
                <textarea className="form-control" id="formDesc" rows="2"></textarea>
            </div>
            <button className='btn btn-primary btn-sm mx-3' onClick={addTodo}>Add Todo</button>
        </div>
    )
}
