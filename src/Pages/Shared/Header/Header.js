import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} height='50px' alt="logo" /></Navbar.Brand>
                    <Nav className="me-auto ">
                        <Nav.Link className="text-white " href="#home">Home</Nav.Link>
                        <Nav.Link className="text-white" href="#features">Services</Nav.Link>
                        <Nav.Link className="text-white" href="#pricing">Experts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>


    );
};

export default Header;