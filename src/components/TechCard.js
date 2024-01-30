import React from 'react';
import cx from "classnames";
const TechCard = ({data, className}) => {
    console.log(data);
    let classNames = cx( 'tech-card', className);
    return <div className={classNames}>
        <div className='tech-card-content m-2'>
            {/* <div className='fs-s1 color-white text-start'>{data.company}</div>
            <div className='fs-b2 color-white'>{data.review}</div>
            <div className='tech-card-user text-start'>
                { data.profile &&
                    <a href={data.profile} className='tech-card-link fs-c color-gray4' target='_blank'>
                        <img src={data.user}/>&nbsp;&nbsp;
                        {data.role} &nbsp;{data.name}
                    </a>
                }
                { !data.profile &&
                    <div className='tech-card-link fs-c color-gray4'>
                        <img src={data.user}/>&nbsp;&nbsp;
                        {data.role} &nbsp;{data.name}
                    </div>
                }
                
            </div> */}
            <div>
                {
                    data.map((item, index)=>(<div key={index}>{item.detail}</div>))
                }
            </div>
        </div>
    </div>
}

export default TechCard;