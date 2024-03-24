import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useNavigate} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

import ServiceCard from 'src/components/ServiceCard';
import CommonBtn from 'src/components/button/CommonBtn';

import {useSelector} from "react-redux";
import {allServices} from "src/features/service/serviceSlice";

function getCarousel() {
    const {innerWidth: width, innerHeight: height} = window;
    if (width <= 600 && height) {
        return true;
    } else {
        return false;
    }

}

const Services = () => {
    const navigate = useNavigate();
    const [carousel, setCarousel] = useState(getCarousel());
    const allServiceData = useSelector(allServices);

    useEffect(() => {
        function handleResize() {
            setCarousel(getCarousel());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return <div className='service-section' id='service'>
        <div className='container'>
            <div className='d-flex'>
                <div className='service-detail'>
                    <div className='fs-h2 color-white m-4'>Services</div>
                    <div className='fs-s1 color-white m-4'>Our team fully covers the following fields</div>
                </div>
                <div className='text-end service-all'>
                    <CommonBtn title={"See all"} className={"color-white"} onClick={() => {
                        navigate("/services")
                    }}/>
                </div>
            </div>
            <div className='services-container row m-4'>
                {!carousel && allServiceData && allServiceData.slice(0, 4).map((item, index) => (
                    <div className='card-row' key={index} onClick={() => {
                        navigate(`/service/${item._id}`)
                    }}>
                        <ServiceCard data={item} landing={true} key={index} index={index}/>
                    </div>
                ))}
                {carousel && (
                    <Swiper pagination={{dynamicBullets: true,}} modules={[Pagination]}>
                        {
                            allServiceData && allServiceData.slice(0, 4).map((item, index) => (
                                <SwiperSlide>
                                    <div className='card-row' key={index} onClick={() => {
                                        navigate(`/service/${index}`)
                                    }}>
                                        <ServiceCard data={item} landing={true} key={index} index={index}/>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )}
            </div>
        </div>
    </div>
}

export default Services;