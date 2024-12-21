import React, { useRef, useEffect } from "react";
import "./AboutCard.css";
import bgImg from "/Assets/about_info/bg.png"
import VenkataKrishna from '/Assets/about_info/venkatakrishna.jpg';
import AbdulYunus from '/Assets/about_info/yunus.png';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutCard({ person }) {
    // Create a ref for the screen element
    const screenRef = useRef(null);

    const on = () => {
        if (screenRef.current) {
            screenRef.current.style.transform = "translateZ(5px) rotateX(-75deg)";
        }
    };


    const timer1 = setTimeout(() => {
        on();
    }, 1500);

    const timer2 = setTimeout(() => {
        shutdown();
    }, 5000);

    useEffect(
        () => {
            timer1;
            timer2;
        }, []);

    const shutdown = () => {
        if (screenRef.current) {
            screenRef.current.style.transform = "translateZ(5px) rotateX(-180deg)";
        }
    };


    const imgData = {
        VenkataKrishna: VenkataKrishna,
        AbdulYunus: AbdulYunus
    }

    return (
        <div className="apple-main">
            <div className="apple">
                {/* Attach ref to the screen element */}
                <div className="screen" ref={screenRef} onClick={on}>
                    <div className="s_child">
                        <div className="display"></div>
                    </div>
                    <div className="s_child">
                        <div className="user-info">
                            <div>
                                <img src={imgData[person.image]} className="user-img" alt="" />
                            </div>
                            <div className="tap-div">
                                <div className="tap-btn ">
                                    <FontAwesomeIcon icon={faHandPointer} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s_child"></div>
                    <div className="s_child"></div>
                    <div className="s_child"></div>
                    <div className="s_child"></div>
                </div>
                <div className="base">
                    <div className="b_child justify-content-center align-items-center ">
                        <div className="about-info">
                            <div className="devloper-name">
                                <p className="text-info m-auto dev-person-name">{person.name}</p>
                            </div>
                            {/* <div className="job">
                                <p className="text-white fs- m-auto me-3">{person.name}</p>
                            </div> */}
                            <div className="job"><p className="text-warning-emphasis dev-person-tech">{person.tech}</p></div>
                            <div className="dev-person-details">
                                <a href={`mailto:${person.email}`} target="blank"> <p className="text-light text-wrap"><strong className="text-warning">Email: </strong>{person.email}</p></a>
                            </div>
                            <br />
                            <a
                                href={person.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="m-auto"
                            >
                                <img
                                    className="linkedin m-auto mb-3 me-1"
                                    src="https://purepng.com/public/uploads/medium/purepng.com-circled-linkedin-logologosiconsflat-designcircled-logoscircled-iconsiconflatminimalistlogo-design-311519935824jlctj.png"
                                    alt=""
                                />
                            </a>
                            <a
                                href="https://github.com/krishna21s"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://image.freepik.com/free-icon/github-cat-in-a-circle_318-41747.jpg"
                                    className="github  mb-3 me-1"
                                    alt=""
                                />
                            </a>
                            <div className="power m-auto my-2" onClick={shutdown}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="10"
                                    width="10"
                                    viewBox="0 0 512 512"
                                    className="m-auto"
                                >
                                    <path
                                        fill="#000000"
                                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="b_child"></div>
                    <div className="b_child"></div>
                    <div className="b_child"></div>
                    <div className="b_child"></div>
                    <div className="b_child"></div>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;
