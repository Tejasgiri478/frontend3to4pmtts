import React,{useState,useRef} from 'react'
import NavbarApp from './partials/NavbarApp'
import axios from 'axios'
import FlashMessage from 'react-flash-message'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import Header from './partials/Header'
export default  function AddTask() {
    // destructured of data
    const[data,setData]=useState("");
    // add task 
    const taskname=useRef("");
    const taskhours=useRef("");
    const status=useRef("");
    const navigate=useNavigate();
    // create a eventHandeling functions 

    let addTaskForm=(e) =>{
        e.preventDefault();
    
        var ins={
            taskname:taskname.current.value,
            taskhours:taskhours.current.value,
            status:status.current.value
        }
        // call api using axios.post()
        try 
        {
        let response=axios.post(`http://localhost:8000/add-task`,ins).then(()=>{
        console.log(response.data,'data stored');
        // pass messages
        Swal.fire({
            title: "Good job!",
            text: "Task added!",
            icon: "success"
          });
          navigate('/addtask');
        });

        e.target.reset();
    }
    catch(error)
    {
        console.log(error)
    }
    
    }   

    return (
    <>
     <Header />
      <section id='content' className='container w-75 mx-auto p-5'>
      <NavbarApp />
     
      <div className='card mt-5 shadow w-50 mx-auto p-5'>
      <h1 className='w-75 mx-auto text-center'>Add Task</h1>
      <form onSubmit={addTaskForm}>
        <div className='form-group mt-3'>
            <input type='text' ref={taskname} placeholder='TaskName *' required className='form-control p-2' />
        </div>
        <div className='form-group mt-3'>
            <input type='text' ref={taskhours} placeholder='Completed in Hours *' required className='form-control p-2' />
        </div>
        
        <div className='form-group mt-3'>
            <select   placeholder='Status of Task *' ref={status} required className='form-control p-2'>
                <option value="">-select status-</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
        </div>
        
        <div className='form-group mt-3'>
            <input type='submit' value="Add Task" className='btn btn-md btn-dark text-white p-2' />
        </div>
       
      </form>
      </div>   
      </section>   
    </>
  )
}
