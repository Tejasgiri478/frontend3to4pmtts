import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function LoginApp() {
  return (
    <>
        <Container className='p-5 mt-5  mx-auto bg-white login-app'>
            <h1 className='text-center mt-5'>Task manager App</h1>
            <form className='mt-5'>
                <div className='input-group mt-3'>
                    <span className='input-group-text bg-success text-white'><i className='bi bi-inbox'></i></span>
                    <input type='text' placeholder='Email *' required className='form-control' />
                </div>
                
                <div className='input-group mt-3'>
                    <span className='input-group-text bg-success text-white'><i className='bi bi-inbox'></i></span>
                    <input type='password' placeholder='Password *' required className='form-control' />
                </div>
                
                <div className='input-group mt-3'>
                    
                    <input type='submit' value="Login" className='btn w-50 mx-auto btn-md btn-success text-white' />
                </div>

                <div className='form-group mt-3'>
                <p className='text-center fs-5'>-Or Login with-</p>
                </div>

                <div className='form-group mt-3'>
                <p className='text-center'>
                    <button type='button'  className='btn btn-md btn-outline-dark'><span className='bi bi-apple'></span> Apple</button>

                    <button type='button'  className='btn btn-md btn-outline-dark ms-3'><span className='bi bi-google text-danger'></span> Google</button>
                    </p>
                </div>

                <div className='form-group mt-5'>
                 <b className='ms-5'>Don't have an account ?<Link to='/register'> Sign Up!</Link></b>
                </div>


            </form>
        </Container>
    </>
  )
}
