import React from 'react'
import Header from './partials/Header'
import Navbar from './partials/Navbar'
const AddTask=()=> {
return (  
<>
<Header />
<Navbar />
{/* create a counter app */}
<div className='bg-white w-50 mx-auto p-5'>
<h1 className='fs-3'>Add Task</h1>
<p className='fs-5'>Lets add some to do app via redux / toolkit </p>
<form className='mt-2'>
<div className='input-group'>
    <input type='text' placeholder='Add here something for add in List *' className='form-control' />
    <button type='button' className='btn btn-sm btn-dark text-white w-25'><span className='bi bi-plus fs-4'></span></button>
</div>
</form>

</div>
</>
)
}

export default AddTask;