import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Navbar from './Navbar';
import './CheckoutEvent.css';
import razorpay from '/Assets/razorpay_gst.jpg';


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



const CheckoutEvent = () => {


  const checkimg = {
    FunFusion: FunFusion,
    CiviLogic: CiviLogic,
    Hydrohike20: HydroHike,
    MarvelModelling20: MarvelModelling,
    GISForImageProcessing: GisWorkshop,
    CADMANIA: Cad_Mania,
    CNCCODATHON: Cnc_Codethon,
    CIPHERCRACK: Cypher_Crack,
    JALVEGA: Jal_Vega,
    ConditionMonitoringWorkshop: conditionMonitoring,
    EmpoweringMechanicalwithML: mechWithMl,
    CircuitDebugging: Circuit_Debugging,
    FOXHUNT: Fox_Hunt,
    MindSpark: Mind_Spark,
    Panchatantra: Panchatantra,
    RoboRace: Robo_Race,
    SensorsSensingProgramming: Sensors,
    Tinkercad: Tinker_Cad,
    GPL: Gpl,
    StartupIdeaContest: StartupIdeaContest,
    PaperPresentation: PaperPresentation,
    ProjectDesignContest: ProjectExhibition,
    AIforEngineeringApplications: aiForEng,
    CodeSparkCircuitDesign: codeSpark,
    Diode: diode,
    DroneNavigationChallenge: droneNavChallenge,
    EngineeringParadoxEnigma: engParadox,
    PowerPathChallenge: powerPathChallenge,
    DataCraze: dataCraze,
    exploreSky: exploreSky,
    Hackhub: hackHub,
    LevelUpTheArenaofChampions: levelUp,
    LLM: llm,
    PowerBI: powerBi,
    ReelStudio: reelsStudio,
    CodeRefactor: refactor,
    TechnoHunt: technoHunt,
    TradeMasters: tradeMasters,
    WebAstra: webAstra,
    TrailofTowerstoTreasureTTT: Ttt1,
    DroneTechnology: droneTechnology
  };




  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const [FormDataValue, setFormDataValue] = useState({});
  const formDataValue = location.state?.formDataValue ?? {};
  const [total, setTotal] = useState(null);
  const [gst, setGst] = useState(null);

  useEffect(() => {
    if (formDataValue) {
      setFormDataValue(formDataValue);
    }
  }, [formDataValue]);


  const calculateTotal = () => {
    if (!FormDataValue.amount || isNaN(FormDataValue.amount) || FormDataValue.amount <= 0) {
      return;
    }



    const x = parseFloat(FormDataValue.amount);
    const totalAmount = x / 0.9764;
    const totalCeiled = Math.ceil(totalAmount * 100) / 100; // Ceiling to 2 decimal places
    const gstAmount = totalCeiled - x; // GST amount

    setTotal(totalCeiled);
    setGst(Math.ceil(gstAmount * 100) / 100); // Ceiling GST amount to 2 decimals
  };


  useEffect(
    () => {
      calculateTotal();
    }, [FormDataValue, FormDataValue.amount, formDataValue]
  );


  // THIS IS FOR THE PHONEPE GATEWAY
  const handleCheckout = async () => {

    try {
      setLoading(true);
      //     // Convert JSON to URL parameters
      const encodeData = encodeURIComponent(JSON.stringify(FormDataValue))

      // Construct the full URL with query parameters
      // const url = `/stepcone/stepcone_backend/qr_interface_temp.php?${queryString}`;
      const url = `/stepcone/stepcone_backend/paymentgateway.php?formdata=${encodeData}`;

      // Redirect to PHP page with data in URL
      window.location.href = url;
      setLoading(false);

    } catch (error) {
      console.log("Error initiating QR Gateway:", error);
    }
  }
  // THIS IS FOR THE QR GATEWAY
  // const handleQrGateway = async () => {
  //   try {
  //     // Convert JSON to URL parameters
  //     // const queryString = new URLSearchParams(formDataValue).toString();
  //     const encodeData=encodeURIComponent(JSON.stringify(formDataValue))

  //     // Construct the full URL with query parameters
  //     // const url = `/stepcone/stepcone_backend/qr_interface_temp.php?${queryString}`;
  //     const url = `/stepcone/stepcone_backend/qr_interface_temp.php?formdata=${encodeData}`;

  //     // Redirect to PHP page with data in URL
  //     window.location.href = url;

  //   } catch (error) {
  //     console.log("Error initiating QR Gateway:", error);
  //   }
  // };


  console.log(FormDataValue);
  // console.log("Your details", formDataValue.email);
  // console.log("2-Your details", formDataValue['email']);

  return (
    <>
      <div className='position-absolute checkout-nav top-0'>
        <Navbar />
      </div>
      <div className='checkout-main  '>
        <div className="container-fluid">
          <div className="checkout-details  row ">

            <div className="checkout-left col-12 col-md-6 col-lg-4 my-2  text-center">
              <div className='  p-2 rounded fs-5 event-checkout-hdng'>Event</div>
              <div className='p-2 fs-5 border-bottom'>{FormDataValue.eventName}</div>

              <div className='p-2'>
                <img
                  className='checkout-event-img col-10 col-md-8 rounded'
                  src={FormDataValue.eventName ? checkimg[FormDataValue.eventName.replace(/[^a-zA-Z0-9]/g, "")] : ''}
                  alt=""
                />
              </div>
            </div>

            <div className="checkout-mid  col-12 col-md-6 col-lg-4 my-2 text-center">
              <div className='  p-2 rounded fs-5 event-checkout-hdng'>Team Mails</div>
              <div className="team-members">
                <p className="checkout-teamlead p-2 text-wrap">
                  1. {FormDataValue.teamLead}
                </p>
                {
                  FormDataValue.members &&
                  FormDataValue.members.map((teamMember, index) => (
                    <div className='p-2' key={index}>
                      <p className='checkout-team-member text-wrap'>{index + 2}. {teamMember}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="checkout-right col-12 col-md-6 col-lg-4 my-2 text-center">
              <div className="checkout-amount">
                <div className='  p-2 rounded fs-5 event-checkout-hdng'>Payment Details</div>
                <div className='p-2 my-2 '>Amount - ₹{FormDataValue.amount}</div>
                <div className='p-2 my-2 '>GST - ₹{gst ? gst : 'Unknown'}</div>
                <div className='p-2 my-2 '>Total - ₹{FormDataValue.amount + gst}</div>
                <button className='my-3 check-proceed-pay' onClick={handleCheckout}>Proceed to Payment</button>
              </div>
            </div>

            <div className='razorpay-gst w-100 d-flex my-5 justify-content-center '>
              <img className='rounded-4 razorpay-img img-fluid col-12 col-sm-8 col-md-6 col-lg-4' src={razorpay} alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutEvent;