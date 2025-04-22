import React from 'react'
export default function Header() {
  return (
    
    <>
        <div className='shadow p-0 w-full flex flex-row sticky top-0 bg-white'>
            <div className='w-65 bg-black p-10 border-b-1 border-white'>
                <h1 className='text-white text-2xl'>Admin</h1>
            </div>
            <div className='w-full'>
             <input type='text' placeholder='Search anything here...' className='p-3 mt-5 ms-17 w-4/6 border-1' />  
             <b className='text-xl ms-10'>Welcome : Admin</b> 
            </div>
        </div>
    </>
  )
}
