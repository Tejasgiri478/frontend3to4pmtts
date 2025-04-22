import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { useUserAuth } from '../../Context/UserAuthContext';
export default function Header() {
  const {user } = useUserAuth();
  return (
    <>
        <section id='header' className='container w-75 mx-auto p-5'>

        <Row>
            <div className='col-md-9 mx-auto'>
                <Row>
                <div className='col-md-1'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg' className='rounded-circle' /> 
                </div>
                <div className='col-md-8'>
                <span className='fs-5 w-25 ms-2'> Good Morning </span>
                <br/>
                <span className='ms-2 lh-sm fs-6'>Welcome : {user && user.email}</span>
                </div>
                </Row>

            </div>
            
            <div className='col-md-3'>
                <span className='bi bi-search fs-2 ms-5'></span>
                
                <span className='bi bi-cart fs-2 ms-3'></span>
            </div>
        </Row>
            
        </section>
    </>
  )
}
