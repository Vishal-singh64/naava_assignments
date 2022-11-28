
import React from 'react'
import {Container,Col,Row,Button} from 'react-bootstrap'
import Card from './Components/Card'
import NavBar from './Components/NavBar';
import {Link} from 'react-router-dom'
import './style/DashboardStyle.css';

export default function Dashboard() {
  return (
    

    <Container fluid>
    <Row>
      <Col className='col-2 bg-success'>
          <NavBar />
      </Col>

      <Col   className='MainScr col-10'>
          <h4 className="mt-5">Dashboard</h4>  
          <Row>
              <Col className='SearchMenu'>
                <input className='col-3' placeholder='Batch No.'/>
                <input className='col-3' placeholder='Name'/>
                <input className='col-3' placeholder='Designation'/>
                <Button id='SearchBtn' className='col-2 bg-success'>Search</Button>
              </Col>
          </Row>
        
          <Row>
            
              <Col><Link to="/Student" className='CardNav'><Card count="1000+" desc="Total Re0gistered Students"/></Link></Col>
              <Col><Link to="/Request" className='CardNav'><Card count="6" desc="Request Pending"/></Link></Col>
              <Col><Link to="/CA" className='CardNav'><Card count="500+" desc="CA"/></Link></Col>
            
          </Row>
          <Row>
              
              <Col><Link to="/Lawyer" className='CardNav'><Card count="500+" desc="Lawyers"/></Link></Col>
              <Col><Link to="/Doctor" className='CardNav'><Card count="100+" desc="Doctors"/></Link></Col>
              <Col><Link to="/Doctor" className='CardNav'><Card count="100+" desc="Doctors"/></Link></Col>
              
          </Row>
      </Col> 
    </Row>

    </Container>
    
  )
}
