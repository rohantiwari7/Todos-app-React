import { Header } from './components/Header.js'
import { Todos } from './components/Todos.js'
import { Footer } from './components/Footer.js'
import { useState, useEffect } from 'react';
import { Addtodo } from './components/Addtodo.js';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[]
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  

  const addTodo=(title,desc)=>{
    let s=1
    if (todos.length!==0){
      s=todos[todos.length-1].sno+1
    }
    let newTodo={ sno:s,   title:title,  desc:desc }
    console.log("added ",newTodo)
    setTodos([...todos,newTodo])
    
  }
  
  const onDelete=(todo)=>{
    console.log("deleted",todo) 
    setTodos(todos.filter((elem)=>{return elem!==todo}))
  }

  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
