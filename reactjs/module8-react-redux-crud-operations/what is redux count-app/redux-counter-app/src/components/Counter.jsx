import React from 'react'

export default function Counter(props) {
  
    const {counter,increment,decrement,reset}=props;

    return (
    <div className='container p-5 mx-auto w-75'>
         <div className='text-center text-dark'><h1>{counter}</h1></div>
         <div className='text-center'>
         <button type='button' className='btn-sm btn-info' onClick={increment}><span className='bi bi-plus'></span></button>
         <button type='button' className='btn-sm btn-info' onClick={decrement}><span className='bi bi-subtract'></span></button>
         <button type='button' className='btn-sm btn-info' onClick={reset}><span className=''>Reset</span></button>

         </div>
    </div>
  )
}
