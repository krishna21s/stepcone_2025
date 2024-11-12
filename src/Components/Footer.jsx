import React from 'react';
import './Footer.css';
import Dolphin from '../Assets/dolphin.png'
import RRR from '../Assets/rrr.png'
const Footer = () => {
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
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="lightblue" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(173, 216, 230, 0.537)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(173, 216, 230, 0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(157, 166, 222,0.09)" />
                        </g>
                    </svg>
                </div>
                {/* <!--Waves end--> */}
            </div>
            {/* <!--Header ends--> */}

            <div className="content container">
                <div>
                    <h3>LINKS</h3>
                    <div>
                        <a href="">Gmrit</a>
                        <a href="">Events</a>
                        <a href="">Contact us</a>
                        <a href="">About</a>
                    </div>
                </div>
                <div>
                    <h3>CONTACT US</h3>
                    <div>
                        <a href="">College Contact</a>
                        <a href="">SiteMap</a>
                        <a href="">LandLine</a>
                        <a href="">gmrit1998@gmail.com</a>
                    </div>
                </div>
                <div>
                    <h3>ADDRESS</h3>
                    <div id="map">
                        <div>
                            <div>GMR nagar rajam</div>
                            <div>Vizianagaram</div>
                            <div>Ap-532127</div>
                            <div>StepCone2025@gmail.com</div>
                        </div>
                        <div id="googleMap">
                            <a href="https://www.google.com/maps/place/GMR+Institute+of+Technology" target="_blank" rel="noopener noreferrer">View Map</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>FOLLOW US</h3>
                    <div className="follow gap-3">
                        <a href="">
                            <img src="https://toppng.com/uploads/preview/instagram-logo-circle-11549679754rhbcorxntv.png" alt="Instagram" />
                        </a>
                        <a href="">
                            <img src="https://www.freeiconspng.com/uploads/logo-twitter-circle-png-transparent-image-1.png" alt="Twitter" />
                        </a>
                        <a href="">
                            <img src="https://th.bing.com/th/id/OIP.yUWvf6InVFryrKNHtrgdBQHaHw?rs=1&pid=ImgDetMain" alt="Facebook" />
                        </a>
                        <a href="">
                            <img src="https://i.pinimg.com/originals/d9/52/c0/d952c0b9fcd5292a4eaae2ae00fc3d47.png" alt="Pinterest" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
