import React, { useEffect, useState } from 'react';
import './GeneralRegistration.css'
import axios from 'axios';
import { useLocation, useNavigate, Link } from "react-router-dom";
import PaymentLoadingAnimation from './PaymentLoadingAnimation.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';


import Navbar from './Navbar.jsx';
const GeneralRegistration = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Smooth scrolling effect
    });
  }, []); // Empty dependency array ensures it runs only on component mount

  // PHONEPE GATEWAY

  // const handleAccomClick = async (amount) => {
  //   setLoading(true);
  //   try {
  //     const reg_amount = {
  //       amount: amount
  //     }
  //     const response = await axios.post('/stepcone/stepcone_backend/g_reg_gateway.php', reg_amount);
  //     console.log("this is the response data", response.data);

  //     const resData = response.data.responseData;
  //     const url = resData.data.instrumentResponse.redirectInfo.url;

  //     console.log("this is response data", resData)
  //     if (resData && url) {
  //       // Store the form data for use after redirect
  //       // sessionStorage.setItem("formDataValue", JSON.stringify(formDataValue));
  //       // Redirect to the payment gateway
  //       alert("Payment Initiated")
  //       sessionStorage.setItem("accomPaymentStatus", "pending");
  //       window.location.href = url;

  //       // Redirecting to payment gateway URL
  //     }
  //   } catch (error) {
  //     console.error("Error initiating payment:", error);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }

  // QR GATEWAY
  const handleAccomClick = (amount) => {
    alert("registrations are closed!");
    return false;
    exit();
    setLoading(true);
    try {

      const url = `/stepcone/stepcone_backend/g_reg_gateway.php?amount=${amount}`;
      // console.log("this is the response data", response.data);
      alert("Payment Initiated");
      window.location.href = url;


      // Redirect to the payment gateway

      // Redirecting to payment gateway URL
    }
    catch (error) {
      console.error("Error initiating payment:", error);
    }
    finally {
      setLoading(false);
    }
  }


  // PHONEPE GATEWAY

  // const handleRegPaymentCallback = async () => {
  //   const accomPaymentStatus = sessionStorage.getItem("accomPaymentStatus");
  //   if (accomPaymentStatus === "pending") {
  //     setLoading(true);

  //     try {
  //       const response = await axios.post("/stepcone/stepcone_backend/general_registration.php");
  //       console.log("final data", response.data);



  //       if (response.data.status === "success") {
  //         sessionStorage.setItem("accomPaymentStatus", "completed");
  //         // Reset payment status after a successful callback
  //         alert(response.data.message);
  //         navigate("/");
  //         // window.location.href = "http://localhost/stepcone/";
  //       }
  //       else {
  //         alert(response.data.message);
  //         // window.location.href = "http://localhost/stepcone/";
  //       }
  //     }
  //     catch (error) {
  //       alert("Error: Try again");
  //       console.log(error);
  //     }
  //     sessionStorage.setItem("accomPaymentStatus", "completed");
  //     setLoading(false);

  //   }
  // }


  // useEffect(() => {
  //   handleRegPaymentCallback();
  // }, []);


  return (
    <>
      <Navbar />
      <div className='accom-main py-3'>
        <PaymentLoadingAnimation loading={loading} />
        <div className="title-box">
          <h1 className="title">GMRIT WELCOMES YOU</h1>
          <hr style={{ width: '80%' }} />
        </div>

        <div className="acc container">
          <div className="cards row">
            <div className="c1">
              <center>
                <div className="basic">General Registration</div>
              </center>
              <hr />
              <div className='row d-flex justify-content-evenly'>
                <div className='d-flex col-11 col-lg-5 pay-600 flex-column justify-content-around'>
                  <center><h5 className='border-bottom py-2'>With Accomodation</h5></center>
                  <div className="list d-flex flex-column">
                    <div>
                      <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                      Two-Day Stay
                    </div>

                    <div className='des'>
                      <small>
                        Enjoy a clean and cozy stay near the event venue to ensure you're refreshed and ready.</small>
                    </div>
                  </div>
                  <div className="list d-flex flex-column">
                    <div>
                      <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                      Food
                    </div>

                    <div className='des'>
                      <small>Meals provided for two days, catering to different food preferences to keep you energized throughout the event.</small>
                    </div>
                  </div>
                  <div className="list d-flex flex-column">
                    <div>
                      <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                      Exclusive STEPCONE Kit
                    </div>

                    <div className='des'>
                      <small>Get the official STEPCONE Kit loaded with materials, goodies to enhance your event experience.</small>
                    </div>
                  </div>
                  <div className="list d-flex flex-column">
                    <div>
                      <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                      Culturals and all events including Overnight Events
                    </div>

                    <div className='des'>
                      <small>Will have opportunity to attend the culturals, all Events and also Overnight events(  HackHub, Web-Astra, CAD Mania, Tinker CAD, DIODE, Marvel Modelling ) during fest.</small>
                    </div>
                  </div>
                  <div className="list">
                    <div className='text-warning'>
                      Note:"Register now to secure your spot and enjoy these amazing benefits!"
                    </div>
                  </div>
                  <center>

                    <button className='accom-btn m-2'
                      onClick={() => handleAccomClick("closed")}
                    >
                      PAY
                      ₹600 + GST(₹14.51)/-
                    </button>
                  </center>
                </div>
                <div className='d-flex pay-400 col-11 col-lg-5 flex-column justify-content-around'>
                  <center><h5 className='border-bottom   pb-2'>Without Accomodation</h5></center>

                  <div className="list d-flex flex-column">
                    <div>
                      <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                      Timing and Venue Guidelines
                    </div>

                    <div className='des'>
                      <small>Participants are allowed only between 9:00 AM and 5:00 PM for the two days for events within the college premises.</small>
                    </div>
                  </div>

                  <div className="list d-flex flex-column">
                    <div>
                      <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                      Not allowed for Culturals and Overnight Events
                    </div>

                    <div className='des'>
                      <small>
                        Stepcone event timings are from 9:00 AM to 5:00 PM. Participants who have paid ₹400 are not permitted to attend cultural events and overnight events( HackHub, Web-Astra, CAD Mania, Tinker CAD, DIODE, Marvel Modelling
                        ).</small>
                    </div>
                  </div>

                  <div className="list d-flex flex-column">
                    <div className='text-warning'>
                      <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                      NOTICE
                    </div>

                    <div className='des'>
                      <small className='text-warning'>
                        All participants paying ₹400 for fest registration are required to enroll in at least one event to be eligible for STEPCONE fest.</small>
                    </div>
                  </div>
                  <center>

                    <button className='accom-btn m-2'
                      onClick={() => handleAccomClick("closed")}
                    >
                      PAY
                      ₹400 + GST(₹9.67)/-
                    </button>
                  </center>
                </div>
              </div>
              <center>

                <Link to='/'>
                  <button className='accom-btn m-2'
                  >
                    PAY
                    LATER
                  </button>
                </Link>

              </center>
            </div>

            <div className="conct-us col-4">
              <h3>Contact Us</h3>
              <hr />
              <div className="contact ">
                <div>
                  <img src="https://bearable.app/wp-content/uploads/2019/10/Group-386.png" alt="" />
                </div>
                <div className='contact-names'>
                  <h1>M.Manideep</h1>
                  <h1>3rd, CIVIL</h1>
                  <h1>PhNo:7989253599</h1>
                </div>
              </div>
              <div className="contact">
                <div>
                  <img src="https://bearable.app/wp-content/uploads/2019/10/Group-386.png" alt="" />
                </div>
                <div>
                  <h1>J.S.Vardhan</h1>
                  <h1>2nd,MECH</h1>
                  <h1>PhNo:8125849189</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterDetails/> */}
    </>
  );
};

export default GeneralRegistration;