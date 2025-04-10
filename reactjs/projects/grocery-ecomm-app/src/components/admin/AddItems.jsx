import React,{useEffect,useState} from 'react'
import Header from '../admin/Header'
import Sidebar from '../admin/Sidebar'
import axios from 'axios';
export default function AddCategory() {
//destrcturing of data  
const[cat,setCat]=useState("");
// display category
useEffect(()=>{
    axios.get(`http://localhost:8000/category`).then((response)=>{
      setCat(response.data)
    });
})

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
<form className='w-3/4'>


<div className='form-group mt-3'>
<select  type='text' placeholder='select category *' required className='w-3/4 p-2 border-1'>
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
<input type='text' placeholder='Items Name *' required className='w-3/4 p-2 border-1' />
</div>

<div className='form-group mt-3'>
<input type='text' placeholder='Items Photo URL *' required className='w-3/4 p-2 border-1' />
</div>
<div className='form-group mt-3'>
<input type='text' placeholder='Items Price *' required className='w-3/4 p-2 border-1' />
</div>

<div className='form-group mt-3'>
<textarea type='text' placeholder='Items Descriptions *' required className='w-3/4 p-2 border-1'></textarea>
</div>

<div className='form-group mt-3'>
<input type='submit' value="AddItems" className='w-3/4 p-3 border-1 bg-black text-white' />
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
           <td><button type='button' className='p-2 bg-red-500 text-white'><i className='bi bi-trash'></i> Delete</button> | <button type='button' className='p-2 bg-blue-800 text-white'><i className='bi bi-pencil'></i> Edit</button></td>
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
