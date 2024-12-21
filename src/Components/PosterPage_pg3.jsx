import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import ParallaxCard from './ParallaxCard.jsx'
import stepconePoster from '/Assets/stepcone_poster.jpg'
import AOS from 'aos'
import AnimatedText from './AnimatedText'
const PosterPage_pg3 = () => {

  // useEffect(() => {
  //   AOS.init({
  //     duration: 850, // You can set different options here
  //     // Only animate once
  //   });
  // }, []);

  return (
    <div className='poster-section d-flex align-items-center pt-3'>
      <div className='container-fluid mt-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12  col-lg-4'>
            <AnimatedText className='' />
            <div className='poster-text  '
              data-aos='fade-up-right'
            >
              <p className='m-2  text-secondary mt-5'>
                GMRIT proudly announces the 17th edition of STEPCONE 2025, a premier technical and cultural fest celebrating innovation and collaboration among engineering students. With the theme "Unleash the Unreal Beyond AI," the event promises motivational talks, cutting-edge workshops, competitive events, and thrilling flagship activities. STEPCONE 2025 aims to inspire young minds to transform ideas into impactful solutions, driving societal progress and shaping the nation’s future.

              </p>
            </div>
          </div>
          <div className='col col-12 col-lg-7 poster-details'>
            <div className='poster-img  pt-3 px-2' data-aos='fade-up-left'>
              <img src={stepconePoster} alt="" className=' w-100 mb-3 mx-3' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PosterPage_pg3