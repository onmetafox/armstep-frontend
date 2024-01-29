import React from 'react';
import CommonBtn from 'src/components/button/CommonBtn';
import ProjectCard from 'src/components/projectCard';
import { projectData } from 'src/config/projectData';
const Project = () => {
    return <div className='project-section'>
        <div className='container'>
            <div className='d-flex'>
                <div className='project-detail'>
                    <div className='fs-h2 color-white m-2'>Projects</div>
                    <div className='fs-s1 color-white m-2'>As a seasoned creator of contemporary, user-<br></br>friendly web designs and digital solutions, I aim <br></br>to assist you in constructing the brand of your fantasies.</div>
                </div>
                <div className='text-end project-all'>
                    <CommonBtn title={"See all"} className={"color-white"}/>
                </div>
            </div>
            <div className='project-container row'>
                { projectData.map((item, index) => (
                    Number(index) <= Number(3) && (
                        <div className='card-row' key={index}>
                            <ProjectCard data={item} />
                        </div>
                    )
                )
                )}
            </div>
        </div>
    </div>
}

export default Project;