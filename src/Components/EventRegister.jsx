import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import stepConeLogo from "../Assets/STEPCONE[1].png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "./Navbar.jsx";
import { faEnvelope, faUnlock, faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const EventRegister = () => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    // Handle input changes
    const handleInput = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email: formValue.email,
            password: formValue.password,
        };

        try {
            const response = await axios.post("api/stepcone_backend/login.php", formData);
            const responseData = response.data;
            console.log(responseData)
            if (responseData.status === "success") {
                alert(responseData.message);
                if (responseData.affiliated === "1") {
                    window.location.href = "/";
                    console.log(responseData.affiliated)
                } else {

                    if (responseData.nongmruser.accomodation === "0") {
                        // alert(responseData.message);
                        console.log(responseData.nongmruser.accomodation)
                        window.location.href = "/accomodation";
                    }
                    else {
                        window.location.href = "/";
                        console.log(responseData.nongmruser.accomodation);
                    }
                }
            } else {

                alert(responseData.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <Navbar />

            <div className="login-main d-flex flex-column justify-content-center gap-2 align-items-center " id='login-main'>
                {/* Logo */}

                {/* Login Form */}
                <div className="container login-box1 d-flex flex-column align-items-center">
                    <div>
                        <img
                            src={stepConeLogo}
                            alt="StepCone Logo"
                            className="img-fluid stepcone-login-logo mt-5 pt-2"
                        />
                    </div>

                    <div className="login-sub m-auto p-2">
                        <div className="row m-auto">
                            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                <div className="login-form w-100">
                                    <form onSubmit={handleSubmit}>
                                        <div className="my-3">
                                            <FontAwesomeIcon icon={faEnvelope} className="mx-1" />

                                            <label className="" htmlFor="email">Email</label> <br />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                                className="form-control login-input"
                                                onChange={handleInput}
                                                required
                                            />
                                        </div>
                                        <div className="my-3">
                                            <FontAwesomeIcon icon={faUnlock} className="mx-1" />

                                            <label htmlFor="password">Password</label> <br />
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Enter password"
                                                className="form-control login-input"
                                                onChange={handleInput}
                                                required

                                            />
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary my-2 w-50">
                                                Login <FontAwesomeIcon icon={faRightToBracket} className="mx-1" />
                                            </button>
                                        </div>
                                        {errorMessage && (
                                            <p className="text-danger text-center">{errorMessage}</p>
                                        )}
                                    </form>
                                    <Link
                                        to="/signup"
                                        className="d-block text-center mt-3 text-decoration-none text-warning"
                                    >
                                        Don't have an account? Sign Up
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                <img
                                    src="user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security_566886-2817-removebg-preview.png"
                                    alt="Login Illustration"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EventRegister