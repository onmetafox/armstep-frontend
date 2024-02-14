import React, { useEffect } from 'react';
import Home from './home';
import HowWeWork from './howWeWork';
import '../../styles/pages/aboutus.scss';

const AboutUsPage = () => {
  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  };
  useEffect(()=>{
      scrollToTop()
  },[]);
  return <>
    <Home />
    <HowWeWork />
  </>

}

export default AboutUsPage;