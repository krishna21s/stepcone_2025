import React, { useEffect, useState } from 'react';
import './GeneralRegistration.css'
import axios from 'axios';
import { useLocation, useNavigate, Link } from "react-router-dom";
import PaymentLoadingAnimation from './PaymentLoadingAnimation.jsx';
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

  const handleAccomClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('api/stepcone_backend/g_reg_gateway.php');
      console.log("this is the response data", response.data);

      const resData = response.data.responseData;
      const url = resData.data.instrumentResponse.redirectInfo.url;

      console.log("this is response data", resData)
      if (resData && url) {
        // Store the form data for use after redirect
        // sessionStorage.setItem("formDataValue", JSON.stringify(formDataValue));
        if (confirm("Payment Initiated") === true) {
          sessionStorage.setItem("accomPaymentStatus", "pending");
          window.location.href = url;
        }

        // Redirecting to payment gateway URL
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
    finally {
      setLoading(false);
    }
  }


  const handleRegPaymentCallback = async () => {
    const accomPaymentStatus = sessionStorage.getItem("accomPaymentStatus");
    if (accomPaymentStatus === "pending") {
      setLoading(true);

      try {
        const response = await axios.post("api/stepcone_backend/general_registration.php");
        console.log("final data", response.data);



        if (response.data.status === "success") {
          sessionStorage.setItem("accomPaymentStatus", "completed");
          // Reset payment status after a successful callback
          alert(response.data.message);
          navigate("/");
          // window.location.href = "/";
        }
        else {
          alert(response.data.message);
        }
      }
      catch (error) {
        alert("Error: Try again");
        console.log(error);
      }
      sessionStorage.setItem("accomPaymentStatus", "completed");
      setLoading(false);

    }
  }


  useEffect(() => {
    handleRegPaymentCallback();
  }, []);


  return (
    <>
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

              <div className='d-flex flex-column justify-content-around'>

                <div className="list d-flex flex-column">
                  <div>
                    <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                    One-Day Comfortable Stay
                  </div>

                  <div className='des'>
                    <small>Enjoy a clean and cozy stay near the event venue to ensure you're refreshed and ready.</small>
                  </div>
                </div>
                <div className="list d-flex flex-column">
                  <div>
                    <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                    Delicious Meals
                  </div>

                  <div className='des'>
                    <small>Savor nutritious and delicious meals provided for two days, catering to various dietary preferences to keep you energized throughout the event</small>
                  </div>
                </div>
                <div className="list d-flex flex-column">
                  <div>
                    <img className="right" src="https://static.vecteezy.com/system/resources/previews/022/675/975/non_2x/check-correct-3d-icon-free-png.png" alt="" />
                    Exclusive STEPCONE Kit
                  </div>

                  <div className='des'>
                    <small>Get the official STEPCONE Kit loaded with materials, goodies, and souvenirs to enhance your event experience.</small>
                  </div>
                </div>
                <div className="list">
                  <div className='text-warning'>
                    Note:"Register now to secure your spot and enjoy these amazing benefits!"
                  </div>
                </div>
              </div>
              <center>
                <button className='accom-btn'
                  onClick={handleAccomClick}
                >
                  PAY
                  600/-
                </button>


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
                  <h1>Krishna</h1>
                  <h1>CSE</h1>
                  <h1>9854653578</h1>
                </div>
              </div>
              <div className="contact">
                <div>
                  <img src="https://bearable.app/wp-content/uploads/2019/10/Group-386.png" alt="" />
                </div>
                <div>
                  <h1>Prashanth</h1>
                  <h1>AIML</h1>
                  <h1>8954653578</h1>
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