import React from 'react';
import ProjectCard from 'src/components/projectCard';
import { projectData } from 'src/config/projectData';
import { useNavigate } from "react-router-dom";
import "../../styles/pages/projectlist.scss";
const ProjectList = () => {
    const navigate = useNavigate();
    return <div className='project-list'>
        <div className='container'>
            <div className='fs-h1 color-white'>Projects</div>
            <div className='color-white fs-s1'>We excel in delivering diverse projects</div>
            <div className='project-container row'>
                { projectData.map((item, index) => (
                    <div className='card-row' key={index} onClick = { () => {navigate(`/project/${index}`)}}>
                        <ProjectCard data={item} key={index}/>
                    </div>
                )
                )}
            </div>
        </div>
    </div>
}

export default ProjectList;