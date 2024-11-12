import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import ParallaxCard from '../Components/ParallaxCard'
import stepconePoster from '../Assets/stepcone_poster.jpg'
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
    <div className='poster-section  d-flex flex-column justify-content-center align-item-center '>
      <div className='container mt-5 d-flex flex-column justify-content-center align-item-center'>
        <div className='w-100 m-5'>
          <AnimatedText className='' />
        </div>
        <div className='row poster-details'>
          <div className='poster-text col col-12  col-lg-6 '
            data-aos='fade-up-right'  
          >
            <p className='fs-5  m-2 text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, amet sed aspernatur explicabo ut unde, pariatur sit voluptates beatae dolores ipsum delectus voluptatibus dolorem ex eveniet nostrum commodi facilis. Ut.
              <br />
              <br />
              Nemo quaerat, repellendus dolores beatae iste atque corporis maiores doloribus commodi blanditiis cupiditate, amet incidunt quidem doloremque veritatis fugit ab sapiente! Recusandae distinctio blanditiis optio dolorum suscipit illum in
              Nemo quaerat, repellendus dolores beatae iste atque corporis maiores doloribus commodi blanditiis cupiditate, amet incidunt quidem doloremque veritatis fugit ab sapiente! Recusandae distinctio blanditiis optio dolorum suscipit illum in
            </p>
          </div>
          <div className='poster-img col col-12 col-lg-6 pt-3' data-aos='fade-up-left'>
            <img src={stepconePoster} alt="" className='w-100 mb-3 mx-2' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default PosterPage_pg3