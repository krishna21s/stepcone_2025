import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./EventCard.css";
import AOS from 'aos';
import { useNavigate } from "react-router-dom";

// CENTRAL IMPORTS
import Gpl from '/Assets/events_info/POSTERS/CENTRAL/GPL.jpg';
import PaperPresentation from '/Assets/events_info/POSTERS/CENTRAL/PAPER_PRESENTATION.png';
import ProjectExhibition from '/Assets/events_info/POSTERS/CENTRAL/PROJECT_EXHIBITION_CONTEST.jpg';
import StartupIdeaContest from '/Assets/events_info/POSTERS/CENTRAL/STARTUP_IDEA_CONTEST.png';

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
const decodePath = (encodedPath) => atob(encodedPath); // 

const EventCard = ({ event }) => { // Accept the event object as a prop
    const cardContentRef = useRef(null);
    const imgDivRef = useRef(null);
    const imgRef = useRef(null);
    const headingsRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            // once: true, // Whether animation should happen only once - while scrolling down
        });
        AOS.refresh(); // Refresh AOS to apply animations on dynamic content
    }, []);


    const handleMouseMove = (e) => {
        const cardContent = cardContentRef.current;
        const imgDiv = imgDivRef.current;
        const img = imgRef.current;
        const headings = headingsRef.current;
        const button = buttonRef.current;

        const rect = cardContent.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const imageMoveX = (x - centerX) / 10;
        const imageMoveY = (y - centerY) / 10;

        imgDiv.style.transform = `translateZ(50px)`;
        img.style.transform = `translateX(${imageMoveX}px) translateY(${imageMoveY}px) scale(1.05)`;

        const headingMoveX = (x - centerX) / 20;
        const headingMoveY = (y - centerY) / 20;

        headings.style.transform = `translateX(${headingMoveX}px) translateY(${headingMoveY}px)`;
        button.style.transform = `translateX(${headingMoveX}px) translateY(${headingMoveY}px)`;
    };

    const handleMouseLeave = () => {
        const imgDiv = imgDivRef.current;
        const img = imgRef.current;
        const headings = headingsRef.current;
        const button = buttonRef.current;

        imgDiv.style.transform = `translateZ(0px)`;
        img.style.transform = `translateX(0) translateY(0) scale(1)`;
        headings.style.transform = `translateX(0) translateY(0)`;
        button.style.transform = `translateX(0) translateY(0)`;
    };


    const handleEventDetailsClick = () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "instant", // Adds a smooth scrolling effect
        });
        // Perform other actions like navigation here
        // console.log(`Button clicked for event: ${event.name}`);
    };


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
        Tinker_Cad: Tinker_Cad,
        Gpl: Gpl,
        StartupIdeaContest: StartupIdeaContest,
        PaperPresentation: PaperPresentation,
        ProjectExhibition: ProjectExhibition,
    };



    const navigate = useNavigate();

    const handleDetailsClick = (event) => {
        navigate(`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ &&77886756event-details")}`, { state: { event } });
    };



    return (
        <div className="event-card-parent" >
            <div id="card" className="event-card p-3" data-aos="fade-up-down">
                <div
                    id="card-content"
                    ref={cardContentRef}
                    className="card-content d-flex flex-column justify-content-evenly align-items-center"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        ref={headingsRef}
                        className="headings d-flex flex-column justify-content-around align-items-center"
                    >
                        <h2 className="fs-5 text-center ">{event.name}({event.dept})</h2> {/* Display event name */}
                    </div>
                    <div
                        ref={imgDivRef}
                        className=" img-div d-flex justify-content-center "
                    >
                        <img ref={imgRef} className="img-fluid" loading="lazy" srcSet={imageMap[event.image]} alt={event.name} />{/* Display event image */}
                    </div>
                    <div
                        ref={buttonRef}
                        className="navigate-register d-flex justify-content-center"
                    >
                        {/* Use Link for navigation */}
                        <button className=" event-details-btn text-white"
                            onClick={() => handleDetailsClick(event)}
                        >
                            Event Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default EventCard;
