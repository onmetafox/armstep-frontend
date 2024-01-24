import React from 'react';
import AboutCard from 'src/components/button/card/AboutCard';
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
                </div>
                <div className='d-flex about-home-s-container'>
                    <div className='about-home-s-img'>
                    </div>
                    <div className='fs-s1 color-white text-start'>We are a team of top rated and top rated plus freelancers from Upwork, who have successfully worked with over 60 clients during last 4 years.
Our track record shows how we can be helpful to our clients (all of this text should be polished by AI)</div>
                </div>
            </div>
            <div className='d-flex justify-content-between paragraph'>
                <div className='fs-b color-white'>
                    As a full-stack Web3 and Blockchain developer, I have over 6 years of experience in developing end-to-end software solutions. I am proficient in several programming languages including JavaScript, Python, Solidity, and Java. My experience with front-end frameworks includes React,js and I am skilled in back-end development using Node.js, Django, and Flask.
                </div>
                <div className='fs-b color-white'>
                    As a full-stack Web3 and Blockchain developer, I have over 6 years of experience in developing end-to-end software solutions. I am proficient in several programming languages including JavaScript, Python, Solidity, and Java. My experience with front-end frameworks includes React,js and I am skilled in back-end development using Node.js, Django, and Flask.
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