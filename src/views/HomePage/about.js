import React from 'react';
import CommonBtn from 'src/components/button/CommonBtn';
import aboutImg from "../../assets/images/about.svg";
const About = () => {
    return <div className='about-section'>
        <div className='container row'>
            <div className='col-lg-5 col-sm-12 col-md-12 about-img'>
                <img src={aboutImg} alt='about'/>
            </div>
            <div className='about-content col-lg-7 col-sm-12 col-md-12'>
                <div className='fs-h2 color-white m-5 text-start'>About Armstep</div>
                <div className='fs-s1 color-white m-5 text-start'>
                    With expertise in crafting comprehensive software solutions from inception to implementation, we are proficient in various programming languages, including JavaScript, Python, Solidity, C++ and Java. <br></br><br></br>
                    Our skills extend to front-end frameworks like React.js, Angular.js and we excel in back-end development using technologies such as Node.js, Django, and Flask.
                </div>
                <div className='m-5'>
                    <CommonBtn title={"Read more"} className={"color-white"}/>
                </div>
            </div>
        </div>
    </div>
}

export default About;