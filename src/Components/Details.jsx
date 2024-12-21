import React, { useState, useEffect } from "react";
import "./Details.css";
import FooterDetails from './FooterDetails.jsx';
import NavBar from "./Navbar.jsx";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuestion, faVideo, faAddressCard, faImages } from '@fortawesome/free-solid-svg-icons';
import img1 from '/Assets/details_info/IMG-20241210-WA0002[1].jpg';
import img4 from '/Assets/details_info/IMG-20241210-WA0003[1].jpg';
import img2 from '/Assets/details_info/IMG-20241210-WA0004[1].jpg';
import img5 from '/Assets/details_info/IMG-20241210-WA0005[1].jpg';
import img6 from '/Assets/details_info/IMG-20241210-WA0006[1].jpg';
import img3 from '/Assets/details_info/IMG-20241210-WA0007[1].jpg';
import img7 from '/Assets/details_info/IMG-20241210-WA0008[1].jpg';
import img8 from '/Assets/details_info/IMG-20241210-WA0009[1].jpg';
import img9 from '/Assets/details_info/IMG-20241210-WA0013[1].jpg';
import img10 from '/Assets/details_info/IMG-20241210-WA0015[1].jpg';
// import img11 from '/Assets/details_info/IMG-20241210-WA0004[1].jpg';`
import stepconevid from '/Assets/details_info/stepcone2k25vid.mp4';
import Footer from "./Footer.jsx";
import { Navbar } from "react-bootstrap";
const Details = () => {
    const [deg, setdeg] = useState(0);
    const [clicks, setclicks] = useState(1);
    const handleplay = () => {
        const circle = document.querySelector(".circle-parent")
        if (clicks == 1) {
            document.querySelector("#one").style.backgroundColor = "blue";
            document.querySelector("#general-reg").style.display = "block";
            document.querySelector("#video-sc").style.display = "none";
            document.querySelector("#gallery-sc").style.display = "none";
            document.querySelector("#query-sc").style.display = "none";


        } else if (clicks == 2) {
            document.querySelector("#two").style.backgroundColor = "blue";
            document.querySelector("#general-reg").style.display = "none";
            document.querySelector("#video-sc").style.display = "block";
            document.querySelector("#gallery-sc").style.display = "none";
            document.querySelector("#query-sc").style.display = "none";

        } else if (clicks == 3) {
            document.querySelector("#three").style.backgroundColor = "blue";
            document.querySelector("#general-reg").style.display = "none";
            document.querySelector("#video-sc").style.display = "none";
            document.querySelector("#gallery-sc").style.display = "block";
            document.querySelector("#query-sc").style.display = "none";

        } else {

            document.querySelector("#four").style.backgroundColor = "blue";
            document.querySelector("#general-reg").style.display = "none";
            document.querySelector("#video-sc").style.display = "none";
            document.querySelector("#gallery-sc").style.display = "none";
            document.querySelector("#query-sc").style.display = "block";

        }

        setdeg(deg + 90);
        console.log(deg);
        // console.log(clicks);
        circle.style.rotate = `${deg}deg`;
        if (clicks == 4) {
            setdeg(0);

            setclicks(1);
        } else {
            setclicks(clicks + 1);
        }

    };

    const [currentStudData, setCurrentStudData] = useState(null);

    const CurrUserData = async () => {
        try {
            const response = await axios.get("api/stepcone_backend/userdata.php");
            console.log(response.data);
            setCurrentStudData(response.data.session);
        }
        catch {
            console.log("error");
        }
    }

    useEffect(
        () => {
            CurrUserData();
        }, []);
    // ```javascript
    const [lastQueryTime, setLastQueryTime] = useState(null);

    const sendQueryToDb = async (e) => {
        e.preventDefault();
        const currentTime = new Date().getTime();
        if (lastQueryTime && (currentTime - lastQueryTime) / 60000 < 10) {
            alert("You can send only one query in 10 minutes.");
            return;
        }
        setLastQueryTime(currentTime);
        const queryRaisedUserData = {
            "query": document.querySelector("#query").value,
            "email": currentStudData.myemail,
            "mobile": document.querySelector("#mobile").value,
            "name": currentStudData.username
        }
        try {
            if (!queryRaisedUserData.email) {
                alert("Your Login is required to proceed");
                return;
            }
            const response = await axios.post("api/stepcone_backend/queries.php", queryRaisedUserData)
            console.log(response.data);
            alert(response.data.message);
        }
        catch {
            console.log("error");
        }
    }
    return (
        <>
            <NavBar />
            <div className="details-main  p-3 p-sm-5 bg-dark">
                {/* Title Section */}
                <div className=" mt-5 text-center py-3 details-title">
                    GMR INSTITUTE OF TECHNOLOGY
                </div>
                <center>
                    <hr className="" width="98%" />
                </center>

                {/* Content Section */}
                <div className="details-gmr ">
                    {/* Image */}
                    <div className="gmrit-parent ">
                        <img
                            src="https://gmrit.edu.in/images/blocks/Landing.png"
                            className="gmrit-clg img-fluid"
                            alt="GMRIT"
                            height='300px'
                        />
                    </div>

                    {/* Description */}
                    <div className="details-text">

                        Welcome to GMR Institute of Technology (GMRIT). Established in the year 1997 by GMR Varalakshmi Foundation – the corporate social responsibility arm of GMR Group – GMRIT offers aspiring engineers high quality technical education.
                        Located in Rajam, Vizainagaram district of Andhra Pradesh, GMRIT provides its learning community state-of-the-art facilities, infrastructure and a competent faculty. The Institute encourages collaborative learning between industry and academia as a means of reinforcing its curriculum with practical and real world experiences.
                        It is this emphasis on a well-rounded education that makes GMRIT a preferred institute among engineering colleges in India.
                    </div>
                </div>
                <center>
                    <hr className="my-5 " width="98%" />
                </center>
                <div className="d-flex m-auto justify-content-between align-items-center flex-wrap details-total-info my-4">
                    <div className="d-flex flex-column">
                        <div>
                            <p className="text-warning text-center play-btn-note"><b className="text-warning">Hint:</b> Click play multiple times</p>
                        </div>
                        <div className="circle-parent position-relative my-5 px-4">
                            <div class="details-circle-design">
                                <div className="s1" id="two">
                                    <FontAwesomeIcon icon={faVideo} size="xl" style={{ color: "#ffffff", rotate: "-135deg" }} />
                                </div>
                                <div className="s2" id="one">
                                    <FontAwesomeIcon icon={faAddressCard} size="xl" style={{ color: "#ffffff", rotate: "-45deg" }} />
                                </div>
                                <div className="s3" id="three">
                                    <FontAwesomeIcon icon={faImages} size="xl" style={{ color: "#ffffff", rotate: "135deg" }} />
                                </div>
                                <div className="s4" id="four">
                                    <FontAwesomeIcon icon={faQuestion} size="2xl" style={{ color: "#ffffff", rotate: "45deg" }} />
                                </div>
                            </div>
                            <div className="stepcone-play position-absolute" onClick={handleplay}>
                                <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff" }} />
                            </div>
                        </div>
                    </div>

                    <div className="details-screen" >
                        {/* gallery */}
                        <div className="gallery w-100 position-relative" id="gallery-sc">
                            <center>
                                <h3 className="details-title fs-3 ">STEPCONE 2024 GALLERY</h3>

                                <div className="bg-primary scrollimgs rounded-3 overflow-hidden">
                                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={img1} class="d-block w-100 rounded-3" alt="..." />
                                            </div>
                                            <div className="carousel-item" >
                                                <img src={img2} class="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={img3} class="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={img4} class="d-block w-100" alt="..." />
                                            </div> <div className="carousel-item">
                                                <img src={img5} class="d-block w-100" alt="..." />
                                            </div> <div className="carousel-item">
                                                <img src={img6} class="d-block w-100" alt="..." />
                                            </div> <div className="carousel-item">
                                                <img src={img7} class="d-block w-100" alt="..." />
                                            </div> <div className="carousel-item">
                                                <img src={img8} class="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={img9} class="d-block w-100" alt="..." />
                                            </div> <div className="carousel-item">
                                                <img src={img10} class="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        {/* Previous Button */}
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#carouselExampleAutoplaying"
                                            data-bs-slide="prev"
                                        >
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        {/* Next Button */}
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#carouselExampleAutoplaying"
                                            data-bs-slide="next"
                                        >
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </center>
                        </div>

                        {/* video */}
                        <div className="video w-100 rounded-3" id="video-sc">
                            <center><h3 className="details-title fs-3">STEPCONE 2K25</h3></center>
                            <video src={stepconevid} controls className="rounded-2"></video>
                        </div>

                        {/* query */}
                        <div className="query w-100 bg-dark" id="query-sc">
                            <h3 className="details-title fs-3">ANY QUERIES</h3>
                            <hr />
                            <form action="" className="w-100 bg-dark" onSubmit={sendQueryToDb}>
                                <div className="my-2">
                                    <label htmlFor="query">Query</label> <br />
                                    <input required type="text" name="query" id="query" className="details-input" placeholder="Enter Your Query" />

                                </div>
                                <div className="my-5">
                                    <label htmlFor="query">Mobile Number</label> <br />
                                    <input type="text" required name="mobile" id="mobile" className="details-input" placeholder="Enter Your Mobile" />

                                </div>
                                <div>
                                    {/* <button className="details-btn w-auto btn btn-secondary text-light" onClick={sendQueryToDb}> */}

                                    {/* /                                    </button> */}
                                    <input type="submit" value="Submit" className=" details-btn w-auto btn btn-secondary text-light" />
                                </div>
                            </form>

                        </div>

                        {/* general */}
                        <div className="general-main text-wrap" id="general-reg">
                            <center><h3 className="details-title fs-3">General Registration</h3></center>
                            <hr />
                            <div className="mx-1 text-justify">
                                <h4 className="details-title text-info fs-5">Externals(Non-GMRIT Students):</h4>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    External participants are required to pay a registration fee of ₹600.
                                </div>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    Ensure the payment is made before the registration deadline.
                                </div>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    One-Day Comfortable Stay

                                </div>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    Delicious Meals
                                </div>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    Exclusive STEPCONE Kit
                                </div>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    Your email will be used for sharing important updates and resources.
                                </div>


                            </div>
                            <div className="mx-1 text-justify">

                                <h4 className="details-title fs-5 text-info my-3">Internals(GMRIT Students):</h4>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    Internal students can register for free.
                                </div>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    Ensure all necessary details are provided during registration
                                </div>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    Your email will be used for sharing important updates and resources.

                                </div>
                                <div className="general">
                                    <img src="https://www.seekpng.com/png/full/104-1043438_csgo-silver-png-banner-freeuse-library-csgo-silver.png" width="15px" alt="" />
                                    Providing accurate details ensures smooth communication throughout the event.
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <FooterDetails />
        </>
    );
};

export default Details;