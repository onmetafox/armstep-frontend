import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/commons/Logo.png';
import menuIcon from '../../assets/images/menu.svg';
import closeMenuIcon from '../../assets/images/x.svg';
import TalkToUsButton from 'src/components/button/ActiveBtn';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar variant="dark" expand="lg" className={`header-container navbar-a ${isOpen ? 'active' : ''}`}>
      <Navbar.Brand href="#home" className='d-flex'>
        <img
          src={logo}
          className="d-inline-block align-top header-logo"
          alt="Armstep Logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
        <Nav className="mr-auto d-flex">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">All Services</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Web</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Mobile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Blockchain</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">AI and ML</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about-us">About us</NavDropdown.Item>
            <NavDropdown.Item href="/team">Core team</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Nav className='mobile-toggle-wrapper'>
        <TalkToUsButton />
        <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav">
          {isOpen ? (
            <img src={closeMenuIcon} alt='Close' />
          ) : (
            <img src={menuIcon} alt='Open' />
          )}
        </Navbar.Toggle>
      </Nav>
    </Navbar>
  );
};

export default Header;