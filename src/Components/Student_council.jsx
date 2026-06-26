import React, { useEffect } from 'react'
import { std_council, std_presi } from '../../public/assets_sc/assets'
import Profile_sc from './Profile_sc'
import './Profile_sc.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Student_council = () => {
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
        <div className='student-council-details-main pb-5'>
            <center><p className='text-light fs-2 border-bottom pb-4 w-75 mb-5 '>Organizing Team</p></center>
            <center>
                <div className='std_presi d-sm-flex justify-content-center'>

                    <div >

                        <img src={std_presi[0].profile} alt="" className='profile_img' data-aos="flip-right" />
                    </div>
                    <div>
                        <img src={std_presi[0].details} alt="" className='profile_details' data-aos="fade-right" />
                    </div>

                </div>
                <div className='student-council-details d-flex flex-wrap justify-content-around gap-sm-5 '>


                    {
                        std_council.map((item, index) => (

                            <Profile_sc pic={item.profile} det={item.details} key={index} />
                        ))
                    }
                </div>
            </center>
        </div>


    )
}

export default Student_council