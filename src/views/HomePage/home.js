import React from 'react';
import ActiveBtn from "../../components/button/ActiveBtn";
import CommonBtn from 'src/components/button/CommonBtn';
const Home = () => {
    return <div className='home-section'>
        <div className='container'>
            <div className='fs-b color-gray4 p-1'>We redefine possibilities through cutting-edge technology</div>
            <div className='fs-h1 color-primary home-title p-1'>Unlocking Innovation in Technology</div>
            <div className='fs-s1 color-white home-detail p-1'>Our passion lies in creating innovative solutions that transform businesses, inspire change, and push the boundaries of what's achievable. </div>
            <div className='d-flex'>
                <ActiveBtn className={"m-3"}/>
                <CommonBtn title = {"Explore Services"} className={"color-white m-3"}/>
            </div>
            <div className='home-footer'>
                <div className='fs-s1 color-white mtb-50'>Trusted by:</div>
                <div className='row'>
                    <span className='fs-s1 color-gray4 col-lg-3 col-sm-6 col-md-3'>Solar</span>
                    <span className='fs-s1 color-gray4 col-lg-3 col-sm-6 col-md-3'>SerenityShield</span>
                    <span className='fs-s1 color-gray4 col-lg-3 col-sm-6 col-md-3'>Graviton.xyz</span>
                    <span className='fs-s1 color-gray4 col-lg-3 col-sm-6 col-md-3'>Slash.Digital</span>
                </div>
            </div>
        </div>
    </div>
    
}

export default Home;