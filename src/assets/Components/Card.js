import React from 'react'
import { Col,Row } from 'react-bootstrap'
import {AiOutlineUser} from 'react-icons/ai'
import '../style/CardStyle.css'
export default function Card(props) {
  return (
    <Row>
    <Col >

    <div className='CardBody'>
    <div className='User'><AiOutlineUser 
        size={24} color="green"/>
        </div>
        <div className='NameArea'>
            <div className='Count'>{props.count}</div>
            <div className='Description'>{props.desc}</div>
        </div>
    </div>
    </Col>
    </Row>
  )
}
