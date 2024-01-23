import React from 'react';
import CommonBtn from 'src/components/button/CommonBtn';

const Services = () =>{
    return <div className='service-section'>
        <div className='container'>
            <div className='d-flex'>
                <div className='col-lg-5 col-sm-12 col-md-12'>
                    <div className='text-start fs-h2 color-white m-2'>Services</div>
                    <div className='text-start fs-s1 color-white m-2'>Elevate your digital presence with our expertise in diverse technological domains</div>
                </div>
                <div className='col-lg-7 col-sm-12 col-md-12 text-end'>
                    <CommonBtn title={"See all"} className={"color-white"}/>
                </div>
            </div>
        </div>
    </div>
}

export default Services;