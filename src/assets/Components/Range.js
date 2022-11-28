import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import '../style/Range.css'
import { AiFillCaretDown,AiFillCaretUp } from 'react-icons/ai'

export default function Range() {
    const [Count, setCount] = useState(20)

    function increase() {
        setCount(Count+10)
    }

    function deccrease() {
        if(Count<=10){
            alert("Cannot set less than 10")
        }
        else{

            setCount(Count-10)
        }
    }
  return (
    <Row>
    <Col className='d-flex'>
        <Row>
            <Col className="Heading d-flex flex-column">Show</Col>
            <Col><input className="InputField" value={Count}/></Col>
            <Col className='d-flex flex-column controle'>
            <AiFillCaretUp onClick={()=>{increase()}}/>
            <AiFillCaretDown onClick={()=>{deccrease()}}/></Col>
            <Col className="Heading2">entries</Col>

        </Row>
    </Col>
   
    </Row>
  )
}
