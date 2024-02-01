import React, { useState } from 'react';
import SelectBox from 'src/components/SelectBox';
import TalkSuccessModal from 'src/components/TalkSuccessModal';
import { contactData } from 'src/config/contactData';
import arrowImg from "../../assets/images/arrow.svg";
import '../../styles/pages/talkus.scss';

const TalkToUs = () => {

  const [selectedProjectSize, setSelectedProjectSize] = useState("");

  const changeProjectSize = (projectSize) => {
    setSelectedProjectSize(projectSize)
  }

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSendData = () => {
    document.body.classList.add('modal-open');
    setIsSuccess(true);
  };

  const closeModal = () => {
    document.body.classList.remove('modal-open');
    setIsSuccess(false);
  };

  return (
    <section className="talk-to-us-section color-white">
      <h1 className="fs-h1 section-title">Start a Project with us</h1>
      <div className="form-wrapper">
        <div className="contact-form-body">
          <div className="contact-form-section">
            <h5 className="fs-b">Your contacts</h5>
            <div className="form-body-wrapper your-contacts">
              <input type="text" placeholder="Your name" className="contact-form-input fs-b" />
              <input type="tel" placeholder="Phone" className="contact-form-input fs-b" />
              <input type="email" placeholder="Email" className="contact-form-input fs-b" />
            </div>
          </div>
          <div className="contact-form-section">
            <h5 className="fs-b">About your project</h5>
            <div className="form-body-wrapper your-project">
              <div className="project-sizes">
                <p className="fs-c">Size of project</p>
                <div className="project-sizes-wrapper">
                  {contactData.projectSizes.map(projectSize => (
                    <p key={projectSize} onClick={() => changeProjectSize(projectSize)} className={`fs-c ${projectSize === selectedProjectSize ? 'active' : ''}`}>{projectSize}</p>
                  ))}
                </div>
              </div>
              <SelectBox
                options={contactData.services}
                className="contact-form-dropdown fs-b"
                placeholder="Choose from our services"
              />
              <SelectBox
                options={contactData.techStacks}
                className="contact-form-dropdown fs-b"
                placeholder="Choose from our technology stack"
              />
              <textarea placeholder="Tell us a little about your project" className="contact-form-textarea"></textarea>
            </div>
          </div>
        </div>
        <div className="contact-form-footer">
          <p className="terms-text fs-c">
            By clicking this button you accept <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </p>
          <button className="active-btn" onClick={() => handleSendData()}>
            Send <span className="arrow"><img src={arrowImg} /></span>
          </button>
        </div>
      </div>
      <TalkSuccessModal
        isOpen={!!isSuccess}
        onClose={closeModal}
      />
    </section>
  );
};

export default TalkToUs;