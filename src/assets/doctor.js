
import React from 'react'
import {Container,Col,Row,Button} from 'react-bootstrap'
import NavBar from './Components/NavBar';
import Range from './Components/Range';
import './style/DashboardStyle.css';
import tableData from './DummyData'


export default function Doctor() {

        
  return (
    <Container fluid>
    <Row>
        <Col className='col-2 bg-success'>
        <NavBar/>
        </Col>

        <Col className='MainScr'>
            <h4 className="m-4">Doctors</h4>
            <Row className="SearchMenu">
            <Col className="col-4"><Range/></Col>
              <Col >
                <Row>
                    <Col className="d-flex justify-content-end col-8">
                        <input className='w-50 h-100' placeholder='Search' />
                    </Col>  
                      
                    <Col>
                        <Button className='w-50 mp-4 bg-success'>Search</Button>
                    </Col> 
                </Row>
              </Col>
              {/* Table starts here */}
              <Row className='m-2'>
                <Col >

                      <Row className='mt-3 fw-bold'>
                        <Col>Name</Col>
                        <Col>Batch No</Col>
                        <Col>Location</Col>
                        <Col>Experience</Col>
                        <Col>Contact No</Col>
                        <hr/>
                      </Row>
                      
                      {tableData.map((e,index)=>(
                        <Row>
                        <Col className='fw-bold'>{e.Name}</Col>
                        <Col style={{color:"green"}}>{e.Batch}</Col>
                        <Col>{e.Location}</Col>
                        <Col>{e.Experience}</Col>
                        <Col style={{color:"green"}}>{e.Contact}</Col>
                        <hr/>
                      </Row>
                      ))}
                                               
                </Col>
              </Row>
            </Row>
            
        </Col>
    
    </Row>
    </Container>
  )
}
