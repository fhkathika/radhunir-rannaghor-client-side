import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
const NavBaar = () => {
  const {user,LogOut}=useAuth()
    return (
      <>
    
      <Navbar  collapseOnSelect expand="lg" variant="light" style={{backgroundColor:'firebrick' , padding:'10px'}}>
        <Container>
        <Navbar.Brand as={Link} style={{color:'white' , padding:'5px'}}  to="#home"> <h3> Radhunir Rannaghor
          </h3></Navbar.Brand>
       

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
        <Nav  className="me-auto">
          <Nav.Link as={Link}style={{color:'wheat' , padding:'10px'}}  to="/home">Home</Nav.Link>
          {/* Add New Service */}
           <Nav.Link as={Link} style={{color:'wheat' , padding:'10px'}}  to="/addnewservice">Add New Service</Nav.Link>
         
          {/* My Order */}
           <Nav.Link as={Link} style={{color:'wheat' , padding:'10px'}}  to="/myorder">My Order</Nav.Link>
         
          {/* Manage All Order */}
           <Nav.Link as={Link} style={{color:'wheat' , padding:'10px'}}  to="/manageallorder">Manage All Order</Nav.Link>
         
  {/* login */}
  {
            user?.email?<Nav.Link onClick={LogOut} style={{color:'wheat' , padding:'10px'}}>Log Out</Nav.Link>
          :
          <Nav.Link as={Link} style={{color:'wheat' , padding:'10px'}} to="/login">Log In</Nav.Link>
          }

          
        </Nav>
        </Navbar.Collapse >
      
      <Navbar.Text  >
        Signed in as: <a  style={{color:'wheat'}} href="#login">{user?.displayName}</a>
      </Navbar.Text>
 
        </Container>
      </Navbar>
    
    
    
    </>
   
    );
};

export default NavBaar;