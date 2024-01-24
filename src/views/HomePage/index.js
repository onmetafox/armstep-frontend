import React from 'react';
import Home from './home';
import About from './about';
import StartUp from './startup';
import Services from './services';
import Industry from './industry';
import Why from './why';
import Project from './projects';
const HomePage = () => {
    return <>
        <Home />
        <About />
        <Services />
        <Industry />
        <Why /> 
        <Project />
        <StartUp />
    </>
    
}

export default HomePage;