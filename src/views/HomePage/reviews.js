import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination} from 'swiper/modules';

import ReviewCard from 'src/components/ReviewCard';
import {getReviews} from "src/services/review/review";

import leftEffect from "../../assets/images/left-effect.svg";
import rightEffect from "../../assets/images/right-effect.svg";
import "../../styles/style.css";

function getCarousel() {
    const {innerWidth: width, innerHeight: height} = window;
    if (width <= 600 && height) {
        return true;
    } else {
        return false;
    }
}

const Reviews = () => {
    const [carousel, setCarousel] = useState(getCarousel());
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        getReviews().then(res => {
            setReviewData(res.result.data)
        }, [])
    }, []);

    useEffect(() => {
        function handleResize() {
            setCarousel(getCarousel());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <div className='review-section' id='review'>
        <div className='container'>
            <div className='left-effect'>
                <img src={leftEffect} alt='left effect'/>
            </div>
            <div className='right-effect'>
                <img src={rightEffect} alt='right effect'/>
            </div>
            <div className='fs-h2 color-white mt-4'>Trusted by the best</div>
            <div className='fs-s1 color-white review-detail'>Discover what our clients have to say about their
                experiences working with us
            </div>
            <div className='review-content mt-5'>
                <Swiper slidesPerView={carousel ? 1 : 3} spaceBetween={30} centeredSlides={true}
                        pagination={{clickable: true,}} navigation={true} modules={[Pagination, Navigation]}
                        loop={true}>
                    {
                        reviewData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ReviewCard data={item}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    </div>
}

export default Reviews;