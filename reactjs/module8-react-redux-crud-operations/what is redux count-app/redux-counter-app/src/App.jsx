import React from 'react'
import Counter from './container/counterContainer'
export default function App() {
  return (
    <div className='counter mt-5 p-3 mx-auto shadow'>
      <h1 className='text-center'>Redux Counter App</h1>
      <Counter />
    </div>
  )
}
