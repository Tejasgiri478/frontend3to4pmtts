import React from 'react'
import Header from './partials/Header'
import Navbar from './partials/Navbar'
import { connect } from 'react-redux'

const CounterApp=({count,increment,decrement})=> {
return (  
<>
<Header />
<Navbar />
{/* create a counter app */}
<div className='bg-white w-50 mx-auto p-5'>
<h1 className='fs-3'>Counter App</h1>
<p className='fs-5'>Lets load counter app</p>

<div className='p-3'>
    <h3>The count initial state values is : {count}</h3>
    <h3><button type='button' className='btn btn-sm btn-success fs-5' onClick={increment}>+</button>
    <button type='button' className='btn btn-sm btn-danger fs-5 ms-3' onClick={decrement}>-</button></h3>
</div>
</div>
</>
)
}

const mapStateToProps=state=>({
    count:state.count

})

const mapDispatchToProps=dispatch=>({

    increment:()=>dispatch({type:'INCREMENT'}),
    decrement:()=>dispatch({type:'DECREMENT'}),
})

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);
