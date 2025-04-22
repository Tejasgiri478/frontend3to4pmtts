import React from 'react'

export default function Dashboard() {
  return (
    <div className='w-full p-5'>
    <h1 className='text-5xl ms-5'>Dashboard</h1>
    <hr className='border-1 w-55 ms-5' />

    <div className='flex flex-row'>
     <div className='w-1/3 m-5 mt-5 bg-black p-15'>
        <b className='ms-5 text-white text-2xl'>Customers <span className='bg-red-500 p-2 rounded text-sm'>10</span></b>
     </div>   
    
     <div className='w-1/3 m-5 mt-5 bg-red-500 p-15'>
     <b className='ms-5 text-white text-2xl'>Customers <span className='bg-red-500 p-2 rounded text-sm'>10</span></b>
     </div>   

     <div className='w-1/3 m-5 mt-5 bg-green-500 p-15'>
     <b className='ms-5 text-white text-2xl'>Customers <span className='bg-red-500 p-2 rounded text-sm'>10</span></b>
     </div>   
    </div>  

    
    <div className='flex flex-row'>
     <div className='w-1/3 m-5 mt-5 bg-yellow-500 p-15'>
     <b className='ms-5 text-white text-2xl'>Customers <span className='bg-red-500 p-2 rounded text-sm'>10</span></b>
     </div>   
    
     <div className='w-1/3 m-5 mt-5 bg-orange-500 p-15'>
     <b className='ms-5 text-white text-2xl'>Customers <span className='bg-red-500 p-2 rounded text-sm'>10</span></b>
     </div>   

     <div className='w-1/3 m-5 mt-5 bg-blue-500 p-15'>
     <b className='ms-5 text-white text-2xl'>Customers <span className='bg-red-500 p-2 rounded text-sm'>10</span></b>
     </div>   
    </div>  
    
    </div>
  )
}
