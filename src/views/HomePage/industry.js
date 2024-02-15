import React from 'react';
import plusImg from "../../assets/icons/circle-plus.svg"
const Industry = () => {
    return <div className='industry-section' id='industry'>
        <div className='container'>
            <div className='col-lg-5 col-md-12 col-sm-12 industry-detail'>
                <div className='fs-h1 color-white m-4'>Industries</div>
                <div className='fs-s1 color-white m-4 lh-base'>Internally, we have strategically selected specific areas where we possess expertise and a track record of successful outcomes.</div>
            </div>
            <div className='col-lg-7 col-md-12 col-sm-12 industry-content'>
                <div className='industry-type color-white'>SOFTWARE AS A SERVICE (SAAS) PROVIDERS</div>
                <div className='industry-type color-white'>CRYPTOCURRENCY & BLOCKCHAIN PROTOCOLS</div>
                <div className='industry-type color-white'>EARLY STAGE STARTUPS</div>
                <div className='industry-type color-white'>FINTECH</div>
                <div className='industry-type color-white'>E-COMMERCE</div>
            </div>
            <div className='circle-plus'>
                <img src={plusImg} alt='circle plus' />
            </div>
        </div>
    </div>
}

export default Industry;