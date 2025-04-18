import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container,Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";

export default function LoginApp() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const { logIn, googleSignIn } = useUserAuth();
const navigate = useNavigate();
const handleSubmit = async (e) => {
e.preventDefault();
setError("");
try {
await logIn(email, password);
navigate("/dashboard");
} catch (err) {
setError(err.message);
}
};

const handleGoogleSignIn = async (e) => {
e.preventDefault();
try {
await googleSignIn();
navigate("/dashboard");
} catch (error) {
console.log(error.message);
}
};

return (
<>
<Container className='p-5 mt-5  mx-auto bg-white login-app'>
<h1 className='text-center mt-5'>Task manager App</h1>
{error && <Alert variant="danger">{error}</Alert>}
<form className='mt-5' onSubmit={handleSubmit}>
<div className='input-group mt-3'>
<span className='input-group-text bg-success text-white'><i className='bi bi-inbox'></i></span>
<input type='text' placeholder='Email *'  required className='form-control' onChange={(e) => setEmail(e.target.value)} />
</div>

<div className='input-group mt-3'>
<span className='input-group-text bg-success text-white'><i className='bi bi-inbox'></i></span>
<input type='password'  placeholder='Password *' required className='form-control' onChange={(e) => setPassword(e.target.value)} />
</div>

<div className='input-group mt-3'>
<input type='submit' value="Login" className='btn w-50 mx-auto btn-md btn-success text-white' />
</div>

<div className='form-group mt-3'>
<p className='text-center fs-5'>-Or Login with-</p>
</div>

<div className='form-group mt-3'>
<p className='text-center'>
{/* <button type='button'  className='btn btn-md btn-outline-dark'><span className='bi bi-apple'></span> Apple</button> */}

<div className="g-btn">
<GoogleButton
className=""
type="dark"
onClick={handleGoogleSignIn}
/>
</div>
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
