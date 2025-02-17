import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import "../../styles/pages/servicedetail.scss";
import Industry from "../HomePage/industry";
import StartUp from "../HomePage/startup";
import barImg from "../../assets/images/bar.svg";
import circlePlusImg from "../../assets/icons/circle-plus.svg";
import {getService} from "src/services/service/service";
import getCompletedURL from "src/utils/getCompletedURL";

const ServiceDetail = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        scrollToTop();
        getService(id).then(res => {
            setData(res.result)
        })
    }, [id]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return <div className="detail-section">
        <div className="container detail-container">
            <div className="color-white fs-h1">{data.title}</div>
            <div className="color-white fs-s1 service-content"> {data.detail}</div>
            <div className="detail">
                <div className="detail-logo col-lg-3 col-md-3 col-sm-12">
                    <img src={getCompletedURL(data.icon)} alt="logo"/>
                </div>
                <div className="detail-content col-lg-9 col-md-9 col-sm-12">
                    <img src={barImg} alt="bar" className="mb-3"/>
                    <div className="color-white fs-b mt-3">
                        {data.content}
                    </div>

                </div>
            </div>
            <div>
                <div className="color-white fs-h1 technical-title">Technology stack<img src={circlePlusImg}
                                                                                        alt="circle plus"/></div>
                {/*<TechCard data = {data.category}/>*/}
            </div>
        </div>
        <Industry/>
        <StartUp/>
    </div>
}

export default ServiceDetail;