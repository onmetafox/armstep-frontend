import React from 'react';
import { whyData } from 'src/config/whyData';
const Why = () => {
    return <div className='why-section'>
        <div className='container'>
            <div className='fs-h2 color-white m-t'>
                Why Armstep
            </div>
            <div className='why-content m-5'>
                {whyData.map((item, index)=>(
                    <div className='why-type' key={index}>
                        <div className='logo'><img src={item.logo} alt='logos'/></div>
                        <div className='title fs-s1 color-white'>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default Why;