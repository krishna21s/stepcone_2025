import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import FooterDetails from './FooterDetails.jsx'
import eventsData from '../../public/Assets/events.json';
import { useNavigate } from "react-router-dom";
import "./Registrations.css"
import Navbar from './Navbar.jsx';
import AOS from 'aos';

// CIVIL IMPORTS
import CiviLogic from '/Assets/events_info/POSTERS/CE/CIVILOGIC.png'
import FunFusion from '/Assets/events_info/POSTERS/CE/FUNFUSION.png'
import HydroHike from '/Assets/events_info/POSTERS/CE/HYDROHIKE.png'
import MarvelModelling from '/Assets/events_info/POSTERS/CE/MARVEL_MODELLING.png'
import Ttt1 from '/Assets/events_info/POSTERS/CE/TTT1.png'
import GisWorkshop from '/Assets/events_info/POSTERS/CE/WORKSHOP.png'

// MECH IMPORTS
import Cad_Mania from '/Assets/events_info/POSTERS/MECH/CAD_MANIA.jpg';
import Cnc_Codethon from '/Assets/events_info/POSTERS/MECH/CNC_CODETHON.jpg';
import Condition_Monitoring from '/Assets/events_info/POSTERS/MECH/CONDITION_MONITORING.jpg';
import Cypher_Crack from '/Assets/events_info/POSTERS/MECH/CYPHER_CRACK.jpg';
import Eme_Ml from '/Assets/events_info/POSTERS/MECH/EME_ML.jpg';
import Jal_Vega from '/Assets/events_info/POSTERS/MECH/JAL_VEGA.jpg';

//ECE IMPORTS
import Circuit_Debugging from "/Assets/events_info/POSTERS/ECE/CIRCUIT_DEBUGGING.jpg";
import Fox_Hunt from "/Assets/events_info/POSTERS/ECE/FOX_HUNT.jpg";
import Mind_Spark from "/Assets/events_info/POSTERS/ECE/MIND_SPARK.jpg";
import Panchatantra from "/Assets/events_info/POSTERS/ECE/PANCHATANTRA.jpg";
import Robo_Race from "/Assets/events_info/POSTERS/ECE/ROBO_RACE.jpg";
import Sensors from "/Assets/events_info/POSTERS/ECE/SENSORS.jpg";
import Tinker_Cad from "/Assets/events_info/POSTERS/ECE/TINKER_CAD.jpg";


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
        Ttt1: Ttt1,
        GisWorkshop: GisWorkshop,
        Cad_Mania: Cad_Mania,
        Cnc_Codethon: Cnc_Codethon,
        Condition_Monitoring: Condition_Monitoring,
        Cypher_Crack: Cypher_Crack,
        Eme_Ml: Eme_Ml,
        Jal_Vega: Jal_Vega,
        Circuit_Debugging: Circuit_Debugging,
        Fox_Hunt: Fox_Hunt,
        Mind_Spark: Mind_Spark,
        Panchatantra: Panchatantra,
        Robo_Race: Robo_Race,
        Sensors: Sensors,
        Tinker_Cad: Tinker_Cad
    };


    // CHECKING WHETHER LOGGEDIN OR  NOT

    const [checkLoggedIn, setCheckLoggedIn] = useState("0");
    const handleLoginBtn = async () => {
        const res = await axios.get(
            "api/stepcone_backend/isloggedin.php"
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

    return (
        <>
            <Navbar />
            <div className='reg-main d-flex flex-column justify-content-center align-items-center'>
                <div className='reg-page-header rounded-3 row col m-auto '>
                    <div className='col col-6 col-sm-4 col-lg-2'>
                        <a href="#central">
                            <button className="event-header-btn  rounded-2 ">
                                Central
                            </button>
                        </a>
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        <a href="#signature">
                            <button className="event-header-btn rounded-2">
                                Signature
                            </button>
                        </a>
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        <a href="#frontline">
                            <button className="event-header-btn rounded-2">
                                Frontline
                            </button>
                        </a>
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        <a href="#onsite">
                            <button className="event-header-btn rounded-2">
                                On-Site
                            </button>
                        </a>
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        <a href="#workshops">
                            <button className="event-header-btn rounded-2 ">
                                Workshops
                            </button>
                        </a>
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
                                                <h5 className='text-center'>Fee: {event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Ensure event.registrationLink is valid */}
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && (
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
                                                <h5 className='text-center'>{event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Ensure event.registrationLink is valid */}
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && (
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
                                                <h5 className='text-center'>{event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Ensure event.registrationLink is valid */}
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && (
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
                                                <h5 className='text-center'>{event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Register btn to register the event-- */}
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && (
                                                            <Link to={`/${encodePath("/stepcone_$_@&&& 530$215 && --login")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Register btn to register the event-- */}
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
                                                <h4 className='text-center fs-5'>{event.name}({event.dept})</h4>
                                                <h5 className='text-center'>{event.registrationFee}/-</h5>
                                                <div className='reg-btn-div d-flex justify-content-center'>
                                                    {
                                                        checkLoggedIn === "1" && (
                                                            <Link to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`}
                                                                state={{ event }}
                                                            >
                                                                <button className='event-register-btn'
                                                                >
                                                                    REGISTER{/* Ensure event.registrationLink is valid */}
                                                                </button>
                                                            </Link>
                                                        )

                                                    }
                                                    {
                                                        checkLoggedIn === "0" && (
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