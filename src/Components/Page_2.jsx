import React, { useEffect } from 'react';
import GmritImg from '../Assets/gmrit.jpeg'
import ILoveGmrit from '../Assets/ilovegmrit2.png'
import AOS from 'aos';
const Page_2 = () => {

    useEffect(() => {
        AOS.init({
          duration: 5000, // You can set different options here
          // Only animate once
        });
      }, []);
    return (
        <div className='page-2-main align-content-center'>
            <div className='sub-main container d-flex justify-content-around align-items-center'>
                <div className='ilovegmrit-text my-5 img-fluid' data-aos = 'fade-left'>
                    <img src={ILoveGmrit} alt="" />
                </div>
                <div className='gmrit-img img-fluid my-3' data-aos = 'fade-up-left'>
                    <img src={GmritImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Page_2