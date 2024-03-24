import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/menu.svg';
import closeMenuIcon from '../../assets/images/x.svg';
import TalkToUsButton from 'src/components/button/ActiveBtn';
import {allServices, servicesAsync} from "src/features/service/serviceSlice";
import {projectsAsync} from "src/features/project/projectSlice";

const Header = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const allServiceData = useSelector(allServices);

    useEffect(() => {
        dispatch(servicesAsync());
        dispatch(projectsAsync());
    }, [dispatch])
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();

    return (
        <Navbar variant="dark" expand="lg" className={`header-container navbar-a ${isOpen ? 'active' : ''}`}
                expanded={isOpen}>
            <Navbar.Brand as={Link} onClick={toggleNavbar} to="/" className='d-flex'>
                <img
                    src={logo}
                    className="d-inline-block align-top header-logo"
                    alt="Armstep Logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                <Nav className="mr-auto d-flex">
                    <Nav.Link as={Link} onClick={toggleNavbar} to="/">Home</Nav.Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} onClick={toggleNavbar} to="/services">All
                            Services</NavDropdown.Item>
                        {allServiceData && allServiceData.map((item, key) => (
                            <NavDropdown.Item key={key} as={Link} onClick={toggleNavbar}
                                              to={`/service/${item._id}`}>{item.title}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <Nav.Link as={Link} onClick={toggleNavbar} to="/projects">Portfolio</Nav.Link>
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} onClick={toggleNavbar} to="/about-us">About us</NavDropdown.Item>
                        <NavDropdown.Item as={Link} onClick={toggleNavbar} to="/team">Core team</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Nav className='mobile-toggle-wrapper'>
                <TalkToUsButton onClick={() => {
                    toggleNavbar();
                    navigate("/talk-to-us")
                }}/>
                <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav">
                    {isOpen ? (
                        <img src={closeMenuIcon} alt='Close'/>
                    ) : (
                        <img src={menuIcon} alt='Open'/>
                    )}
                </Navbar.Toggle>
            </Nav>
        </Navbar>
    );
};

export default Header;