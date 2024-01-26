import React, { useState, useEffect } from 'react';
import ServiceCard from 'src/components/ServiceCard';
import CommonBtn from 'src/components/button/CommonBtn';
import { serviceData } from 'src/config/serviceData';
function getCarousel () {
    const { width } = window;
    if(width <= 400){
        return true;
    }else{
        return false;
    }
    
}
const Services = () =>{
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
                    <CommonBtn title={"See all"} className={"color-white"}/>
                </div>
            </div>
            <div className='services-container row'>
                { !carousel && serviceData.map((item, index) => (
                    <div className='card-row' key={index}>
                        <ServiceCard data={item} />
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default Services;