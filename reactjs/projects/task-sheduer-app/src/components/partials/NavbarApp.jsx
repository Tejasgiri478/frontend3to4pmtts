import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useUserAuth } from '../../Context/UserAuthContext';
export default function NavbarApp() {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
  try {
  await logOut();
  navigate("/");
  } catch (error) {
  console.log(error.message);
  }
  };

  const[data,setData]=useState(0);
  
       useEffect(()=>{
        try 
        {
       const response=async()=>{   

       await axios.get(`http://localhost:8000/add-task`).then((response)=>{
          setData(response.data);
          console.log(response)
       });
      }
      response();
      }
       catch(error)
       {
        console.log(error);
       }
      },[]);
  return (
    <nav className='nav navbar navbar-expand-md'>
        <ul className='navbar-links'>
        <li><Link to="/addtask"><button type='button' className='btn btn-md btn-dark text-white'>Add Task</button></Link></li>

            <li><Link to="/dashboard"><button type='button' className='btn btn-md btn-dark text-white position-relative'>My Task
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{data.length}</span></button></Link></li>
        
            <li><button type='button' className='btn btn-md btn-outline-dark text-dark'>In Progress</button></li>
            <li><button type='button' className='btn btn-md btn-outline-danger text-dark' onClick={ handleLogout}>Logout <span className='bi bi-power'></span></button></li>
        </ul>
    </nav>
  )
}
