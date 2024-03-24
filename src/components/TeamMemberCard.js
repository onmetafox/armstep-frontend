import React from 'react';
import upworkImg from "../assets/images/upwork.svg";
import linkedinImg from "../assets/images/linkedin.svg";
import contraImg from "../assets/images/contra.svg";
import getCompletedURL from "src/utils/getCompletedURL";

const TeamMemberCard = ({data}) => {
    return (
        <div className="wrapper">
            <img src={getCompletedURL(data.imgUrl)} alt="member-avatar" className="team-member-image" />
            <h3 className="team-member-name fs-s1">{data.name}</h3>
            <p className="team-member-role fs-c">{data.role}</p>
            <div className="social-links">
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="Linkedin" />
                </a>
                <a href={data.upwork} target="_blank" rel="noopener noreferrer">
                    <img src={upworkImg} alt="Upwork" />
                </a>
                <a href={data.contra} target="_blank" rel="noopener noreferrer">
                    <img src={contraImg} alt="Contra" />
                </a>
            </div>
        </div>
    );
};

export default TeamMemberCard;