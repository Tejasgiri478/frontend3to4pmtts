import React, { useEffect, useRef, useState } from 'react'
import Header from '../admin/Header'
import Sidebar from '../admin/Sidebar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function AddCategory() {
//destrcturing of data  
const[cat,setCat]=useState("");

// display category
useEffect(()=>{
    axios.get(`http://localhost:8000/category`).then((response)=>{
      setCat(response.data)
    });
})
// add Category
const catname=useRef("");
const catdesc=useRef("");
const navigate=useNavigate();
// call EventHandeling function 
const addCategoryData=(e)=>{
    e.preventDefault();
  var insert={
    catname:catname.current.value,
    catdesc:catdesc.current.value
  }  
 //call api to add data
  axios.post(`http://localhost:8000/category`,insert).then(()=>{
    Swal.fire({
        title: "Success!",
        text: "Category Added!",
        icon: "success"
      });     
      
      navigate('/admin-login/add-category');

  })
  e.target.reset();
}
return (
<>
<Header />
<div className='p-0 w-full flex flex-row'>
<div className='w-65 bg-black p-10'>
<Sidebar />   
</div>
<div className='w-full p-10'>
<h1 className='text-5xl ms-0'>Add Category</h1>
<hr className='border-1 w-55 ms-5' />
<form className='w-3/4 mt-5' onSubmit={addCategoryData}>
<div className='form-group mt-3'>
<input type='text' ref={catname} placeholder='Category Name *' required className='w-5/6 p-2 border-1' />
</div>

<div className='form-group mt-3'>
<textarea type='text' ref={catdesc} placeholder='Category Descriptions *' required className='w-5/6 p-2 border-1'></textarea>
</div>

<div className='form-group mt-3'>
<input type='submit' value="AddCategory" className='w-5/6 p-3 border-1 bg-black text-white' />
</div>
</form>

{/* display data */}
<div className='p-0 flex flex-nowrap w-full mt-10'>
<table className='table table-auto space-x-10 gap-5  p-5 ' width="70%">
    {cat && cat.map((items)=>{
        return(
            <>
          <tr>
           <td  className='m-5 p-5'>{items.catname}</td>
           <td>{items.catdesc}</td>
           <td><button onClick={()=>navigate(`/admin-login/delete-category/${items.id}`)} type='button' className='p-2 bg-red-500 text-white'><i className='bi bi-trash'></i> Delete</button> 
           |
          <button type='button'  onClick={()=>navigate(`/admin-login/edit-category/${items.id}`)} className='p-2 bg-blue-800 text-white'><i className='bi bi-pencil'></i> Edit</button></td>
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
