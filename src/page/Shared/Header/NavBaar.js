import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
const NavBaar = () => {
  const {user,LogOut}=useAuth()
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/manageallorder">Manage All Order</Nav.Link>
            <Nav.Link as={Link} to="/myorder">My Order</Nav.Link>
          <Nav.Link as={Link} to="/addnewservice">Add New Service</Nav.Link>
          {
            user?.email?
            
            <button onClick={LogOut}>Log Out</button>

          :
          <Nav.Link as={Link} to="/login">Log In</Nav.Link>
          }
          
        </Nav>
        <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
        </Container>
      </Navbar>
      
    
    
    </>
   
    );
};

export default NavBaar;