import React from 'react';
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import ProjectCard from 'src/components/projectCard';
import {allProjects} from "src/features/project/projectSlice";
import "../../styles/pages/projectlist.scss";

const ProjectList = () => {
    const navigate = useNavigate();
    const allProjectData = useSelector(allProjects);

    return <div className='project-list'>
        <div className='container'>
            <div className='fs-h1 color-white'>Projects</div>
            <div className='color-white fs-s1'>We excel in delivering diverse projects</div>
            <div className='project-container row'>
                { allProjectData && allProjectData.map((item, index) => (
                    <div className='card-row' key={index} onClick = { () => {navigate(`/project/${item._id}`)}}>
                        <ProjectCard data={item} key={index}/>
                    </div>
                )
                )}
            </div>
        </div>
    </div>
}

export default ProjectList;