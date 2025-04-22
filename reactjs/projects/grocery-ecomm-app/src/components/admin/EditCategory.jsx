import React, { useEffect, useRef, useState } from 'react'
import Header from '../admin/Header'
import Sidebar from '../admin/Sidebar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate,useParams} from 'react-router-dom';
export default function EditCategory() {
//destrcturing of data  
const[cat,setCat]=useState("");
// update Category
const catname=useRef("");
const catdesc=useRef("");
const navigate=useNavigate();
const{id}=useParams();
// edit category
useEffect(()=>{
    axios.get(`http://localhost:8000/category/${id}`).then((response)=>{
      setCat(response.data)
      catname.current.value=response.data.catname;
      catdesc.current.value=response.data.catdesc;
    })

},[])

// call EventHandeling function 
const updateCategoryData=(e)=>{
    e.preventDefault();
  var upd={
    catname:catname.current.value,
    catdesc:catdesc.current.value
  }  
 //call api to add data
  axios.put(`http://localhost:8000/category/${id}`,upd).then(()=>{
    Swal.fire({
        title: "Success!",
        text: "Category Updated successfully!",
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
<h1 className='text-5xl ms-0'>Update Category</h1>
<hr className='border-1 w-55 ms-5' />
<form className='w-3/4 mt-5'>
<div className='form-group mt-3'>
<input type='text' ref={catname} placeholder='Category Name *' required className='w-3/4 p-2 border-1' />
</div>

<div className='form-group mt-3'>
<textarea type='text' ref={catdesc} placeholder='Category Descriptions *' required className='w-3/4 p-2 border-1'></textarea>
</div>

<div className='form-group mt-3'>
<button type='button'  className='w-3/4 p-3 border-1 bg-black text-white' onClick={updateCategoryData}>UpdateCategory</button>
</div>
</form>
<div className='p-0 flex flex-nowrap w-full mt-10 h-50'>

</div>

</div>
</div>


</>
)
}
