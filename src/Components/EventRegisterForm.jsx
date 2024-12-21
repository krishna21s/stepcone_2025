import React, { useState } from "react";
import { useEffect } from "react";

import "./EventRegisterForm.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import StepConeImg from '/Assets/STEPCONE[1].png';
import EventRegisterImg from '/Assets/eventregister[1].png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faIndianRupeeSign,
    faPeopleGroup,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import PaymentLoadingAnimation from "./PaymentLoadingAnimation.jsx";

const encodePath = (path) => btoa(path); // Encode using Base64
const decodePath = (encodedPath) => atob(encodedPath); // 




const EventRegisterForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dataInput, setDataInput] = useState(false);

    // Default fallback for event data
    const { event } = location.state || { event: { name: "", teamSize: 1, registrationFee: 0 } };
    const teamsize = event.teamSize - 1; // Number of team members

    const [formData, setFormData] = useState({
        Teamname: "",
        teamLeadEmail: "",
        membersMail: Array(teamsize).fill(""), // Initialize with empty strings
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update specific member email fields
        if (name.startsWith("member")) {
            const memberIndex = parseInt(name.replace("member", "").replace("Mail", "")) - 1;
            setFormData((prevState) => {
                const updatedMembersMail = [...prevState.membersMail];
                updatedMembersMail[memberIndex] = value;
                return {
                    ...prevState,
                    membersMail: updatedMembersMail,
                };
            });
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };




    const [userData, setUserData] = useState(null); // Initialize as null
    const [accomCheckData, setAccomCheckData] = useState(null); // Initialize as null

    // Getting the sesssion stored data 
    const handleCredentials = async () => {
        try {
            const response = await axios.get("api/stepcone_backend/userdata.php");
            const data = response.data;
            setUserData(data); // Update state with fetched data
            console.log(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            alert("Failed to fetch user data. Please try again later.");
        }

    }

    // FUNCTION TO CHECK WHETHER USER TAKEN ACCOMODATION OR NOT
    const handleAccomCheck = async () => {
        const userCheckData = {
            email: "abdulyunus295@gmail.com",
            // affiliated: userData.session.aff,
        }
        try {
            const res = await axios.post("api/stepcone_backend/check_accom.php", userCheckData);
            const checkedData = res.data;
            console.log(checkedData);
            setAccomCheckData(checkedData.accomodation.accomodation);
        }
        catch (error) {
            console.error("Error:", error);
        }
    }


    // CALLING HANDLE CREDENTIALS TO CHECK ONCE
    useEffect(() => {
        handleCredentials();
    }, []);


    // CALLING HANDLE ACCOM TO EXECUTE WHEN USERDATA IS BEING FETCHED.

    useEffect(() => {
        if (userData) {
            handleAccomCheck();
        }
    }, [userData]);





    const handleSubmit = async (e) => {
        if (userData.session.aff == '1' || (userData.session.aff == '0' && accomCheckData == '1')) {
            if (dataInput) {
                const formDataValue = {
                    email: formData.teamLeadEmail,
                    teamName: formData.Teamname,
                    teamLead: formData.teamLeadEmail,
                    members: formData.membersMail,
                    eventName: event.name,
                    teamSize: event.teamSize,
                    amount: event.registrationFee,
                };

                setLoading(true);
                e.preventDefault();
                console.log(formDataValue);

                try {
                    const response = await axios.post('api/stepcone_backend/paymentgateway.php', formDataValue);
                    console.log("this is the response data", response.data);
                    const checkMailExist = response.data;
                    if (checkMailExist.status == 'error') {
                        alert(checkMailExist.message);
                        return;
                    }
                    const resData = response.data.responseData;
                    const url = resData.data.instrumentResponse.redirectInfo.url;
                    if (resData && url) {
                        // Store the form data for use after redirect
                        sessionStorage.setItem("formDataValue", JSON.stringify(formDataValue));
                        if (confirm("Payment Initiated") === true) {
                            sessionStorage.setItem("paymentStatus", "pending");
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
        }
        else {
            alert("Please complete general registration first");
            navigate(`/${encodePath("/stepcone_$_**23209@&***(072462)8''8&#%$@^#@#%$^&*^&%^$%#$@#General-Registration")}`);
        }
    };



    const handlePaymentCallback = async () => {
        const storedFormData = sessionStorage.getItem("formDataValue");
        const paymentStatus = sessionStorage.getItem("paymentStatus");


        if (storedFormData && paymentStatus === "pending") {
            try {
                setLoading(true);
                const formDataValue = JSON.parse(storedFormData);
                const response = await axios.post(
                    `api/stepcone_backend/paymentcallback.php`,
                    formDataValue
                );
                const statusResponse = response.data;
                console.log("Payment callback response:", statusResponse);

                // Reset payment status after a successful callback
                sessionStorage.setItem("paymentStatus", "completed");

                // Optionally clear the form data   
                sessionStorage.removeItem("formDataValue");
                alert(statusResponse.message);
                navigate(`/${encodePath("/stepcone_$_@*502&502##$ -++==002) && --profile")}`)
            } catch (error) {
                // setLoading(false);
                console.error("Error during payment callback:", error);
                sessionStorage.setItem("paymentStatus", "error");
                // Redirect to failure page or show an error message
            }
            setLoading(false);
        }
    };


    useEffect(() => {
        handlePaymentCallback();
    }, []);



    useEffect(() => {
        if (formData.Teamname !== "" && formData.teamLeadEmail !== "" && formData.membersMail.every(email => email !== "")) {
            setDataInput(true);
        } else {
            ``
            setDataInput(false);
        }
    }, [formData]);



    const handlePayClick = (event) => {
        navigate("/makepayment", { state: { event } });
    };

    return (
        <>
            <Navbar />
            <div className="EventForm-main d-md-flex flex-column justify-content-center align-items-center align-content-center">
                <PaymentLoadingAnimation loading={loading} />
                <div className="d-flex justify-content-center">
                    {/* <img src={StepConeImg} className="" height='80px' alt="" /> */}
                </div>
                <h3 className="text-center mt-4 event-name">{event.name}</h3>

                <div className="EventForm d-md-flex justify-content-between align-items-center p-3 gap-4 rounded-4 m-3">
                    <div className="w-md-50 w-100">
                        <form onSubmit={handleSubmit} action="/makepayment" state={{ event }}>
                            <div className="mb-3">
                                <FontAwesomeIcon icon={faPeopleGroup} className="mx-0" />
                                <label htmlFor="Teamname" className="form-label">
                                    Team Name
                                </label>
                                <input
                                    type="text"
                                    id="Teamname"
                                    name="Teamname"
                                    value={formData.Teamname}
                                    onChange={handleInputChange}
                                    required
                                    className="form-control bg-transparent border-0 border-bottom rounded-0 text-light"
                                />
                            </div>

                            <div className="mb-3">
                                <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
                                <label htmlFor="teamLeadEmail" className="form-label">
                                    Team Lead Email
                                </label>
                                <input
                                    type="email"
                                    id="teamLeadEmail"
                                    name="teamLeadEmail"
                                    value={formData.teamLeadEmail}
                                    onChange={handleInputChange}
                                    required
                                    className="form-control bg-transparent border-0 border-bottom rounded-0 text-light"
                                />
                            </div>

                            <div>
                                {Array.from({ length: teamsize }).map((_, index) => (
                                    <div key={index} className="mb-3">
                                        <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
                                        <label htmlFor={`member${index + 1}Mail`} className="form-label">
                                            Member {index + 1} Email
                                        </label>
                                        <input
                                            type="email"
                                            id={`member${index + 1}Mail`}
                                            name={`member${index + 1}Mail`}
                                            value={formData.membersMail[index]}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control bg-transparent border-0 border-bottom rounded-0 text-light"
                                        />
                                    </div>
                                ))}
                            </div>


                            <button type="submit" className="btn btn-primary mt-3"
                            >
                                {/* <Link
                                    to="/makepayment"
                                    state={{ event }}
                                >
                                </Link> */}
                                <FontAwesomeIcon icon={faIndianRupeeSign} />
                                &nbsp;PAY {event.registrationFee}/-
                            </button>
                        </form>
                    </div>

                    <div className="d-flex justify-content-center w-md-50 w-100">
                        <img
                            src={EventRegisterImg}
                            className="img-fluid register-logo w-md-100 w-75"
                            alt="Event Registration"
                        />
                    </div>
                </div>
            </div >
        </>
    );

};
export default EventRegisterForm;
