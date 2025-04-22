import React,{useState,useEffect,useRef} from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function AddCategory() {
//destrucured of category 
const[catdata,setCatData]=useState("");
// display or show category
useEffect(()=>{
     
  axios.get(`http://localhost:3000/addcategory`).then((response)=>{
    setCatData(response.data);
  });
   
})
// stored data in variables using useRef
const catname=useRef("");
const catdesc=useRef("");
const navigate=useNavigate();
// add data 
const addCategoryData=(e)=>{
  e.preventDefault();
  var insert={
    catname:catname.current.value,
    catdesc:catdesc.current.value
  }
  // call api 
  axios.post(`http://localhost:3000/addcategory`,insert).then(()=>{
     // pass a messages
          Swal.fire({
            title: "Congatulations!",
            text: "Category added successfully!",
            icon: "success"
          });
        
          navigate('/admin-login/add-category');
          e.target.reset();
    
   
  })
}
return (
    <>
    <AdminHeader />
     {/* sidebar and dashboard display flex */}
     <div className='flex flex-row'>
      {/* sidebar */}
      <div className='w-1/3 h-full'>
        <AdminSidebar />
      </div>
      {/* dashboard */}
    <div className='w-full p-8 flex flex-row'>
    <div className='w-1/2'>
    <h1 className='text-4xl text-pink-600 ms-0'>Add Category</h1>
    <hr className='border border-2 border-pink-600 w-20' />
      <form onSubmit={addCategoryData}>
        <div className='form-group mt-10'>
            <input type='text' ref={catname} placeholder='Enter Category Name *' className='form-control p-3 border border-2 border-pink-600 w-116' />
        </div>
        
        <div className='form-group mt-5'>
            <input type='text' ref={catdesc} placeholder='Category decsriptions *' className='form-control p-3 border border-2 border-pink-600 w-116' />
        </div>

        
        <div className='form-group mt-5'>
            <input type='submit' value="Add Category" className='form-control p-3 bg-black text-white w-116' />
           
        </div>
        </form>
        </div>

        <div className='w-1/2'>
     <table className='table-auto text-center w-full mt-10 border-1 border-separate border-spacing-[26px]'>
        <tr>
            <th>CategoryName</th>
            <th>Descriptions</th>
            <th>Action</th>
        </tr>

        {catdata && catdata.map((item)=>{
          return(
            <>
            <tr className='text-center'>
            <td>{item.catname}</td>
            <td>{item.catdesc}</td>
            <td><button type='button' onClick={()=>navigate(`/admin-login/delete-category/${item.id}`)} className='bg-red-600 text-white p-3'><span className='bi bi-trash'></span></button>
            |

            <button type='button' onClick={()=>navigate(`/admin-login/delete-contact/${item.id}`)} className='bg-blue-600 text-white p-3'><span className='bi bi-pencil'></span></button>
            </td>
        </tr>

            </>
          )
        })}   
   
     </table>

        </div>
  
    </div>

    </div>

    </>
  )
}
