import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import ServiceCard from 'src/components/ServiceCard';
import CommonBtn from 'src/components/button/CommonBtn';
import { serviceData } from 'src/config/serviceData';
import { useNavigate } from "react-router-dom";

function getCarousel () {
    const { innerWidth: width, innerHeight: height } = window;
    if(width <= 600 && height){
        return true;
    }else{
        return false;
    }
    
}
const Services = () =>{
    const navigate = useNavigate();
    const [carousel, setCarousel] = useState(getCarousel());
    useEffect(() => {
        function handleResize() {
            setCarousel(getCarousel());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return <div className='service-section'>
        <div className='container'>
            <div className='d-flex'>
                <div className='service-detail'>
                    <div className='fs-h2 color-white m-2'>Services</div>
                    <div className='fs-s1 color-white m-2'>Elevate your digital presence with our <br></br>expertise in diverse technological domains</div>
                </div>
                <div className='text-end service-all'>
                    <CommonBtn title={"See all"} className={"color-white"} onClick = {()=>{navigate("/services")}}/>
                </div>
            </div>
            <div className='services-container row'>
                { !carousel && serviceData.map((item, index) => (
                    <div className='card-row' key={index}>
                        <ServiceCard data={item} />
                    </div>
                ))}
                { carousel && (
                    <Swiper navigation={true} pagination={{ dynamicBullets: true, }} modules={[Pagination, Navigation]}>
                        {
                            serviceData.map((item, index) => (
                                <SwiperSlide>
                                    <div className='card-row' key={index}>
                                        <ServiceCard data={item} />
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