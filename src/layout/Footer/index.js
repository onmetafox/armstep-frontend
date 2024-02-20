import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Footer = () => {

  return (
    <footer className="footer">
      <div className='container'>
        <div className="footer-content">
          <div className="footer-section">
            <Link to='/' className="footer-logo-wrapper">
              <img src={logo} alt="Armstep Logo" className="footer-logo" />
            </Link>
            <div className="wrapper">
              <p className='footer-email'>armstep@development</p>
              <div className="social-icons d-flex">
                {/* Replace with actual icons */}
                <Link to='#'><i className="fa-brands fa-github"></i></Link>
                <Link to='#'><i className="fa-brands fa-twitter"></i></Link>
                <Link to='#'><i className="fa-brands fa-upwork"></i></Link>
                <Link to='#'><i className="fa-brands fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
          <div className="footer-section d-flex">
            <div className="footer-menu d-flex">
              <div className="footer-category">
                <Link to='/' className='fs-button'>Home</Link>
                <div className="d-flex">
                  <Link to='/home#service' className="sub-menu">Services</Link>
                  <Link to='/home#project' className="sub-menu">Projects</Link>
                  <Link to='/home#industry' className="sub-menu">Industries</Link>
                  <Link to='/home' className="sub-menu">Testimonials</Link>
                </div>
              </div>
              <div className="footer-category">
                <Link to='/services' className='fs-button'>Services</Link>
                <div className="d-flex">
                  <Link to='/service/0' className="sub-menu">Web</Link>
                  <Link to='/service/1' className="sub-menu">Mobile</Link>
                  <Link to='/service/2' className="sub-menu">Blockchain</Link>
                  <Link to='/service/3' className="sub-menu">AI && ML</Link>
                </div>
              </div>
              <div className="footer-category">
                <Link to='/projects' className='fs-button'>Portfolio</Link>
                <div className="d-flex">
                  <Link to='/project/0' className="sub-menu">Graviton</Link>
                  <Link to='/project/1' className="sub-menu">Demoverse</Link>
                  <Link to='/project/2' className="sub-menu">Slash.digital</Link>
                  <Link to='/project/3' className="sub-menu">Tribeone</Link>
                  <Link to='/project/4' className="sub-menu">Serenityshield</Link>
                </div>
              </div>
              <div className="footer-category">
                <Link to='/about-us' className='fs-button'>About</Link>
                <div className="d-flex">
                  <Link to='/about-us' className="sub-menu">About</Link>
                  <Link to='/team' className="sub-menu">Core Team</Link>
                </div>
              </div>
              <div className="footer-category">
                <Link to='/legal' className='fs-button'>Legal</Link>
                <div className="d-flex">
                  <Link to='/privacy' className="sub-menu">Privacy & Policy</Link>
                  <Link to='/terms' className="sub-menu">Terms & Condition</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className='fs-c'>©2024 Armstep. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;