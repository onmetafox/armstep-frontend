import React, { useState } from 'react';
import '../../styles/pages/talkus.scss';
import SelectBox from 'src/components/SelectBox';

const projectSizes = ["1-3 months", "3-6 months", "6-12 months"];
const services = [
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'ai-ml', label: 'AI and Machine Learning' },
];
const techStacks = [
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'ai-ml', label: 'AI and Machine Learning' },
];


const TalkToUs = () => {

  const [selectedProjectSize, setSelectedProjectSize] = useState("");

  const changeProjectSize = (projectSize) => {
    setSelectedProjectSize(projectSize)
  }

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
                  {projectSizes.map(projectSize => (
                    <p key={projectSize} onClick={() => changeProjectSize(projectSize)} className={`fs-c ${projectSize === selectedProjectSize ? 'active' : ''}`}>{projectSize}</p>
                  ))}
                </div>
              </div>
              <SelectBox
                options={services}
                className="contact-form-dropdown fs-b"
                placeholder="Choose from our services"
              />
              <SelectBox
                options={techStacks}
                className="contact-form-dropdown fs-b"
                placeholder="Choose from our technology stack"
              />
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