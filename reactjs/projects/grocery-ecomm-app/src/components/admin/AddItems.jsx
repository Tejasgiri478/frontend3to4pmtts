import React,{useEffect,useRef,useState} from 'react'
import Header from '../admin/Header'
import Sidebar from '../admin/Sidebar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function AddCategory() {
  // fetch category in items
  const[cat,setCat]=useState("");
  // display category
  useEffect(()=>{
      axios.get(`http://localhost:8000/category`).then((response)=>{
        setCat(response.data)
      });
  })  
//destrcturing of data  
const[items,setItems]=useState("");
// display category
useEffect(()=>{
    axios.get(`http://localhost:8000/add-items`).then((response)=>{
      setItems(response.data)
    });
})
// display category
// useEffect(()=>{
//     axios.get(`http://localhost:8000/add-items`).then((response)=>{
//       setCat(response.data)
//     });
// })
// add items here
const catname=useRef("");
const itemsname=useRef("");
const photo=useRef("");
const price=useRef("");
const desc=useRef("");
const navigate=useNavigate();
// call EventHandeling function 
const addItemsData=(e)=>{
    e.preventDefault();
  var insert={
    catname:catname.current.value,
    itemsname:itemsname.current.value,
    photo:photo.current.value,
    price:price.current.value,
    desc:desc.current.value
  }  
 //call api to add data
  axios.post(`http://localhost:8000/add-items`,insert).then(()=>{
    Swal.fire({
        title: "Success!",
        text: "Items Added successfully!",
        icon: "success"
      });     
      
      navigate('/admin-login/add-items');

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
<h1 className='text-5xl ms-5'>Add Items</h1>
<hr className='border-1 w-55 ms-5' />
<form className='w-3/4' onSubmit={addItemsData}>
<div className='form-group mt-3'>
<select  type='text' ref={catname} placeholder='select category *' required className='w-3/4 p-2 border-1'>
<option value="">-select Category-</option>
{cat && cat.map((items)=>{
    return (
        <>
      
        <option value={items.catname}>{items.catname}</option>
        </>
    )
})}


</select>
</div>
<div className='form-group mt-3'>
<input type='text' ref={itemsname} placeholder='Items Name *' required className='w-3/4 p-2 border-1' />
</div>

<div className='form-group mt-3'>
<input type='text' ref={photo} placeholder='Items Photo URL *' required className='w-3/4 p-2 border-1' />
</div>
<div className='form-group mt-3'>
<input type='text' ref={price} placeholder='Items Price *' required className='w-3/4 p-2 border-1' />
</div>

<div className='form-group mt-3'>
<textarea type='text' ref={desc} placeholder='Items Descriptions *' required className='w-3/4 p-2 border-1'></textarea>
</div>

<div className='form-group mt-3'>
<input type='submit' value="AddItems" className='w-3/4 p-3 border-1 bg-black text-white' />
</div>
</form>

{/* display data */}
<div className='p-0 flex flex-nowrap w-full mt-10'>
<table className='table table-auto space-x-10 gap-5  p-5 ' width="70%">
    {items && items.map((rows)=>{
        return(
            <>
          <tr>
          <td><img src={rows.photo} alt='photo' className='img-fluid' style={{width:"55px", height:"55px"}} /></td>
           <td  className='m-5 p-5'>{rows.catname}</td>
           <td>{rows.itemsname}</td>
           <td>{rows.price}</td>
           <td>
           <button type='button'  className='p-2 bg-red-500 text-white'><i className='bi bi-trash'></i> Delete</button> 
           |
            <button type='button' className='p-2 bg-blue-800 text-white'><i className='bi bi-pencil'></i> Edit</button></td>
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
