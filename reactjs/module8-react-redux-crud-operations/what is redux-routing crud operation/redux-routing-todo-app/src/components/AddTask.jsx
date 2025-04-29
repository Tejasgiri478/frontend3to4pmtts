import React, { useState } from 'react'
import Header from './partials/Header'
import Navbar from './partials/Navbar'
import { useSelector,useDispatch } from 'react-redux'
// import all function from todoSlice components
import { addTodo,toggleTodo,deleteTodo } from '../fetaures/todos/todoSlice'

const AddTask=()=> {
// take input from user 
const[input,setInput]=useState("");
const todos=useSelector((state)=>state.todos);
const dispatch=useDispatch();

// create a form handeling function 
const handeleAdd=(e)=>{
     e.preventDefault();
    if(input.trim()){
        dispatch(addTodo(input));
        setInput('');
    }
} 

return (  
<>
<Header />
<Navbar />
{/* create a counter app */}
<div className='bg-white w-50 mx-auto p-5'>
<h1 className='fs-3'>Add Task</h1>
<p className='fs-5'>Lets add some to do app via redux / toolkit </p>
<form className='mt-2'>
<div className='input-group'>
    <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Add here something for add in List *' className='form-control' />
    <button  className='btn btn-sm btn-dark text-white w-25' onClick={handeleAdd}><span className='bi bi-plus fs-4'></span></button>
</div>
</form>

{/* display the data */}

<ul className='mt-5 m-5'>
   {/* {todos.map((todo)=>{
    return(
        <>
        <li key={todo.id}>{todo.text}</li>
        </>
    )
   
   })} */}

   {todos.map((todo)=>(
        <li key={todo.id} style={{textDecoration:todo.completed ? 'line-through':'none'}} className='mt-2'>{todo.text}

        <button type='button' className='btn btn-sm btn-primary ms-2' onClick={()=>dispatch(toggleTodo(todo.id))}>Toggle</button>
        
        <button type='button' className='btn btn-sm btn-danger ms-2' onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>

        </li>
   ))}


</ul>
</div>
</>
)
}

export default AddTask;