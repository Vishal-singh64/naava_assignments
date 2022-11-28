import React from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import NavBar from './Components/NavBar'
import image from './Err.png'

export default function Requests() {
  return (
    <Container fluid>
    <Row>
      <Col className='col-2 bg-success'>
          <NavBar />
      </Col>
      
      <Col   className='MainScr col-10'>
          <h4 className="mt-5">Students</h4>  
          
            <img src={image} className='img-fluid' alt='logo' />
           
      </Col>
      </Row>
      </Container>
  )
}
