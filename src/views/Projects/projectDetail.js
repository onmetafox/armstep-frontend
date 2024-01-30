import React, { useState } from "react";
import { projectData } from "src/config/projectData";
import { useParams } from 'react-router';
import "../../styles/pages/projectdetail.scss";
import StartUp from "../HomePage/startup";
import leftImg from "../../assets/images/left-side-effect.svg";
import CommonBtn from "src/components/button/CommonBtn";
const ProjectDetail = () => {
    const { id } = useParams();
    const [data] = useState(projectData[id]);

    const addLineBreak = (str) =>
        str.split('\n').map((subStr) => {
            return (
            <>
                {subStr}
                <br />
            </>
        );
    });
    return <div className="project-detail-section">
        <div className="title-section">
            <div className="detail-home container">
                <div className="color-white fs-h1 mt-160">{data.title}</div>
                <div className="detail-home-img"><img src = {data.img} alt ="main"/></div>
            </div>
        </div>
        <div className="content-section container mt-5">
            <img src={leftImg} alt="left side" className="left-side-effect"/>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 p-3">
                    <div className="color-gradi fs-h5 pt-2 pb-2 border-gradi">Services</div>
                    <div className="color-white fs-h5 mt-5">{data.services}</div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 p-3">
                    <div className="color-gradi fs-h5 pt-2 pb-2 border-gradi">Industry</div>
                    <div className="color-white fs-h5 mt-5">{data.industry}</div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 p-3">
                    <div className="color-gradi fs-h5 pt-2 pb-2 border-gradi">Platform</div>
                    <div className="color-white fs-h5 mt-5">{data.platform}</div>
                </div>
            </div>

            <div className="row mtb-50">
                <div className="col-lg-4 col-md-12 col-sm-12 color-white fs-h3 p-3">About client</div>
                <div className="col-lg-8 col-md-12 col-sm-12 color-white fs-b p-3">{addLineBreak(data.client)}</div>
            </div>
            <div className="row mtb-50">
                <div className="col-lg-4 col-md-12 col-sm-12 color-white fs-h3 p-3">Task Overview</div>
                <div className="col-lg-8 col-md-12 col-sm-12 color-white fs-b p-3">
                    {addLineBreak(data.overview)} <br></br><br></br><br></br>
                    <CommonBtn title={"Visite website"} className={"no-gradi"}/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="stack-card">
                        <div className="stack-title fs-s1 text-start">Team</div>
                        {data.team.map((item, index)=> (
                            <div className="color-white fs-b mt-3" key={index}>{item}</div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="stack-card">
                        <div className="stack-title fs-s1 text-start mt-2">Duration</div>
                        <div className="color-white fs-b mt-3" >{data.duration}</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="stack-card">
                        <div className="stack-title fs-s1 text-start">Technology stack</div>
                        {data.stacks.map((item, index)=> (
                            <span key={index} className="color-white fs-b mt-3" >{item}, &nbsp;</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row mtb-50">
                <div className="col-lg-4 col-md-12 col-sm-12 color-white fs-h3 p-3">Results</div>
                <div className="col-lg-8 col-md-12 col-sm-12 color-white fs-b p-3" >{addLineBreak(data.result)}</div>

            </div>
        </div>
        
        <StartUp/>
    </div>
}

export default ProjectDetail;