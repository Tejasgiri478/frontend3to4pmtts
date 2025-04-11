import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigations() {
  return (
   <>
   <nav className='navbar border-b-2 p-4'>
      <ul className='navbar-expand-md flex space-x-32 ms-52 mt-0 text-2xl'>
        <li><Link to='/'><span className='text-xl bi bi-house'></span>Home</Link></li>
        <li><Link to='/'><span className='text-xl bi bi-flower2'></span>Vegetable</Link></li>
        <li><Link to='/'>Fruits</Link></li>
        <li><Link to='/'>Dry Fruits</Link></li>
        <li><Link to='/contact-us'><span className='text-xl bi bi-telephone'></span>Contact</Link></li>
      </ul>     
      </nav>
   </>
  )
}
