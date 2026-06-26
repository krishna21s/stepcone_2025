import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import './EventDetails.css'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import AOS from 'aos';


//Temp logo images
import Fa_Logo from "/Assets/fa_stud_logo.png"
import Stud_Logo from "/Assets/stud.png";


// CENTRAL IMPORTS
import Gpl from '/Assets/events_info/POSTERS/CENTRAL/GPL.jpg';
import PaperPresentation from '/Assets/events_info/POSTERS/CENTRAL/PAPER_PRESENTATION.jpg';
import ProjectExhibition from '/Assets/events_info/POSTERS/CENTRAL/PROJECT_EXHIBITION_CONTEST.jpg';
import StartupIdeaContest from '/Assets/events_info/POSTERS/CENTRAL/STARTUP_IDEA_CONTEST.jpg';


// CIVIL IMPORTS
import CiviLogic from '/Assets/events_info/POSTERS/CE/civi_logic.jpg'
import FunFusion from '/Assets/events_info/POSTERS/CE/fun_fusion.jpg'
import HydroHike from '/Assets/events_info/POSTERS/CE/hydro_hike_2.o.jpg'
import MarvelModelling from '/Assets/events_info/POSTERS/CE/marvel_modelling.jpg'
import Ttt1 from '/Assets/events_info/POSTERS/CE/TTT1.jpg'
import GisWorkshop from '/Assets/events_info/POSTERS/CE/GIS_for_Image_Processing.jpg'


// MECH IMPORTS
import Cad_Mania from '/Assets/events_info/POSTERS/MECH/CAD_MANIA.jpg';
import Cnc_Codethon from '/Assets/events_info/POSTERS/MECH/CNC-CODETHON.jpg';
import Cypher_Crack from '/Assets/events_info/POSTERS/MECH/cipher_crack.jpg';
import Jal_Vega from '/Assets/events_info/POSTERS/MECH/JAL_VEGA.jpg';
import conditionMonitoring from '/Assets/events_info/POSTERS/MECH/COND_MONITORING.jpg';
import mechWithMl from '/Assets/events_info/POSTERS/MECH/ME_ML.jpg';



//ECE IMPORTS
import Circuit_Debugging from "/Assets/events_info/POSTERS/ECE/CIRCUIT_DEBUGGING.jpg";
import Fox_Hunt from "/Assets/events_info/POSTERS/ECE/fox_hunt.jpg";
import Mind_Spark from "/Assets/events_info/POSTERS/ECE/MIND_SPARK.jpg";
import Panchatantra from "/Assets/events_info/POSTERS/ECE/panchatantra.jpg";
import Robo_Race from "/Assets/events_info/POSTERS/ECE/robo_race_poster_(ECE).jpg";
import Sensors from "/Assets/events_info/POSTERS/ECE/SENSORS.jpg";
import Tinker_Cad from "/Assets/events_info/POSTERS/ECE/TINKER_CAD.jpg";


// EEE IMPORTS  
import aiForEng from "/Assets/events_info/POSTERS/EEE/ai_for_engineering_applications.jpg";
import codeSpark from "/Assets/events_info/POSTERS/EEE/CODE_SPARK.jpg";
import diode from "/Assets/events_info/POSTERS/EEE/DIODE.jpg";
import droneNavChallenge from "/Assets/events_info/POSTERS/EEE/DRONE_NAVIGATION_CHALLENGE.jpg";
import engParadox from "/Assets/events_info/POSTERS/EEE/ENGINEERING_PARADOX.jpg";
import powerPathChallenge from "/Assets/events_info/POSTERS/EEE/POWER_PATH_CHALLENGE.jpg";


// CSE IMPORTS
import dataCraze from "/Assets/events_info/POSTERS/CSE/Data_Craze.jpg";
import exploreSky from "/Assets/events_info/POSTERS/CSE/EXPLORING_THE_SKY.jpg";
import hackHub from "/Assets/events_info/POSTERS/CSE/HACK_HUB.jpg";
import levelUp from "/Assets/events_info/POSTERS/CSE/LEVEL_UP.jpg";
import llm from "/Assets/events_info/POSTERS/CSE/llm.jpg";
import powerBi from "/Assets/events_info/POSTERS/CSE/power_BI.jpg";
import reelsStudio from "/Assets/events_info/POSTERS/CSE/REELS_STUDIO.jpg";
import refactor from "/Assets/events_info/POSTERS/CSE/refactor.jpg";
import technoHunt from "/Assets/events_info/POSTERS/CSE/techno_hunt.jpg";
import tradeMasters from "/Assets/events_info/POSTERS/CSE/trade_masters.jpg";
import webAstra from "/Assets/events_info/POSTERS/CSE/web_astra.jpg";
import droneTechnology from "/Assets/events_info/POSTERS/CSE/droneTech.jpg";


