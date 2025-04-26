import React from 'react'
import {Container,Row} from 'react-bootstrap'
export default function Header() {
  return (

    <Container className='p-5 bg-white mt-5 w-50 mx-auto'>
    <Row>
        <div className='col-md-6 fs-5'>Call Us (+9173357217)</div>
        <div className='col-md-6'>
            <button type='button' className='btn btn-sm btn-danger float-end'>Totals Task(0)</button>
        </div>
    </Row>  
    </Container>
  )
}
