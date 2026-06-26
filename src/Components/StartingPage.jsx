import React, { useEffect } from "react";
import "./StartingPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import earthImg from '/Assets/earthimage.png';
import stepconeImg from '/Assets/STEPCONE[1].png';
import bg_landingpage from '/Assets/bg-landingpage.mp4';
import StepconeTxt from './StepconeTxt.jsx';


gsap.registerPlugin(ScrollTrigger);

const StartingPage = () => {
    useEffect(() => {
        const scrollAnimations = () => {
            ScrollTrigger.matchMedia({
                // Default (desktop and other sizes)
                "(min-width: 451px)": () => {
                    gsap.to(".earth-box", {
                        y: -500,
                        scrollTrigger: {
                            trigger: ".earth-box",
                            start: "top 55%",
                            end: "top 10%",
                            markers: false,
                            scrub: 1,
                        },
                    });
                },
                // Mobile (450px or less)
                "(max-width: 450px)": () => {
                    gsap.to(".earth-box", {
                        y: -400,
                        scrollTrigger: {
                            trigger: ".earth-box",
                            start: "top 70%",
                            end: "top 15%",
                            markers: false,
                            scrub: 1,
                        },
                    });
                    ScrollTrigger.defaults({
                        immediateRender: false,
                        overwrite: 'auto',
                    });
                },
            });
        };

        scrollAnimations();

        // Clean up ScrollTriggers on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>

            <div className="position">

                <div className="starting-page-main">

                    <div className="landing-box">
                        <div className="shadow"></div>


                    </div>

                    <div className="stepcone-title-div d-flex flex-column justify-content-center align-items-center pb-5">
                        
                        <img src={stepconeImg} alt="" className="stepcone-title-img mb-3" />
 
                            <StepconeTxt/>

                    </div>
                    <div className="bg-light">
                        <img src={earthImg} alt="Earth" className="earth-box" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartingPage;
