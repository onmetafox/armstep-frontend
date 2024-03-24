import React from 'react';
import {useSelector} from "react-redux";

import ServiceCard from '../../components/ServiceCard';
import {allServices} from "src/features/service/serviceSlice";
import "../../styles/pages/servicelist.scss";

const ServiceList = () => {
    const allServiceData = useSelector(allServices)

    return <div className="service-list">
        <div className="container">
            {
                allServiceData && allServiceData.map((item, index) => (
                    <ServiceCard data={item} key={index} index={index}/>
                ))
            }
        </div>
    </div>
}

export default ServiceList