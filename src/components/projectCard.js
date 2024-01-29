import React from 'react';
import cx from "classnames";
const ProjectCard = ({data, className}) => {
    let classNames = cx( 'project-card', className);
    return <div className={classNames}>
        <div className='project-card-image'>
            <img src={data.thumb} alt='logo'/>
        </div>
        <div className='project-card-content'>
            <div className='fs-h5 color-white mt-3'>{data.title}</div>
            <div className='fs-b1 color-white mt-2'>{data.industry}</div>
        </div>
    </div>
}

export default ProjectCard;