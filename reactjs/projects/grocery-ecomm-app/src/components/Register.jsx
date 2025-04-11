import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Navigations from './Navigations'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function Register() {
const[data,setData]=useState("");

return (
<>
<Header />
<Navigations />
{/* Contact us */}
<div className='products'>
{/* category sidebar */}
<div className='w-1/2 p-5'>
<ul>
<li><Link to=""><h1 className='text-2xl font-mono'>Our Address</h1></Link></li>
<li><Link to="">Ground Floor, Pioneer Square, Sector 62, Golf Course Extension Road, Gurugram-122098, Haryana, India, and their registered office address is 1042/2, VISTAR COLONY, MAKNPUR INDIRAPURAM, Ghaziabad, Uttar Pradesh, India - 201012</Link></li>
<li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2163086579644!2d70.75867757412165!3d22.26979454400275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb000e507455%3A0xf0cd3e17d20e1b1e!2sBlinkit%20store!5e0!3m2!1sen!2sin!4v1744017838069!5m2!1sen!2sin" width="90%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li>
</ul>
</div>
<div className='prod-app mt-4 p-16 w-full'>
<h1 className='text-5xl'>Create Account</h1>
<hr className='w-52'/>

<form className=''>

<div className='form-group mt-3'>
<input type='text'  placeholder='Email *' required className='w-3/4 p-2 border-1' />
</div>

<div className='form-group mt-3'>
<input type='text'  placeholder='Password *' required className='w-3/4 p-2 border-1' />
</div>
<div className='form-group mt-3'>
<input type='text'  placeholder='phone *' required className='w-3/4 p-2 border-1' />
</div>


<div className='form-group mt-3'>
<input type='submit' value="Register" className='w-3/4 p-3 border-1 bg-black text-white' />
</div>

<div className='form-group mt-3'>
<b>Already have an account ? </b><Link to="/login-us">Login here</Link>

</div>
</form>

</div>

</div>

<Footer />

</>
)
}
