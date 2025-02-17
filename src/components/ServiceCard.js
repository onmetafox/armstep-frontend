import React from 'react';
import cx from "classnames";
import rightArrow from "../assets/images/right-arrow.svg"
import { Link } from "react-router-dom";

import getCompletedURL from "src/utils/getCompletedURL";

const ServiceCard = ({data, className, index, landing}) => {
    let classNames = cx( 'service-card', className);
    return <div className={classNames}>
        <div className='service-card-image'>
            <img src={getCompletedURL(data.icon)} alt='logo'/>
        </div>
        <div className='service-card-content'>
            <div className='fs-h5 color-white m-3'>{data.subtitle}</div>
            {landing===true?<div className='fs-b color-white m-3'>{data.subcontent}</div>:<div className='fs-b color-white m-3'>{data.intro}</div>}
        </div>
        <div className='service-card-right'><Link to = {`/service/${data._id}` }><img src={rightArrow} alt="right arrow"style={{width:"26px"}}/></Link></div>
    </div>
}

export default ServiceCard;