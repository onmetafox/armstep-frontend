import React from 'react';
import cx from "classnames";

const ServiceCard = ({data, className}) => {
    let classNames = cx( 'service-card', className);
    return <div className={classNames}>
        <div className='service-card-image'>
            <img src={data.logo} alt='logo'/>
        </div>
        <div className='service-card-content'>
            <div className='fs-h5 color-white m-3'>{data.subtitle}</div>
            <div className='fs-b1 color-white m-3'>{data.intro}</div>
        </div>
    </div>
}

export default ServiceCard;