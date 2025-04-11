import React, { useEffect,useState } from 'react'
import Header from '../admin/Header'
import Sidebar from '../admin/Sidebar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ExportToExcel } from './ExportToExcel';
export default function ManageContact() {
//destrcturing of data  
const[data,setData]=useState("");
const navigate=useNavigate();
const fileName = "managecontactdata"; // here enter filename for your excel file
// display category
useEffect(()=>{
    axios.get(`http://localhost:8000/contact-us`).then((response)=>{
      setData(response.data)
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
<h1 className='text-5xl ms-0'>Manage All Contacts Data <ExportToExcel apiData={data} fileName={fileName} /></h1>
<hr className='border-1 w-55 ms-5' />
{/* display data */}
<div className='p-0 flex flex-nowrap w-full mt-10'>

<table className='table table-auto space-x-10 gap-5  p-5 ' width="70%">
    {data && data.map((items)=>{
        return(
            <>
          <tr>
           <td  className='m-5 p-5'>{items.name}</td>
           <td  className='m-5 p-5'>{items.email}</td>
           <td  className='m-5 p-5'>{items.phone}</td>
           <td  className='m-5 p-5'>{items.subject}</td>
           <td  className='m-5 p-5'>{items.message}</td>
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
