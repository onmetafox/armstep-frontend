import React, { useCallback, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/commons/Logo.png';
import TalkToUsButton from 'src/components/button/TalkToUsBtn';

const Header = () => {
    return (
      <Navbar variant="dark" expand="lg" sticky="top" className="header-container navbar-a">
        <Navbar.Brand href="#home" className='d-flex'>
            <img
                src={logo}
                className="d-inline-block align-top header-logo"
                alt="Armstep Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="mr-auto d-flex">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Service 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
            <TalkToUsButton />
        </Nav>
      </Navbar>
    );
  };

export default Header;