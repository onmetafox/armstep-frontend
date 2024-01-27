import React from 'react';
import {serviceData} from "../../config/serviceData";
import ServiceCard from '../../components/ServiceCard';
import "../../styles/pages/servicelist.scss";
const ServiceList = () => {
    return <div className="service-list">
        <div className="container">
            {
                serviceData.map((item, index)=>(
                    <ServiceCard data={item} key = {index} index= {index}/>
                ))
            }
        </div>
    </div>
}

export default ServiceList