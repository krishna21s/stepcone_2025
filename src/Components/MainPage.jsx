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


  return (
    <div className='main '>
      <AnimatedCursor
        className='animated-cursor'
        innerSize={8}
        outerSize={8}
        color='177, 188, 199'
        outerAlpha={0.5}
        innerScale={2}
        outerScale={6}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          'p', // Add paragraph tags
          'span', // Span tags are often used for inline text
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img',// Header tags for title text
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 5,
              innerScale: 2,
              outerScale: 5
            }
          }
        ]}
      />
      <ParallaxProvider id=''>
        <Navbar />

        <ParallaxBanner
          id='home'
          layers={[
            {
              image: bgImg, speed: 50,
              className: 'background-img',
            },
            {
              speed: 20,
              className: '',
              children: (
                <div class="stepcone-logo-div position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column align-items-center justify-content-center">
                  <img className='stepcone-logo' data-aos='fade-down' data-aos-duration='1500' src={stepConeImg} alt="" height='150px' />
                  <h1 class=" text-white main-text text-center mx-3 my-3" data-aos='zoom-out-up' style={{ fontFamily: "Orbitron, sans-serif" }}>StepCone 2025</h1>
                </div>

              ),
            },
            {
              image: earthImg, speed: foregroundSpeed, className: "foreground-img "
            },
          ]}
          className="aspect-[3/1] banner-1"
        />
      </ParallaxProvider>
      {/* this is poster page's component */}
      {/* <Page_2 /> */}
      <PosterPage_pg3 />
      <StudentBodies_pg4 />
      <Footer />
    </div>
  );
};
export default MainPage