import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const MyNavbar = () =>{


    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">first-app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             
                <li><NavLink className="nav-link" to='/' >Home</NavLink></li>
                <li><NavLink className="nav-link" to='/about'>About</NavLink></li>
                <li><NavLink className="nav-link" to='/movies'>Movies</NavLink></li>
                <li><NavLink className="nav-link" to='/login'>Login</NavLink></li>
                <li><NavLink className="nav-link" to='/hooks'>Hooks</NavLink></li>
                <li><NavLink className="nav-link" to='/api'>Api</NavLink></li>
                <li><NavLink className="nav-link" to='*'></NavLink></li>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}

export default MyNavbar ;