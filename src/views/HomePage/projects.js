import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import CommonBtn from 'src/components/button/CommonBtn';
import ProjectCard from 'src/components/projectCard';
import {allProjects} from "src/features/project/projectSlice";

const Project = () => {
    const navigate = useNavigate();
    const allProjectData = useSelector(allProjects);

    return <div className='project-section' id='project'>
        <div className='container'>
            <div className='d-flex'>
                <div className='project-detail'>
                    <div className='fs-h2 color-white m-4 text-start'>Projects</div>
                    <div className='fs-s1 color-white m-4 lh-base text-start'>As a seasoned creator of contemporary,
                        user-friendly web designs and digital solutions, I aim to assist you in constructing the brand
                        of your fantasies.
                    </div>
                </div>
                <div className='project-all'>
                    <CommonBtn title={"See all"} className={"color-white"} onClick={() => {
                        navigate("/projects")
                    }}/>
                </div>
            </div>
            <div className='project-container row m-3'>
                {allProjectData && allProjectData.slice(0, 4).map((item, index) => (
                        <div className='card-row' key={index} onClick={() => {
                            navigate(`/project/${item._id}`)
                        }}>
                            <ProjectCard data={item}/>
                        </div>
                    )
                )}
            </div>
        </div>
    </div>
}

export default Project;