const encodePath = (path) => btoa(path); // Encode using Base64
const decodePath = (encodedPath) => atob(encodedPath); // 

const EventDetails = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant', // Smooth scrolling effect
        });
    }, []);
    const location = useLocation();
    console.log(location.state);
    const { event } = location.state || {}; // Retrieve the event data
    const facCoordinators = event.facultyCoordinators;
    const studCoordinators = event.studentCoordinators;
    // const eventRuleBook =  ; 
    if (!event) {
        return <div>No event details available.</div>; // Handle cases where event data is not passed
    }

    //opening the pdf when the rule book is clicked

    const handlePdfClick = () => {
        // const basePath = "/mystepcone";

        // // Add basePath only if it is not already present
        // const filePath = event.ruleBook.startsWith(basePath)
        //     ? event.ruleBook
        //     : `${basePath}${event.ruleBook}`;

        window.open(`Assets/events_info${event.ruleBook}`, "_blank"); // Open the file
    }
    const handlePsClick = () => {
        window.open(`Assets/events_info${event.problemStatements}`, "_blank"); // Open the file
    }



    const imageMap = {
        FunFusion: FunFusion,
        CiviLogic: CiviLogic,
        HydroHike: HydroHike,
        MarvelModelling: MarvelModelling,
        GisWorkshop: GisWorkshop,
        Cad_Mania: Cad_Mania,
        CncCodethon: Cnc_Codethon,
        Cypher_Crack: Cypher_Crack,
        Jal_Vega: Jal_Vega,
        conditionMonitoring: conditionMonitoring,
        mechWithMl: mechWithMl,
        Circuit_Debugging: Circuit_Debugging,
        Fox_Hunt: Fox_Hunt,
        Mind_Spark: Mind_Spark,
        Panchatantra: Panchatantra,
        Robo_Race: Robo_Race,
        Sensors: Sensors,
        Tinker_Cad: Tinker_Cad,
        Gpl: Gpl,
        StartupIdeaContest: StartupIdeaContest,
        PaperPresentation: PaperPresentation,
        ProjectExhibition: ProjectExhibition,
        aiForEng: aiForEng,
        codeSpark: codeSpark,
        diode: diode,
        droneNavChallenge: droneNavChallenge,
        engParadox: engParadox,
        powerPathChallenge: powerPathChallenge,
        dataCraze: dataCraze,
        exploreSky: exploreSky,
        hackHub: hackHub,
        levelUp: levelUp,
        llm: llm,
        powerBi: powerBi,
        reelsStudio: reelsStudio,
        refactor: refactor,
        technoHunt: technoHunt,
        tradeMasters: tradeMasters,
        webAstra: webAstra,
        Ttt1: Ttt1,
        droneTechnology: droneTechnology
    };



    // CHECKING WHETHER LOGGEDIN OR  NOT

    const [checkLoggedIn, setCheckLoggedIn] = useState("0");
    const handleLoginBtn = async () => {
        const res = await axios.get(
            "/stepcone/stepcone_backend/isloggedin.php"
        )

        const data = res.data;
        if (data.isLoggedIn) {
            setCheckLoggedIn(data.isLoggedIn);
        }
        console.log(data);
        // console.log(checkLoggedIn);
        // alert(data.isLoggedIn)
    }
    useEffect(() => {
        handleLoginBtn();
        // console.log(checkLoggedIn)
    })


    const navigate = useNavigate();

    const handleRegisterClick = (event) => {
        if (checkLoggedIn === "1") {
            navigate(`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --registrations")}`, { state: { event } });
        }
        else {
            alert("Please login first");
            navigate(`/${encodePath("/stepcone_$_@&&& 530$215 && --login")}`);
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration
            // once: true, // Whether animation should happen only once - while scrolling down
        });
        AOS.refresh(); // Refresh AOS to apply animations on dynamic content
    }, []);



    return (
        <>

            <div className='event-details-main '>
                <div className='container-fluid d-flex flex-column '>
                    <div className="event-back-btn border rounded-2">
                        <Link to={`/${encodePath("/stepcone_$_@&***)(714)530$215 && --event")}`} className="text-white back-btn w-25">Back</Link>
                    </div>
                    <div className="logo-eventName row min-height100VH justify-content-center align-items-center gap-2">
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 img-div d-flex flex-column align-items-center">
                            <img data-aos="fade-up-down" src={imageMap[event.image]} alt="Event Img" className='' />
                        </div>
                        <div className='col col-12 col-md-6 col-lg-6  col-xl-6 name text-center '>
                            <div>
                                <h1 className='details-event-name fs-2 pt-5 ' data-aos="fade-up-down">{event.name}<br />({event.dept})</h1>
                                <p className='text-white event-date fs-5 py-3 m-auto '>Event Date: {event.date}</p>
                            </div>
                            <div className="event-pdf py-2">
                                <a href='' className='  event-rulebook-btn  btn-md p-2 px-3 rounded-2 text-white' rel="noopener noreferrer" onClick={handlePdfClick}>Rule Book Pdf</a>
                            </div>
                            {
                                event.problemStatements && (
                                    <div className="event-pdf py-3">
                                        <a href='' className='  event-ps-btn   p-2 px-3 rounded-2 text-white' rel="noopener noreferrer" onClick={handlePsClick}>Problem Statements Pdf</a>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="about-event row min-height100VH  justify-content-around align-items-center">
                        <div className='col col-12 col-md-6'>
                            <h2 className='text-center py-3 border-bottom border-secondary border-2 about-event-hdng'>About Event</h2>
                            <div className="typewriter">
                                <p className='text-white text-justify event-description' data-aos="fade-up-down"> {event.description}</p>

                            </div>
                        </div>
                        <div className='about-prize col col-12 col-md-6 justify-content-center align-content-start text-center'>
                            <div className=''>
                                <h3 className='py-3 prize-money' data-aos="fade-up-down">Prize Money:
                                    <br />
                                    <h5 className='' data-aos="fade-up-down">First Prize: {event.firstPrize}</h5>
                                    <h5 className='' data-aos="fade-up-down">Second Prize: {event.secondPrize}</h5>
                                </h3>
                            </div>
                            <div className='pt-3' data-aos="fade-up-down">
                                <h3 className=' team-size'>Team Size: <h5>{event.teamSize}</h5></h3>
                            </div>
                            <div className='' data-aos="fade-up-down">
                                <h3 className='py-5 registration-fee'>Registration Fee: <h5>{event.id == 1 ? "Per head " : ""}{event.registrationFee}/-</h5></h3>

                                <button className='rounded-3 border details-register-btn '
                                    data-aos="fade-up-down"
                                    onClick={() => handleRegisterClick(event)}
                                >Register Event</button>
                            </div>
                        </div>
                    </div>

                    <div className="faculty-coordinators row min-height100VH">
                        <div className='col col-12 d-flex flex-column justify-content-center align-items-center'>
                            <h1 className='faculty-heading fs-1'>Faculty Co-ordinators</h1>
                        </div>
                        <div className="fa-stud-cards d-flex flex-wrap justify-content-center align-item-center gap-5" data-aos="fade-up-down">
                            {facCoordinators && facCoordinators.length > 0 ? (
                                facCoordinators.map((faculty, index) => (
                                    <div
                                        className="fa-stud-card-parent col col-12 col-md-4 d-flex flex-column justify-content-start align-items-center mb-3"
                                        key={index}
                                    >
                                        <div className="fa-stud-card border d-flex flex-column justify-content-around align-items-center">
                                            <div className="fa-stud-img">
                                                <img src={Fa_Logo} alt="Faculty Img" />
                                            </div>
                                            <div className="fa-stud-details">
                                                <h3>{faculty.name}</h3>
                                                <p className='text-light text-center'>{faculty.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-coordinators col-12 text-center mt-5">
                                    <h2>No Faculty Coordinators Assigned for This Event</h2>
                                </div>
                            )}
                        </div>
                    </div>


                    {/* <div className="student-coordinators row min-height100VH my-3">
                        <div className='col col-12 my-4 d-flex flex-column justify-content-center align-items-center'>
                            <h1 className='faculty-heading fs-1'>Student Co-ordinators</h1>
                        </div>
                        <div className="fa-stud-cards d-flex flex-wrap justify-content-center align-item-center gap-5">
                            {facCoordinators && facCoordinators.length > 0 ? (
                                studCoordinators.map((student, index) => (
                                    <div className='fa-stud-card-parent col col-12 col-md-4 d-flex flex-column justify-content-start align-items-center mb-3'>
                                        <div className="fa-stud-card border d-flex flex-column justify-content-around align-items-center">
                                            <div className="fa-stud-img">
                                                <img src={Stud_Logo} alt="Student Img" />
                                            </div>
                                            <div className="fa-stud-details" key={index}>
                                                <h3 className=''>{student.name}</h3>
                                                <p className='text-white text-center '>{student.details}</p>
                                                <h3 className=''></h3>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-coordinators col-12 text-center mt-5">
                                    <h2>No Student Coordinators Assigned for This Event</h2>
                                </div>
                            )
                            }

                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default EventDetails;