import React from 'react';
import AboutCard from 'src/components/button/card/AboutCard';
import aboutImg from "../../assets/images/about.svg";
import { aboutData } from 'src/config/aboutData';
import leftImg from "../../assets/images/about-left-effect.svg";

const Home = () => {
  return <div className='about-home-section'>
    <img src={leftImg} alt="left side" className="left-side-effect"/>
    <div className='container'>
      <div className='fs-h1 color-white p-1 title desktop-hidden'>About Us</div>
      <div className='d-flex about-content justify-content-between align-items-center'>
        <div className='d-flex about-home-s-container'>
          <div className='fs-h1 color-white p-1 title mobile-hidden'>About Us</div>
          <div className='fs-s1 color-white text-start'>
            With expertise in crafting comprehensive software solutions from inception to implementation, we are proficient in various programming languages and frameworks.
          </div>
          <div className='fs-s2 color-white text-start'>
            Our talented developers and managers, who passed a 3-stage vetting process and worked together on a number of projects, will make sure that the final deliverable fully satisfies your expectations.
          </div>
        </div>
        <div className='about-home-f-img'>
          <img src={aboutImg} alt='about' />
        </div>
      </div>
      <div className='d-flex about-analysis'>
        {aboutData.map((stat, index) => (
          <AboutCard key={index} number={stat.number} description={stat.description} />
        ))}
      </div>
      <div className='d-flex justify-content-between paragraph'>
        <div className='fs-b color-white'>
          Over the past four years, we have successfully collaborated with more than 60 clients, showcasing our commitment to delivering exceptional results. As a full-stack Web3 and Blockchain development team, we have a combined experience of over 6 years in crafting end-to-end software solutions. We are proficient in a variety of programming languages, including JavaScript, Python, Solidity, and Java.
        </div>
        <div className='fs-b color-white'>
          When it comes to front-end development, we excel with frameworks like React.js, while our back-end skills encompass Node.js, Django, and Flask. With our depth of knowledge and a shared passion for innovation, we are well-equipped to tackle complex projects and deliver outstanding outcomes.
        </div>
      </div>
      <div className='analysis-bk'>
      </div>
    </div>
  </div>

}

export default Home;