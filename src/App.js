import { Header } from './components/Header.js'
import { Todos } from './components/Todos.js'
import { Footer } from './components/Footer.js'
import { useState } from 'react';
import { Addtodo } from './components/Addtodo.js';
// import { Addtodo } from './components/Addtodo.js'

function App() {
  
  const [todos, setTodos] = useState([
    {sno:1,
    title:"first todo",
    desc:"this is first todo"},
    {sno:2, 
    title:"second todo",
    desc:"this is second todo"},
    {sno:3, 
    title:"third todo",
    desc:"this is third todo"}
    ]);
  // if (localStorage.getItem('todos')){
  //   todos=JSON.parse(localStorage.getItem('todos'))
  // }
  // else{
  //   localStorage.setItem('todos')
  //   todos={}
  // }
  const onDelete=(todo)=>{
    console.log(todo) 
    // let ind=todos.indexOf(todo) 
    // console.log(ind)  
    // todos.splice(ind,1)
    setTodos(todos.filter((elem)=>{return elem!==todo}))
  }
  
  const addTodo=(todo)=>{
    console.log("added")
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
