import React from 'react'

export default function NavbarApp() {
  return (
    <nav className='nav navbar navbar-expand-md'>
        <ul className='navbar-links'>
            <li><button type='button' className='btn btn-md btn-dark text-white'>My Task</button></li>
            <li><button type='button' className='btn btn-md btn-outline-dark text-dark'>In Progress</button></li>
            <li><button type='button' className='btn btn-md btn-outline-dark text-dark'>Completed</button></li>
        </ul>
    </nav>
  )
}
