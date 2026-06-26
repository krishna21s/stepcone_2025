import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import './Profile_sc.css'
const Profile_sc = ({pic,det}) => {

    useEffect(() => {
        AOS.init({
          offset: 120, // Offset (in px) from the original trigger point
          delay: 0,    // Delay (in ms) before the animation starts
          duration: 800, // Duration (in ms) for the animation
       
        });
    
        // Refresh AOS to detect changes dynamically if needed
        AOS.refresh();
      }, []);

  return (
    <>
    
    <div className='std_details d-sm-flex '>
       
        <div >
      <img src={pic} alt="" className='profile_img' data-aos="flip-right" />
        </div>
        <div>
            <img src={det} alt="" className='profile_details' data-aos="fade-right"/>
        </div>

    </div>
    </>
  )
}

export default Profile_sc
