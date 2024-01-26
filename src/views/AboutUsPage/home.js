import React from 'react';
import AboutCard from 'src/components/button/card/AboutCard';
import aboutImg from "../../assets/images/commons/Placeholder image@2x.png";
import aboutBannerImg from "../../assets/images/commons/Placeholder image.png";

const Home = () => {
  const stats = [
    { number: '60', description: 'Completed projects' },
    { number: '99', description: '96% Customer satisfaction Score' },
    { number: '5', description: 'Years of work' },
    { number: '20', description: 'Partners' },
  ];
  return <div className='about-home-section'>
    <div className='container'>
      <div className='fs-h1 color-white p-1 title'>About Us</div>
      <div className='d-flex about-content justify-content-between align-items-center'>
        <div className='about-home-f-img'>
          <img src={aboutImg} alt='about'/>
        </div>
        <div className='d-flex about-home-s-container'>
          <div className='about-home-s-img'>
            <img src={aboutBannerImg} about='aboutBanner' />
          </div>
          <div className='fs-s1 color-white text-start'>We are a team of top rated and top rated plus freelancers from Upwork, who have successfully worked with over 60 clients during last 4 years.
            Our track record shows how we can be helpful to our clients (all of this text should be polished by AI)</div>
        </div>
      </div>
      <div className='d-flex justify-content-between paragraph'>
        <div className='fs-b color-white'>
          Over the past four years, we have successfully collaborated with more than 60 clients, showcasing our commitment to delivering exceptional results. As a full-stack Web3 and Blockchain development team, we have a combined experience of over 6 years in crafting end-to-end software solutions. We are proficient in a variety of programming languages, including JavaScript, Python, Solidity, and Java.
        </div>
        <div className='fs-b color-white'>
          When it comes to front-end development, we excel with frameworks like React.js, while our back-end skills encompass Node.js, Django, and Flask. With our depth of knowledge and a shared passion for innovation, we are well-equipped to tackle complex projects and deliver outstanding outcomes.
        </div>
      </div>
      <div className='d-flex about-analysis'>
        {stats.map((stat, index) => (
          <AboutCard key={index} number={stat.number} description={stat.description} />
        ))}
      </div>
      <div className='analysis-bk'>
      </div>
    </div>
  </div>

}

export default Home;