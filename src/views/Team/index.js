import React, { useState } from 'react';
import '../../styles/pages/team.scss';
import upworkImg from "../../assets/images/upwork.svg";
import linkedinImg from "../../assets/images/linkedin.svg";
import closeModalBtn from "../../assets/images/x.svg"
// from database
import armanImg from "../../assets/images/team/arman.png";
import samImg from "../../assets/images/team/sam.png";
import tensorFlow from "../../assets/images/team/TensorFlow.svg";
import pyTorch from "../../assets/images/team/PyTorch.svg";
import scikitLearn from "../../assets/images/team/Scikit-Learn.svg";
import openCV from "../../assets/images/team/OpenCV.svg";


const teamMembers = [
  {
    name: 'Arman',
    role: 'Blockchain & NFT Development',
    imgUrl: armanImg,
    upwork: '/upwork',
    linkedin: '/linkedin',
    about: 'As a full-stack Web3 and Blockchain developer, I have over 6 years of experience in developing end-to-end software solutions. I am proficient in several programming languages including JavaScript, Python, Solidity, and Java. My experience with front-end frameworks includes React,js and I am skilled in back-end development using Node.js, Django, and Flask.',
    stacks: [
      {
        icon: tensorFlow,
        heading: 'TensorFlow'
      },
      {
        icon: pyTorch,
        heading: 'Scikit-Learn'
      },
      {
        icon: scikitLearn,
        heading: 'Scikit-Learn'
      },
      {
        icon: openCV,
        heading: 'OpenCV'
      }
    ]
  },
  {
    name: 'Sam',
    role: 'Blockchain & NFT Development',
    imgUrl: samImg,
    upwork: '/upwork',
    linkedin: '/linkedin',
    about: 'As a full-stack Web3 and Blockchain developer, I have over 6 years of experience in developing end-to-end software solutions. I am proficient in several programming languages including JavaScript, Python, Solidity, and Java. My experience with front-end frameworks includes React,js and I am skilled in back-end development using Node.js, Django, and Flask.',
    stacks: [
      {
        icon: tensorFlow,
        heading: 'TensorFlow'
      },
      {
        icon: pyTorch,
        heading: 'Scikit-Learn'
      },
      {
        icon: scikitLearn,
        heading: 'Scikit-Learn'
      },
      {
        icon: openCV,
        heading: 'OpenCV'
      }
    ]
  }
];

const TeamMemberCard = ({ name, role, imgUrl, upwork, linkedin }) => {
  return (
    <div className="wrapper">
      <img src={imgUrl} alt={name} className="team-member-image" />
      <h3 className="team-member-name fs-s1">{name}</h3>
      <p className="team-member-role fs-c">{role}</p>
      <div className="social-links">
        <a href={upwork} target="_blank" rel="noopener noreferrer">
          <img src={upworkImg} alt="Linkedin" />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
};

const TeamMemberModal = ({ isOpen, onClose, member }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <img src={closeModalBtn} alt="Close" />
        </button>
        <div className="wrapper">
          <img src={member.imgUrl} alt={member.name} className="modal-image" />
          <div className="details">
            <h3 className="fs-h4">{member.name}</h3>
            <h4 className="fs-c">{member.role}</h4>
            <div className="social-links">
              <a href={member.upwork} target="_blank" rel="noopener noreferrer">
                <img src={upworkImg} alt="Linkedin" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="member-about-section">
          <h5 className="fs-b">About</h5>
          <p className="fs-c">{member.about}</p>
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

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = member => {
    document.body.classList.add('modal-open');
    setSelectedMember(member);
  };

  const closeModal = () => {
    document.body.classList.remove('modal-open');
    setSelectedMember(null);
  };

  return (
    <section className="core-team-section color-white">
      <h1 className="fs-h1 section-title">Core Team</h1>
      <div className="team-members-container">
        {teamMembers.map(member => (
          <div className="team-member-card" onClick={() => handleCardClick(member)} key={member.name}>
            <TeamMemberCard {...member} />
          </div>
        ))}
      </div>
      <TeamMemberModal
        isOpen={!!selectedMember}
        onClose={closeModal}
        member={selectedMember || {}}
      />
    </section>
  );
};

export default Team;