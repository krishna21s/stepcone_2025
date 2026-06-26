import React, { useEffect, useState } from 'react';
import './Footer.css';
import Dolphin from '/Assets/dolphin.png'
import RRR from '/Assets/rrr.png'
import FooterDetails from './FooterDetails.jsx'
import axios from 'axios';
const Footer = () => {
    const [hitCount, setHitCount] = useState(0);


    const getHitCount = async () => {

        try {
            const response = await axios.get('/stepcone/stepcone_backend/hit_count.php');
            setHitCount(response.data.hitcount);
        }
        catch {
            console.log("hit count error");
        }
    }

    useEffect(() => {
        getHitCount();
    }, [])

    return (
        <div>
            <div className="header">
                <div className="inner-header ">
                    <div className="shark">
                        <div className="box">
                            <img src={Dolphin} alt="" />
                        </div>
                    </div>
                </div>

                {/* <!--Waves Container--> */}
                <div>
                    <div>
                        <img src={RRR} alt="" className='rrr' data-aos='fade-up-right' data-aos-duration='1500' />
                    </div>
                    <svg
                        className="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(03, 103, 161,0.4)" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(173, 216, 230, 0.537)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(173, 216, 230, 0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(157, 166, 222,0.09)" />
                        </g>
                    </svg>
                </div>
                {/* <!--Waves end--> */}
            </div>
            <div className='w-100'>
                <FooterDetails />
            </div>
            <div className='hitcount text-center'>
                <small className='text-dark'>visits - {hitCount}</small>
            </div>
        </div>
    );
};

export default Footer;
