import React from 'react';
const AboutCard = ({ onClick, number, description, className }) => {
    return (
        <div className="about-card">
            <div className="fs-h1 home-title text-start">{number}</div>
            <div className='border'></div>
            <div className="fs-h5 color-white text-start">{description}</div>
        </div>
    );
};

export default AboutCard;