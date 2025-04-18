import React,{useState,useEffect} from 'react'
import NavbarApp from './NavbarApp'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

export default function Content() {
const navigate = useNavigate();
// destructured of data
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
},[data]);

  return (
    <>
      <section id='content' className='container w-75 mx-auto p-5'>
      <NavbarApp />
  
      <h1 className='w-75 mx-auto'>Today's Task</h1>

      {data && data.map((item)=>{
        return(
          <>
          <div className='card mt-5 shadow w-75 mx-auto'>
      <div className='card-body'>
        <h5>{item.taskname}  

        <ul className='position-relative float-end text-decoration-none list-unstyled'>
        <li className='dropdown text-decoration-none'><Link to="" className='' data-bs-toggle="dropdown"> <button type='button' className='btn bt-sm float-end fs-2'><i class="bi bi-three-dots-vertical"></i>
        <ul className='dropdown-menu text-decoration-none w-25'>
           <li className='text-decoration-none'><button className='btn btn-light text-white btn-sm'><i className='bi bi-x-lg fs-4 text-danger'></i></button>
           
           |
           <button className='btn btn-light text-white btn-sm'><i className='bi bi-pencil fs-4 text-primary'></i></button>
           
           </li>
        </ul>

        </button>
        </Link>
        </li>
        </ul>

        </h5>
        <p>{item.taskhours}</p>
        <p><button type='button' className='btn btn-sm btn-danger text-white'>{item.status}</button></p>
      </div>
      </div>

          </>
        )
      })}
    
      </section>   
    </>
  )
}
