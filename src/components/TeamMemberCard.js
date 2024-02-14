import React from 'react';
import upworkImg from "../assets/images/upwork.svg";
import linkedinImg from "../assets/images/linkedin.svg";
import contraImg from "../assets/images/contra.svg";
const TeamMemberCard = ({ name, role, imgUrl, upwork, linkedin, contra }) => {
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
                    <img src={upworkImg} alt="Upwork" />
                </a>
                <a href={contra} target="_blank" rel="noopener noreferrer">
                    <img src={contraImg} alt="Contra" />
                </a>
            </div>
        </div>
    );
};

export default TeamMemberCard;