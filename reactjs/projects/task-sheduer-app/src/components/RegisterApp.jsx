import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';

export default function RegisterApp() {
const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [password, setPassword] = useState("");
const { signUp } = useUserAuth();
let navigate = useNavigate();
const handleSubmit = async (e) => {
e.preventDefault();
setError("");
try {
await signUp(email, password);
navigate("/");
} catch (err) {
setError(err.message);
}
};

  return (
    <>
        <Container className='p-5 mt-5  mx-auto bg-white login-app'>
            <h1 className='text-center mt-5'>Task manager App</h1>
            
           {error && <Alert variant="danger">{error}</Alert>}


            <h4 className='text-center mt-5'>Create account here!</h4>
            <form className='mt-5' onSubmit={handleSubmit}>
                <div className='input-group mt-3'>
                    <span className='input-group-text bg-success text-white'><i className='bi bi-inbox'></i></span>
                    <input type='text' placeholder='Email *' onChange={(e) => setEmail(e.target.value)}  required className='form-control' />
                </div>
                
                <div className='input-group mt-3'>
                    <span className='input-group-text bg-success text-white'><i className='bi bi-lock'></i></span>
                    <input type='password' placeholder='Password *' onChange={(e) => setPassword(e.target.value)} required className='form-control' />
                </div>

                <div className='input-group mt-3'>
                    <span className='input-group-text bg-success text-white'><i className='bi bi-lock'></i></span>
                    <input type='password' placeholder='Confirmed Password *' required className='form-control' />
                </div>
                
                <div className='input-group mt-3'>
                    
                    <input type='submit' value="SignUp" className='btn w-50 mx-auto btn-md btn-success text-white' />
                    <input type='reset' value="Reset" className='btn w-50 mx-auto btn-md btn-danger text-white' />
                </div>

             

                <div className='form-group mt-5'>
                 <b className='ms-5'>Already have an account ?<Link to='/'> Sign In!</Link></b>
                </div>


            </form>
        </Container>
    </>
  )
}
