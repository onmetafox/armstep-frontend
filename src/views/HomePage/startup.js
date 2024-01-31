import React from 'react';
import ActiveBtn from 'src/components/button/ActiveBtn';
import { useNavigate } from "react-router-dom";
const StartUp = () =>{
    const navigate = useNavigate();
    return <div className='startup-section' id='startup'>
        <div className='container'>
            <div className='fs-h2 color-white m-3'>Start a Project with us</div>
            <div className='fs-s1 color-white m-3'>We are enthusiastic about the potential to develop cutting-edge solutions and achieve success in our industry.</div>
            <div className='m-3'>
                <ActiveBtn title = "Talk to Us" onClick={()=>{navigate("/talk-to-us")}}/>
            </div>
        </div>
    </div>
}

export default StartUp;