import React, { useState } from 'react';
import '../../styles/pages/talkus.scss';

const services = ["Web", "Mobile", "Blockchain", "AI and Machine Learning"];
const techStacks = ["Web", "Mobile", "Blockchain", "AI and Machine Learning"];

const TalkToUs = () => {

  return (
    <section className="talk-to-us-section color-white">
      <h1 className="fs-h1 section-title">Start a Project with us</h1>
      <div className="form-wrapper">
        <div className="contact-form-body">
          <div className="contact-form-section">
            <h5 className="fs-b">Your contacts</h5>
            <div className="form-body-wrapper your-contacts">
              <input type="text" placeholder="Your name" className="contact-form-input" />
              <input type="tel" placeholder="Phone" className="contact-form-input" />
              <input type="email" placeholder="Email" className="contact-form-input" />
            </div>
          </div>
          <div className="contact-form-section">
            <h5 className="fs-b">About your project</h5>
            <div className="form-body-wrapper your-project">
              <select className="contact-form-dropdown">
                <option disabled hidden>Choose from our services</option>
                {services.map(service => (
                  <option>{service}</option>
                ))}
              </select>
              <select className="contact-form-dropdown">
                <option disabled hidden>Choose from our technology stack</option>
                {techStacks.map(stack => (
                  <option>{stack}</option>
                ))}
              </select>
              <textarea placeholder="Tell us a little about your project" className="contact-form-textarea"></textarea>
            </div>
          </div>
        </div>
        <div className="contact-form-footer">
          <p className="terms-text">
            By clicking this button you accept <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </p>
          <button className="send-button">Send</button>
        </div>
      </div>
    </section>
  );
};

export default TalkToUs;