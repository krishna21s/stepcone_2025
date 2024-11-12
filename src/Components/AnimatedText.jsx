import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './AnimatedText.css'
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".text1, .text2", {
            y: -80,
            x: -30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "section",
                start: "top 80%",
                end: "bottom 50%",
                scrub:2.5
            },
        });
    }, []);

    return (
        <section>
            <div>
                <h1 className='text1 text-info'>G</h1>
                <h1 className='text1 text-warning'>M</h1>
                <h1 className='text1 text-danger'>R</h1>
                <h1 className='text1 text-white'>I</h1>
                <h1 className='text1 text-white'>T</h1>
            </div>
            <div className="presents">
                <h3 className='text2 fs-3 text-white'>P</h3>
                <h3 className='text2 fs-3 text-white'>R</h3>
                <h3 className='text2 fs-3 text-white'>E</h3>
                <h3 className='text2 fs-3 text-white'>S</h3>
                <h3 className='text2 fs-3 text-white'>E</h3>
                <h3 className='text2 fs-3 text-white'>N</h3>
                <h3 className='text2 fs-3 text-white'>T</h3>
                <h3 className='text2 fs-3 text-white'>S</h3>
            </div>
        </section>
    );
};

export default AnimatedText;
