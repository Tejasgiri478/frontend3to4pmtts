import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function Content() {
//destrcturing of data  
const[data,setData]=useState("");
const navigate=useNavigate();
// display category
useEffect(()=>{
    axios.get(`http://localhost:8000/category`).then((response)=>{
      setData(response.data)
    });
})

// display r fetch add items from admins in customer panel
const[items,setItems]=useState("");
// display category
useEffect(()=>{
    axios.get(`http://localhost:8000/add-items`).then((response)=>{
      setItems(response.data)
    });
})

return (

<>
{/* banner area */}
<section id='banner'>
<div className='container mx-auto mt-2'>
<img src='https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Fresh-and-healthy-vegetables-banner-design-template-download-scaled.jpg' alt='banner' className='img-fluid w-full h-128' />
</div>
</section>
{/* products area */}

<div className='products'>
{/* category sidebar */}
<div className='category-sidebar p-5'>
<ul>
<li><Link to=""><h1 className='text-2xl font-mono'>Select Category</h1></Link></li>
{data && data.map((items)=>{
    return(
        <>
        <li><Link to="">{items.catname}</Link></li>

        </>
    )
})}

</ul>
</div>

{items && items.map((rows)=>{
    return(
        <>
        
<div className='prod-app mt-4 p-16'>
<p className='text-center'><img src={rows.photo} alt='flower' style={{width:"40%", height:"200px"}} /></p>

<p className='text-4xl font-mono text-center'>{rows.itemsname}</p>
<p className='text-2xl font-mono text-center'>Rs. {rows.price}-/</p>
<p className='text-4xl font-mono text-center'><button className='bg-green-500 w-1/3 rounded text-white text-4xl'>+</button></p>
</div>

    </>
    )
})}




</div>



</>
)
}
