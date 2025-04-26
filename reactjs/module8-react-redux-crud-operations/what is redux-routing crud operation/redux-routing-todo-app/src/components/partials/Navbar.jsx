import React from 'react'
import { Link, Links } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav className='nav navbar navbar-expand-md bg-dark w-50 mx-auto'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About</Link></li>
        <li><Link to="/add-task">Add Task</Link></li>
        <li><Link to="/counter-app">Counter App</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      </nav>
    </div>
  )
}
