import React from 'react';
import ProjectCard from 'src/components/projectCard';
import { projectData } from 'src/config/projectData';
import { useNavigate } from "react-router-dom";
const ProjectList = () => {
    const navigate = useNavigate();
    return <div className='projects-section'>
        <div className='container'>
            <div className='project-container row'>
                { projectData.map((item, index) => (
                    <div className='card-row' key={index} onClick = { () => {navigate(`/project/${index}`)}}>
                        <ProjectCard data={item} />
                    </div>
                )
                )}
            </div>
        </div>
    </div>
}

export default ProjectList;