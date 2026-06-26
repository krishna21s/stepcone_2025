// imports of react components
import React, { useEffect, useState } from 'react';
import AnimatedCursor from "react-animated-cursor"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

// imports of Assets
import earthImg from '/Assets/earthimage.png';
import bgImg from '/Assets/bgimage.png';
import stepConeImg from '/Assets/STEPCONE[1].png'
import './MainPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// imports of the Pages 

import Navbar from './Navbar';
import PosterPage_pg3 from './PosterPage_pg3';
import StudentBodies_pg4 from './StudentBodies_pg4';
import Footer from './Footer';
import Faq from './Faq.jsx';
import StartingPage from './StartingPage.jsx';
import AboutPage from './AboutPage.jsx';


const MainPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Smooth scrolling effect
    });
  }, []); // Empty dependency array ensures it runs only on component mount


  const [foregroundSpeed, setForegroundSpeed] = useState(100); // Default speed for larger screens

  useEffect(() => {

    const updateSpeed = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) { // Mobile screen size
        setForegroundSpeed(100); // Adjust speed for mobile
      } else if (screenWidth <= 1024) { // Tablet screen size
        setForegroundSpeed(100); // Adjust speed for tablet
      } else {
        setForegroundSpeed(90); // Adjust speed for larger screens
      }
    };

    // Initial check
    updateSpeed();

    // Add event listener for resizing
    window.addEventListener('resize', updateSpeed);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', updateSpeed);
  }, []);



  useEffect(() => {
    AOS.init({
      duration: 800, // You can set different options here
      // Only animate once
    });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the duration as needed

    return () => clearTimeout(timer);
  }, []);





  return (
    <>

      <Navbar />


      <StartingPage />

      <div className="marquee-hdng-note position-fixed start-50 translate-middle pt-3">
        <marquee direction="left" behavior="scroll" scrollamount="7">
          <h5 className="">Registrations are now live! Secure your spot today!</h5>
        </marquee>
      </div>

      {/* this is poster page's component */}
      {/* <Page_2 /> */}
      <PosterPage_pg3 />
      <StudentBodies_pg4 />
      <Footer />
      <Faq />
    </>
  );
};

export default MainPage;