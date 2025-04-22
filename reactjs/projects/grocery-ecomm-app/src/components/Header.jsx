import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
   <>
    <div className='w-full p-15 flex flex-row shadow border-b-1'>
         <div className='logo w-1/3'>
            <h1 className='text-5xl font-mono'>Grocery App</h1></div>
        <div className='w-2/4'>
            <input type='text' placeholder='Search For Products' className='border-1 w-full p-2 rounded' />
        </div>   

        <div className='1/3'>
            <Link to="/register"><span className='bi bi-person text-4xl ms-4'></span></Link>
            <span className='bi bi-cart text-3xl ms-10'>10</span>
        </div> 
        
    </div>
   </>
  )
}
