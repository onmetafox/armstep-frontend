import React, { useState, useCallback, useEffect } from 'react';
import logo from '../../assets/images/commons/Logo.png';

const Footer = () => {

  return (
    <footer className="footer">
      <div className='container'>
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo-wrapper">
              <img src={logo} alt="Armstep Logo" className="footer-logo" />
            </div>
            <div className="wrapper">
              <p className='footer-email'>armstep@development</p>
              <div className="social-icons d-flex">
                {/* Replace with actual icons */}
                <a href='#'><i class="fa-brands fa-github"></i></a>
                <a href='#'><i class="fa-brands fa-x-twitter"></i></a>
                <a href='#'><i class="fa-brands fa-upwork"></i></a>
                <a href='#'><i class="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-section d-flex">
            <div className="footer-menu d-flex">
              <div className="footer-category">
                <a href='/' className='fs-button'>Home</a>
                <div className="d-flex">
                  <a href='#' className="sub-menu">Services</a>
                  <a href='#' className="sub-menu">Projects</a>
                  <a href='#' className="sub-menu">Industries</a>
                  <a href='#' className="sub-menu">Testimonials</a>
                </div>
              </div>
              <div className="footer-category">
                <a href='/services' className='fs-button'>Services</a>
                <div className="d-flex">
                  <a href='/service/0' className="sub-menu">Web</a>
                  <a href='/service/1' className="sub-menu">Mobile</a>
                  <a href='/service/2' className="sub-menu">Blockchain</a>
                  <a href='/service/3' className="sub-menu">AI && ML</a>
                </div>
              </div>
              <div className="footer-category">
                <a href='/portfolio' className='fs-button'>Portfolio</a>
                <div className="d-flex">
                  <a href='#' className="sub-menu">Graviton</a>
                  <a href='#' className="sub-menu">demoverse</a>
                  <a href='#' className="sub-menu">slash.digital</a>
                  <a href='#' className="sub-menu">tribeone</a>
                  <a href='#' className="sub-menu">serenityshield</a>
                </div>
              </div>
              <div className="footer-category">
                <a href='/about-us' className='fs-button'>About</a>
                <div className="d-flex">
                  <a href='/about-us' className="sub-menu">About</a>
                  <a href='/team' className="sub-menu">Core Team</a>
                </div>
              </div>
              <div className="footer-category">
                <a href='/legal' className='fs-button'>Legal</a>
                <div className="d-flex">
                  <a href='#' className="sub-menu">Privacy & Policy</a>
                  <a href='#' className="sub-menu">Terms & Condition</a>
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