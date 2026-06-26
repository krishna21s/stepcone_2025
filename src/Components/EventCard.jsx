import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./EventCard.css";
import AOS from 'aos';
import { useNavigate } from "react-router-dom";


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
