import React, { useEffect } from 'react';
import './LandingLoadingPg.css'; // Import the CSS file for styles
import StepconeImg from '/Assets/STEPCONE[1].png';
import { gsap } from "gsap";

const LoadingAnimation = () => {

    useEffect(() => {
        // Select all the letters
        const letters = document.querySelectorAll(".glowing-text span");

        // Create a GSAP timeline for the glowing letters
        const tl = gsap.timeline();

        // Glowing letters animation
        tl.to(letters, {
            opacity: 1, // Make each letter visible
            duration: 0.2,
            stagger: 0.1, // Stagger the effect by 0.2 seconds between letters
        })
            .to(letters, {
                opacity: 0, // Dim each letter slightly
                duration: 0.2,
                stagger: 0.16,
            })
            .to(
                "#loading",
                {
                    opacity: 1, // Fade out the loading screen
                    duration: .2,
                    onComplete: () => {
                        gsap.to("#st-loading-img", { opacity: 1, duration: 1 }); // Fade in main content
                    },
                },

                "+=0.2" // Delay before transitioning to main content
            );
    }, []);



    return (
        <div className="loading-container" id="loading">
            <div className="">
                <img src={StepconeImg} className='' id='st-loading-img' alt="Stepcone" width="75px" height='57px' />
            </div>
            <div className="glowing-text">
                {/* Each letter is wrapped in a <span> */}
                <span>S</span>
                <span>T</span>
                <span>E</span>
                <span>P</span>
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>E</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
    );
};

export default LoadingAnimation;




// const LoadingPage = () => {
//     useEffect(() => {
//         // Select all the letters
//         const letters = document.querySelectorAll(".glowing-text span");

//         // Create a GSAP timeline for the glowing letters
//         const tl = gsap.timeline();

//         // Glowing letters animation
//         tl.to(letters, {
//             opacity: 1, // Make each letter visible
//             duration: 0.5,
//             stagger: 0.2, // Stagger the effect by 0.2 seconds between letters
//         })
//             .to(letters, {
//                 opacity: 0, // Dim each letter slightly
//                 duration: 0.5,
//                 stagger: 0.2,
//             })
//             .to(
//                 "#loading",
//                 {
//                     opacity: 0, // Fade out the loading screen
//                     duration: 1,
//                     onComplete: () => {
//                         // Hide loading screen and show main content
//                         document.getElementById("loading").style.display = "none";
//                         document.getElementById("main-content").style.display = "block";
//                         gsap.to("#main-content", { opacity: 1, duration: 1 }); // Fade in main content
//                     },
//                 },
//                 "+=0.5" // Delay before transitioning to main content
//             );
//     }, []);

//     return (
//         <div>
//             {/* Loading Screen */}
//             <div id="loading">
//                 <img
//                     src="https://gmrit.edu.in/stepcone/Assets/STEPCONE%5B1%5D.png"
//                     alt="Stepcone Logo"
//                     className="loading_stepcone"
//                 />
//                 <div className="glowing-text">
//                     {/* Each letter is wrapped in a <span> */}
//                     <span>S</span>
//                     <span>T</span>
//                     <span>E</span>
//                     <span>P</span>
//                     <span>C</span>
//                     <span>O</span>
//                     <span>N</span>
//                     <span>E</span>
//                     <span>.</span>
//                     <span>.</span>
//                     <span>.</span>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div id="main-content">
//                 <h1>Welcome to My Website</h1>
//                 <p>This is the main content of the website.</p>
//             </div>
//         </div>
//     );
// };

// export default LoadingPage;