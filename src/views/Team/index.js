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
    role: 'CEO and Founder',
    imgUrl: armanImg,
    upwork: '/upwork',
    linkedin: '/linkedin',
    about: "Meet Arman, the CEO and Founder of our esteemed agency, where we turn ambitious ideas into digital realities. With a rich history of partnering with over 50 diverse clients, his journey in the tech industry has been marked by a relentless pursuit of excellence and innovation. Before establishing our agency, he navigated through the tech realm as a Lead Developer and senior executive in more than 10 companies, each with a valuation ranging from $10 million to $100 million. This extensive experience has not only honed my technical expertise in Web, Mobile, Blockchain, and AI Development but also instilled in him a deep understanding of the multifaceted needs of small to mid-sized businesses.",
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
    role: 'CTO and Co-Founder',
    imgUrl: samImg,
    upwork: '/upwork',
    linkedin: '/linkedin',
    about: "Meet Samvel, the mastermind behind our cutting-edge technological solutions and the Co-Founder of our agency. With a remarkable track record of working with over 35 clients, Samvel's expertise is the cornerstone of our success in delivering exceptional digital solutions. As our CTO, Samvel embodies the perfect blend of technical prowess and leadership excellence. He is dedicated to fostering a culture of innovation and precision, ensuring that every project we undertake is a testament to our commitment to quality and ingenuity.",
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
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="Linkedin" />
        </a>
        <a href={upwork} target="_blank" rel="noopener noreferrer">
          <img src={upworkImg} alt="Linkedin" />
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
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt="Linkedin" />
              </a>
              <a href={member.upwork} target="_blank" rel="noopener noreferrer">
                <img src={upworkImg} alt="Linkedin" />
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