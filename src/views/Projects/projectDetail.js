import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

import StartUp from "../HomePage/startup";
import CommonBtn from "src/components/button/CommonBtn";
import {addLineBreak} from "src/libs/validate";
import {getProject} from "src/services/project/project";
import getCompletedURL from "src/utils/getCompletedURL";
import leftImg from "../../assets/images/left-side-effect.svg";
import "../../styles/pages/projectdetail.scss";

const ProjectDetail = () => {
    const {id} = useParams();
    const [data, setData] = useState();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        scrollToTop();
        getProject(id).then(res => {
            setData(res.result.data)
        })
    }, [id]);

    return data && <div className="project-detail-section">
        <div className="title-section">
            <div className="detail-home container">
                <div className="color-white fs-h1 mt-160 mb-5">{data.title}</div>
                <div className="detail-home-img"><img src={getCompletedURL(data.img)} alt="main"/></div>
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
                <div
                    className="col-lg-8 col-md-12 col-sm-12 color-white fs-b p-3 lh-base">{addLineBreak(data.client)}</div>
            </div>
            <div className="row mtb-50">
                <div className="col-lg-4 col-md-12 col-sm-12 color-white fs-h3 p-3">Task Overview</div>
                <div className="col-lg-8 col-md-12 col-sm-12 color-white fs-b p-3 lh-base">
                    {addLineBreak(data.overview)} <br></br><br></br><br></br>
                    <CommonBtn title={"Visite website"} className={"color-white"} onClick={() => {
                        window.location.href = data.link
                    }}/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="stack-card">
                        <div className="stack-title fs-s1 text-start">Team</div>
                        {data.team.map((item, index) => (
                            <div className="color-white fs-b mt-3" key={index}>{item}</div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="stack-card">
                        <div className="stack-title fs-s1 text-start mt-2">Duration</div>
                        <div className="color-white fs-b mt-3">{data.duration}</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="stack-card">
                        <div className="stack-title fs-s1 text-start">Technology stack</div>
                        {data.stacks.map((item, index) => (
                            <span key={index} className="color-white fs-b mt-3">{item}, &nbsp;</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row mtb-50">
                <div className="col-lg-4 col-md-12 col-sm-12 color-white fs-h3 p-3">Results</div>
                <div
                    className="col-lg-8 col-md-12 col-sm-12 color-white fs-b p-3 lh-base">{addLineBreak(data.result)}
                </div>
            </div>
        </div>
        <StartUp/>
    </div>
}

export default ProjectDetail;