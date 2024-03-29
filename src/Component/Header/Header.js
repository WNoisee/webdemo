import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'
import './App.scss'

const BasicExample = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand href="#">Home</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'>Home</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <NavLink to="/Home" className='nav-link'>Home</NavLink> */}
                        <NavLink to='/Guest' className='nav-link'>Guest</NavLink>
                        <NavLink to="/User" className='nav-link'>User</NavLink>
                        <NavLink to="/Admin" className='nav-link'>Admin</NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Item >Login</NavDropdown.Item>
                            <NavDropdown.Item >Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;