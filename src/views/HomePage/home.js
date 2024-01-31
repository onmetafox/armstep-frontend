import React from 'react';
import ActiveBtn from "../../components/button/ActiveBtn";
import CommonBtn from 'src/components/button/CommonBtn';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return <div className='home-section' id='home'>
        <div className='container'>
            <div className='fs-b color-gray4 p-1 text-center'>We redefine possibilities through cutting-edge technology</div>
            <div className='fs-h1 color-primary home-title p-1'>Unlocking Innovation in Technology</div>
            <div className='fs-s1 color-white home-detail p-1 lh-base'>Our passion lies in creating innovative solutions that transform businesses, inspire change, and push the boundaries of what's achievable. </div>
            <div className='home-buttons'>
                <ActiveBtn className={"m-3"} onClick = {()=>{navigate("/talk-to-us")}}/>
                <CommonBtn title = {"Explore Services"} className={"color-white m-3"}/>
            </div>
            
        </div>
        <div className='home-footer'>
                <div className='fs-s1 color-white m-3'>Trusted by:</div>
                <div className='d-flex'>
                    <div className='fs-s1 color-gray4 p-2'>Solar</div>
                    <div className='fs-s1 color-gray4 p-2'>SerenityShield</div>
                    <div className='fs-s1 color-gray4 p-2'>Graviton.xyz</div>
                    <div className='fs-s1 color-gray4 p-2'>Slash.Digital</div>
                </div>
            </div>
    </div>
    
}

export default Home;