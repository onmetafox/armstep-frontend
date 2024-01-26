import React from 'react';
import cx from "classnames";
const ReviewCard = ({data, className}) => {
    let classNames = cx( 'review-card', className);
    return <div className={classNames}>
        <div className='review-card-image'>
            <img src={data.logo} alt='logo'/>
        </div>
        <div className='review-card-content m-2'>
            <div className='fs-s1 color-white text-start'>{data.company}</div>
            <div className='fs-b2 color-white'>{data.review}</div>
            <div className='review-card-user text-start'>
                { data.profile &&
                    <a href={data.profile} className='review-card-link fs-c color-gray4' target='_blank' rel="noreferrer">
                        <img src={data.user} alt='user avatar'/>&nbsp;&nbsp;
                        {data.role} &nbsp;{data.name}
                    </a>
                }
                { !data.profile &&
                    <div className='review-card-link fs-c color-gray4'>
                        <img src={data.user} alt='user avatar'/>&nbsp;&nbsp;
                        {data.role} &nbsp;{data.name}
                    </div>
                }
                
            </div>
        </div>
    </div>
}

export default ReviewCard;