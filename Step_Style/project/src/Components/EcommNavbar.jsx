import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const EcommNavbar = () => {
  return (
    <Navbar  expand="lg" style={{ background:'#e2eafc', padding:'5px'}}>
      <Container>
        <Navbar.Brand href="#home">STEP & STYLE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-dark ">
            <Nav.Link href="#home" className='text-bold'>Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sneakers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Boots</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sandals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Formal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
           
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Signup</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
              
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EcommNavbar;
