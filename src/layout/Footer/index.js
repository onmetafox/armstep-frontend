import React, { useState, useCallback, useEffect } from 'react';
import logo from '../../assets/images/commons/Logo.png';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                <img src={logo} alt="Armstep Logo" className="footer-logo" />
                <p className='footer-email'>armstep@development</p>
                <div className="social-icons d-flex">
                    {/* Replace with actual icons */}
                    <span><i class="fa-brands fa-github"></i></span>
                    <span><i class="fa-brands fa-x-twitter"></i></span>
                    <span><i class="fa-brands fa-upwork"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                </div>
                </div>
                <div className="footer-section d-flex">
                    <div className="footer-menu d-flex">
                        <div className="footer-category">
                            <h4>Home</h4>
                            <div className="d-flex">
                                <div className="sub-menu">Services</div>
                                <div className="sub-menu">Projects</div>
                                <div className="sub-menu">Industries</div>
                                <div className="sub-menu">Comments</div>
                            </div>
                        </div>
                        <div className="footer-category">
                            <h4>Services</h4>
                            <div className="d-flex">
                                <div className="sub-menu">Web</div>
                                <div className="sub-menu">Mobile</div>
                                <div className="sub-menu">Blockchain</div>
                                <div className="sub-menu">AI && ML</div>
                            </div>
                        </div>
                        <div className="footer-category">
                            <h4>Portfolio</h4>
                            <div className="d-flex">
                                <div className="sub-menu">Graviton</div>
                                <div className="sub-menu">demoverse</div>
                                <div className="sub-menu">slash.digital</div>
                                <div className="sub-menu">tribeone</div>
                                <div className="sub-menu">serenityshield</div>
                            </div>
                        </div>
                        <div className="footer-category">
                            <h4>About</h4>
                            <div className="d-flex">
                                <div className="sub-menu">About</div>
                                <div className="sub-menu">Core Team</div>
                            </div>
                        </div>
                        <div className="footer-category">
                            <h4>Legal</h4>
                            <div className="d-flex">
                                <div className="sub-menu">Privacy & Policy</div>
                                <div className="sub-menu">Terms & Condition</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©2024 Armstep. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;