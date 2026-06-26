import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import FooterDetails from './FooterDetails.jsx'
import eventsData from '../../public/Assets/events.json';
import { useNavigate } from "react-router-dom";
import "./Registrations.css"
import Navbar from './Navbar.jsx';
import AOS from 'aos';

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


const Registrations = () => {
    const centralEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "central") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const signatureEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "signature") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const frontlineEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "frontline") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const workshops = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "workshops") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const onsiteEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "onsite") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );


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
        // console.log(checkLoggedIn);
        // alert(data.isLoggedIn)
    }
    useEffect(() => {
        handleLoginBtn();
        // console.log(checkLoggedIn)
    })




    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            // once: true, // Whether animation should happen only once - while scrolling down
        });
        AOS.refresh(); // Refresh AOS to apply animations on dynamic content
    }, []);


    // const navigate = useNavigate();

    // const handleRegisterClick = (event) => {
    //     navigate("/event-register", { state: { event } });
    // };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    }, []);


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar />
            <div className='reg-main d-flex flex-column justify-content-center align-items-center'>
                <div className='reg-page-header rounded-3 row col m-auto '>
                    <div className='col col-6 col-sm-4 col-lg-2'>
                        {/* <Link to="#central" > */}
                        <button onClick={() => scrollToSection('central')} className="event-header-btn rounded-2">
                            Central
                        </button>
                        {/* </Link> */}
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        {/* <Link to="#signature"> */}
                        <button onClick={() => scrollToSection('signature')} className="event-header-btn rounded-2">
                            Signature
                        </button>
                        {/* </Link> */}
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        {/* <a href="#frontline"> */}
                        <button className="event-header-btn rounded-2" onClick={() => scrollToSection('frontline')}>
                            Frontline
                        </button>
                        {/* </a> */}
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        {/* <a href="#onsite"> */}
                        <button className="event-header-btn rounded-2" onClick={() => scrollToSection('onsite')}>
                            On-Site
                        </button>
                        {/* </a> */}
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        {/* <a href="#workshops"> */}
                        <button className="event-header-btn rounded-2" onClick={() => scrollToSection('workshops')}>
                            Workshops
                        </button>
                        {/* </a> */}
                    </div>
                </div>

                <div >
                    <div className="dublicate-div ">

                    </div >
                    <div className='events-data'>
                        {/* for the central events */}
                        <div className="central d-flex flex-column justify-content-center align-items-center pt-3" id='central'>
                            <h2 className="reg-title border-bottom border-2 mb-5 fs-2">Central Events</h2>
                            <div className='d-flex justify-content-around align-items-center flex-wrap' data-aos='fade-up' data-aos-duration='500'>
                                {
                                    centralEvents.map((event, index) => (
                                        <div className="card reg-card m-3" key={index}>
                                            <div className="details">
                                                <div className="poster">
                                                    <img className='reg-poster-images' loading="lazy" src={imageMap[event.image]} alt="event image" /> {/* Ensure event.imageUrl is valid */}
                                                </div>
                                                <h4 className='text-center'>{event.name}({event.dept})</h4>
                                                <h5 className='text-center'>Fee: ₹{event.id == 1 ? "Per head " : ""}{event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_@&&& 530$215 && --login")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Ensure event.registrationLink is valid */}
                                                                </button>
                                                            </Link>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* for the signature events */}
                        <div className="signature d-flex flex-column justify-content-center align-items-center pt-3" id='signature'>
                            <h2 className="reg-title border-bottom border-2 mb-5 fs-2">Signature Events</h2>
                            <div className='d-flex justify-content-around align-items-center flex-wrap' data-aos='fade-up' data-aos-duration='500'>
                                {
                                    signatureEvents.map((event, index) => (
                                        <div className="card reg-card m-3" key={index}>
                                            <div className="details">
                                                <div className="poster">
                                                    <img className='reg-poster-images' loading="lazy" src={imageMap[event.image]} alt="event image" /> {/* Ensure event.imageUrl is valid */}
                                                </div>
                                                <h4 className='text-center'>{event.name}({event.dept})</h4>
                                                <h5 className='text-center'>₹{event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_@&&& 530$215 && --login")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Ensure event.registrationLink is valid */}
                                                                </button>
                                                            </Link>
                                                        )
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        {/* for the frontline events */}
                        <div className="frontline d-flex flex-column justify-content-center align-items-center pt-3" id='frontline' >
                            <h2 className="reg-title border-bottom border-2 mb-5 fs-2">Frontline Events</h2>
                            <div className='d-flex justify-content-around align-items-center flex-wrap' data-aos='fade-up' data-aos-duration='500'>
                                {
                                    frontlineEvents.map((event, index) => (
                                        <div className="card reg-card m-3" key={index}>
                                            <div className="details">
                                                <div className="poster">
                                                    <img className='reg-poster-images' loading="lazy" src={imageMap[event.image]} alt="event image" /> {/* Ensure event.imageUrl is valid */}
                                                </div>
                                                <h4 className='text-center'>{event.name}({event.dept})</h4>
                                                <h5 className='text-center'>₹{event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_@&&& 530$215 && --login")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Ensure event.registrationLink is valid */}
                                                                </button>
                                                            </Link>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        {/* for the onsite events */}
                        <div className="onsite d-flex flex-column justify-content-center align-items-center  pt-3" id='onsite' >
                            <h2 className="reg-title border-bottom border-2 mb-5 fs-2">On-Site Events</h2>
                            <div className='d-flex justify-content-around align-items-center flex-wrap' data-aos='fade-up' data-aos-duration='500'>
                                {
                                    onsiteEvents.map((event, index) => (
                                        <div className="card reg-card m-3" key={index}>
                                            <div className="details">
                                                <div className="poster">
                                                    <img className='reg-poster-images' loading="lazy" src={imageMap[event.image]} alt="event image" /> {/* Ensure event.imageUrl is valid */}
                                                </div>
                                                <h4 className='text-center'>{event.name}({event.dept})</h4>
                                                <h5 className='text-center'>₹{event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_@&&& 530$215 && --login")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Ensure event.registrationLink is valid */}
                                                                </button>
                                                            </Link>
                                                        )
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        {/* for the workshops*/}
                        <div className="workshops d-flex flex-column justify-content-center align-items-center pt-3" id='workshops'>
                            <h2 className="reg-title border-bottom border-2 mb-5 fs-2">Workshops</h2>
                            <div className='d-flex justify-content-around align-items-center flex-wrap' data-aos='fade-down' data-aos-duration='500' >
                                {
                                    workshops.map((event, index) => (
                                        <div className="card reg-card m-3" key={index}>
                                            <div className="details">
                                                <div className="poster">
                                                    <img className='reg-poster-images' loading="lazy" src={imageMap[event.image]} alt="event image" /> {/* Ensure event.imageUrl is valid */}
                                                </div>
                                                <h4 className='text-center  fs-5'>{event.name} ({event.dept})</h4>
                                                <h5 className='text-center'>₹{event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && event.registrationFee != "closed" && (
                                                            <Link to={`/${encodePath("/stepcone_$_@&&& 530$215 && --login")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Ensure event.registrationLink is valid */}
                                                                </button>
                                                            </Link>
                                                        )
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-5 reg-footer-div'>

                </div>
            </div>
            <FooterDetails />
        </>
    )
}

export default Registrations;
