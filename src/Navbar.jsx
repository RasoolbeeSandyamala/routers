import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Navbarcomponent = () => {
  return (
    <div className='container'>
      
       <Navbar expand="lg" className=" mb-3 mt-3">
      <Container>
      <Navbar.Brand href="/" style={{color:"orangered",fontWeight:"bold",fontSize:"25px"}}><img src='logo.png' width={80} className='border border-3 border-primary rounded-circle shadow' ></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className='link1  fw-bold fs-4 me-5' id='active' href="/menu">Menu</Nav.Link>
            <Nav.Link className='link1 text-dark fw-bold fs-4 me-5'  href="/location">Location</Nav.Link>
            <Nav.Link className='link1 text-dark fw-bold fs-4 me-5'  href="/about">About</Nav.Link>
            <Nav.Link  className='link1 text-dark fw-bold fs-4 me-5' href="/contact">contact</Nav.Link>
           
          </Nav>
         
         
          <Button variant="danger" className='my-2 px-4'>login</Button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>
  );
}

export default Navbarcomponent;
