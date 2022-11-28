import React from 'react'
import '../style/DashboardStyle.css'

import Nav from 'react-bootstrap/Nav';
import image from '../Naava.png'
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {AiOutlineHome,AiOutlinePhone} from 'react-icons/ai'
import {BsCheck2Square} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import User from  '../Components/User'


export default function NavBar() {
  return (
   
          
       <Navbar expand="lg" className="flex-column SideNavstyle" id="SideNavstyle">
      
        <Navbar.Brand href="#home">
        <img src={image} className='img-fluid logo' alt='logo' />
        </Navbar.Brand>
        
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
        <User/>

            <Nav.Link as={Link} to="/" ><AiOutlineHome/>   DashBoard</Nav.Link>
            <Nav.Link as={Link} to="/Approvals"><BsCheck2Square/>  Approvals</Nav.Link>
            <Nav.Link as={Link} to="/ContactUs"><AiOutlinePhone/>  Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/Member"><FiUsers/>  Members</Nav.Link>
{/* 
            <Nav.Link><AiOutlineHome/>   DashBoard</Nav.Link>
            <Nav.Link><BsCheck2Square/>  Approvals</Nav.Link>
            <Nav.Link><AiOutlinePhone/>  Contact Us</Nav.Link>
            <Nav.Link><FiUsers/>  Members</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
    
    </Navbar> 
          


  )
}
