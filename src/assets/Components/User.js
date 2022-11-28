import React from 'react'
import '../style/UserStyle.css'
import {CgProfile} from 'react-icons/cg'
import {AiFillCaretDown} from 'react-icons/ai'
import { Row,Col } from 'react-bootstrap'


export default function User() {
  return (
    <Row>
    <Col>


    <hr style={{color:"white",width:"100%" }}/>
    <div className='UserCard'>
        <div className="UserLogo"><CgProfile size={38} color="lightgreen" /></div>
        <div className='NameArea'>
            <div className="ProfileName">Ashish Kumar</div>
            <div className='Position'>Admin</div>
        </div>
        <div className='UserAdd'><AiFillCaretDown color='white'/></div>
    </div>
    <hr/>
    </Col>
    </Row>
    
  )
}
