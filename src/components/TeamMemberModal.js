import React from 'react';
import upworkImg from "../assets/images/upwork.svg";
import contraImg from "../assets/images/contra.svg";
import linkedinImg from "../assets/images/linkedin.svg";
import closeModalImg from "../assets/images/x.svg";
import { addLineBreak } from 'src/libs/validate';
const TeamMemberModal = ({ isOpen, onClose, member }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <img src={closeModalImg} alt="Close" />
                </button>
                <div className="wrapper">
                    <img src={member.imgUrl} alt={member.name} className="modal-image" />
                    <div className="details">
                        <h3 className="fs-h4">{member.name}</h3>
                        <h4 className="fs-c">{member.role}</h4>
                        <div className="social-links">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <img src={linkedinImg} alt="Linkedin" />
                            </a>
                            <a href={member.upwork} target="_blank" rel="noopener noreferrer">
                                <img src={upworkImg} alt="Upwork" />
                            </a>
                            <a href={member.contra} target="_blank" rel="noopener noreferrer">
                                <img src={contraImg} alt="Contra" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="member-about-section">
                    <h5 className="fs-b">About</h5>
                    <p className="fs-c">{addLineBreak(member.about)}</p>
                </div>
                <hr></hr>
                <div className="technology-stack">
                    <h5 className="fs-b">Technology Stack</h5>
                    <div className="technology-stack-container">
                        {member.stacks.map((tech, index) => (
                            <div key={index} className="tech-item">
                                <img src={tech.icon} alt={tech.heading} />
                                <span className="fs-c">{tech.heading}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberModal;