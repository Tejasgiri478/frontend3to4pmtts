import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate,useParams } from 'react-router-dom';

export default function DeleteCategory() {
//destructuring of data
const[cat,setCat]=useState("");
const{id}=useParams();
const navigate=useNavigate();
// delete using axios api axios.delete() 
useEffect(()=>{
// call api for delete particular data matched with id
axios.delete(`http://localhost:8000/category/${id}`).then(()=>{

     Swal.fire({
            title: "Success!",
            text: "Category deleted successfully!",
            icon: "success"
          });     
          
          navigate('/admin-login/add-category');
})
})
  return (
    <div>
      
    </div>
  )
}
