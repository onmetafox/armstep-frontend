import React from 'react';
import plusImg from "../../assets/icons/circle-plus.svg"
const Industry = () => {
    return <div className='industry-section'>
        <div className='container'>
            <div className='col-lg-5 col-md-12 col-sm-12 industry-detail'>
                <div className='fs-h1 color-white m-4'>Industries</div>
                <div className='fs-s1 color-white m-4'>Internally, we have strategically selected specific areas where we possess expertise and a track record of successful outcomes.</div>
            </div>
            <div className='col-lg-7 col-md-12 col-sm-12 industry-content'>
                <div className='industry-type color-white'>Software as a Service (SaaS) Providers</div>
                <div className='industry-type color-white'>Cryptocurrency & blockchain protocols</div>
                <div className='industry-type color-white'>Early Stage Startups</div>
                <div className='industry-type color-white'>Fintech</div>
                <div className='industry-type color-white'>E-commerce</div>
            </div>
            <div className='circle-plus'>
                <img src={plusImg} alt='circle plus' />
            </div>
        </div>
    </div>
}

export default Industry;