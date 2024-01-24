import React from 'react';
import Arrow from 'src/assets/images/commons/Nav Arrows.png'
const CommonCard = ({ onClick, img, title, content, className }) => {
    return (
        <div className="common-card">
        <div className="icon-container">
            <img src={`${img}`} alt="Card Image" className="card-img" />
        </div>
        <div className="content">
            <div className='fs-s1 color-white text-start'>{title}</div>
            <p>{content}</p>
            <div className="arrow-container">
                <img src={Arrow} alt="Arrow Image" className="arrow-img" />
            </div>
        </div>
        </div>
    );
};

export default CommonCard;