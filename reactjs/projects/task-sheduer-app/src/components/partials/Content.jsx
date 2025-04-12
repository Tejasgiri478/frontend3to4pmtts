import React from 'react'
import NavbarApp from './NavbarApp'
export default function Content() {
  return (
    <>
      <section id='content' className='container w-75 mx-auto p-5'>
      <NavbarApp />
      <h1 className='w-75 mx-auto'>Today's Task</h1>

      <div className='card mt-5 shadow w-75 mx-auto'>
      <div className='card-body'>
        <h5>Angular crud App</h5>
        <p>2 hours Time</p>
        <p><button type='button' className='btn btn-sm btn-danger text-white'>Pending</button></p>
      </div>
      </div>   

      <div className='card mt-5 shadow w-75 mx-auto'>
      <div className='card-body'>
        <h5>Angular crud App</h5>
        <p>2 hours Time</p>
        <p><button type='button' className='btn btn-sm btn-danger text-white'>Pending</button></p>
      </div>
      </div>   


      <div className='card mt-5 shadow w-75 mx-auto'>
      <div className='card-body'>
        <h5>Angular crud App</h5>
        <p>2 hours Time</p>
        <p><button type='button' className='btn btn-sm btn-danger text-white'>Pending</button></p>
      </div>
      </div>   

      <div className='card mt-5 shadow w-75 mx-auto'>
      <div className='card-body'>
        <h5>Angular crud App</h5>
        <p>2 hours Time</p>
        <p><button type='button' className='btn btn-sm btn-danger text-white'>Pending</button></p>
      </div>
      </div>   
      </section>   
    </>
  )
}
