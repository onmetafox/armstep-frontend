import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import ReviewCard from 'src/components/ReviewCard';
import { reviewData } from 'src/config/reviewData';
import leftEffect from "../../assets/images/left-effect.svg";
import rightEffect from "../../assets/images/right-effect.svg";

import "../../styles/style.css";
const Reviews = () => {
   
    return <div className='review-section'>
        <div className='container'>
            <div className='left-effect'>
                <img src = {leftEffect} alt='left effect'/>
            </div>
            <div className='right-effect'>
                <img src = {rightEffect} alt='right effect'/>
            </div>
            <div className='fs-h2 color-white'>Trusted by the best</div>
            <div className='fs-s1 color-white review-detail'>Discover what our clients have to say about their experiences working with us</div>
            <div className='review-content mt-5'>
                <Swiper slidesPerView={3} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true, }} modules={[Pagination, Navigation]} loop={true}>
                {
                    reviewData.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <ReviewCard data = {item}/>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </div>
    </div>
}

export default Reviews;