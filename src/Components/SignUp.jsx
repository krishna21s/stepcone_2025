import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUser, faBuildingColumns, faEnvelope, faPaperclip, faPhone, faGraduationCap, faArrowUp19, faUnlock, faHandshakeSimple, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import ProgImg from '/Assets/programmer_img.png';
import StepConeImg from '/Assets/STEPCONE[1].png';
import LoadingAnimation from "./LoadingAnimation";


const SignUp = () => {
    const [clgBelongs, setClgBelongs] = useState("");
    const [loading, setLoading] = useState(false);
    const [myEmail, setEmail] = useState({
        email: "",
        username: "",
    });



    const handleCollegeChange = (e) => {
        setClgBelongs(e.target.value);
    };

    const [formvalue, setFormvalue] = useState({
        username: "",
        affiliated: "",
        jntu: "",
        nongmrit_clg: "",
        email: "",
        otp: null,
        mobile: "",
        year: "",
        branch: "",
        password: "",
        profilepic: ""
    });





    const checkOtpValue = parseInt(sessionStorage.getItem('otp'), 10);

    function checkOtp(otpFromSession, otpFromForm) {
        return otpFromSession === parseInt(otpFromForm, 10);
    }
    const handleInput = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    };
    const handleOTP = (e) => {
        setEmail({ ...myEmail, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(formvalue.otp);
        if (!checkOtp(checkOtpValue, formvalue.otp)) {
            alert("Invalid OTP. Please check.");
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('username', myEmail.username);
        formData.append('affiliated', clgBelongs);
        formData.append('jntu', formvalue.jntu);
        formData.append('nongmrit_clg', formvalue.nongmrit_clg);
        formData.append('email', myEmail.email);
        formData.append('otp', parseInt(formvalue.otp, 10));
        formData.append('mobile', formvalue.mobile);
        formData.append('year', formvalue.year);
        formData.append('branch', formvalue.branch);
        formData.append('password', formvalue.password);

        const profilePicInput = document.querySelector('input[name="profilepic"]');
        if (profilePicInput && profilePicInput.files.length > 0) {
            formData.append('profilepic', profilePicInput.files[0]);
        }

        try {
            const response = await axios.post("api/stepcone_backend/signUp.php", formData);
            const { status, message } = response.data;
            console.log(response.data);

            if (status === 0) {
                alert(message);
            } else if (status === 1) {
                alert(message);
                window.location.href = `${encodePath("/stepcone_$_@&&& 530$215 && --login")}`;
            }
        } catch (error) {
            console.error("Error during sign up:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };



    //email
    const [isHidden, setIsHidden] = useState(false);
    const [message, setMessage] = useState("");
    const handleEmail = async (e) => {

        setLoading(true);
        console.log(myEmail);
        e.preventDefault();
        //hide btn
        setIsHidden(true); // Hide the button
        setMessage("Wait for 30 seconds");

        setTimeout(() => {
            setIsHidden(false); // Show the button after 30 seconds
            setMessage(""); // Clear the message
        }, 30000);
        // Prevent the form from submitting normally
        if (!myEmail.email) {
            e.preventDefault();
            alert('Please Enter Email')
        }
        const OTPVerify = {
            email: myEmail.email,
            username: myEmail.username,
        };
        const response = await axios
            .post("api/stepcone_backend/otp.php",
                OTPVerify) // Path to your PHP file
            .then((response) => {
                const responseData = response.data;
                // const jsonPart = responseData.substring(responseData.lastIndexOf('{'));
                // const parsedData = JSON.parse(jsonPart);
                sessionStorage.setItem('otp', responseData.otp);
                // sessionStorage.setItem('otp', parsedData.ot);
                // console.log(responseData);
                console.log(sessionStorage.getItem('otp'));
                alert(responseData.message);
            })
            .catch(() => {
                alert("Error sending OTP, Please try again")
                console.log("Error sending OTP, Please try again.");
            });
        setLoading(false);


        // FUNCTION FOR HANDLE PRIFILE PIC

    };

    // const handleProfilePic = (e) => {
    //     setProfileImg(e.target.files[0]);
    // }



    return (
        <>
            <div className="sign-up-container ">
                <LoadingAnimation loading={loading} />
                <div className="navbar text-center">

                    <h2 className="text-light m-auto ">SIGN-UP</h2>
                </div>
                <div className="login px-1">
                    <div className="login-box ">
                        <div>
                            <center>
                                <div className="user-logo">
                                    <img
                                        src={StepConeImg}
                                        alt="Stepcone Logo"
                                        className="sign-stepcone"
                                    />
                                </div>
                            </center>
                        </div>
                        <div className="d-flex">
                            <form action="email.php" onSubmit={handleSubmit} className="form-signup" encType="multipart/form-data">
                                <div>
                                    <FontAwesomeIcon icon={faUser} className="mx-1" />
                                    <label htmlFor="user">USERNAME</label> <br />
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={handleOTP}
                                        value={myEmail.user}
                                        required
                                        placeholder="Enter Username"
                                        className="input-signup"
                                    />
                                </div>
                                <div className="d-sm-flex align-items-center gap-1">
                                    <div className="affiliated mt-3">
                                        <FontAwesomeIcon icon={faPaperclip} className="mx-1" />
                                        <label htmlFor="college">AFFILIATED WITH</label>
                                        <select
                                            id="clg"
                                            onChange={handleCollegeChange}
                                            value={clgBelongs}
                                            required
                                            className="input-signup"

                                        >
                                            <option value=""
                                                className="input-signup-opt"
                                            >-SELECT-</option>
                                            <option value="1"
                                                className="input-signup-opt"
                                            >GMRIT</option>
                                            <option value="0"
                                                className="input-signup-opt"
                                            >NON-GMRIT</option>
                                        </select>
                                    </div>
                                    <div className="w-sm-50">
                                        {clgBelongs === "1" && (
                                            <div id="gmrit">
                                                <FontAwesomeIcon icon={faIdBadge} className="mx-1" />
                                                <label htmlFor="jntu">JNTU NUMBER</label>
                                                <input
                                                    type="text"
                                                    name="jntu"
                                                    value={formvalue.jntu}
                                                    onChange={handleInput}
                                                    required
                                                    placeholder="Enter JNTU number"
                                                    className="input-signup"
                                                />
                                            </div>
                                        )}
                                        {clgBelongs === "0" && (
                                            <div id="nongmrit">
                                                <FontAwesomeIcon icon={faBuildingColumns} className="mx-1" />

                                                <label htmlFor="nongmrit_clg">COLLEGE NAME</label>
                                                <input
                                                    type="text"
                                                    name="nongmrit_clg"
                                                    value={formvalue.nongmrit_clg}
                                                    onChange={handleInput}
                                                    required
                                                    placeholder="Enter College name"
                                                    className="input-signup"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="d-sm-flex gap-1">
                                    <div className="w-sm-75">
                                        <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
                                        <label htmlFor="email">EMAIL</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={myEmail.email}
                                            onChange={handleOTP}
                                            required
                                            placeholder="Enter Email"
                                            className="input-signup"
                                        />
                                        <div className="otp-btn-parent">
                                            {message}
                                            {!isHidden && (<button
                                                type="submit"
                                                className="otp-btn "
                                                onClick={handleEmail}
                                            >
                                                Send OTP
                                            </button>)}
                                        </div>


                                        <div id="email-response"></div>
                                    </div>

                                    <div className="otp w-sm-25 w-50">
                                        <FontAwesomeIcon icon={faArrowUp19} className="mx-1" />
                                        <label htmlFor="otp">OTP</label>
                                        <input
                                            type="number"
                                            name="otp"
                                            value={formvalue.otp}
                                            onChange={handleInput}
                                            required
                                            placeholder="Enter OTP"
                                            className="input-signup"
                                        />

                                        <div id="otpResponse"></div>
                                    </div>
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faPhone} className="mx-1" />
                                    <label htmlFor="mobile">MOBILE</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        onChange={handleInput}
                                        value={formvalue.mobile}
                                        required
                                        placeholder="Enter Valid Mobile Number"
                                        className="input-signup"
                                    />
                                </div>
                                <div className="d-flex gap-2">
                                    <div className="w-50">
                                        <FontAwesomeIcon icon={faHandshakeSimple} className="mx-1" />
                                        <label htmlFor="year">YEAR</label>
                                        <select
                                            name="year"
                                            value={formvalue.year}
                                            onChange={handleInput}
                                            required
                                            className="input-signup"
                                        >
                                            <option value="" className="input-signup-opt">-SELECT-</option>
                                            <option value="1" className="input-signup-opt">FIRST</option>
                                            <option value="2" className="input-signup-opt">SECOND</option>
                                            <option value="3" className="input-signup-opt">THIRD</option>
                                            <option value="4" className="input-signup-opt">FOURTH</option>
                                        </select>
                                    </div>
                                    <div className="w-50">
                                        <FontAwesomeIcon icon={faGraduationCap} className="mx-1" />
                                        <label htmlFor="branch">BRANCH</label>
                                        <select
                                            name="branch"
                                            value={formvalue.branch}
                                            onChange={handleInput}
                                            required
                                            className="input-signup"
                                        >
                                            <option value="" className="input-signup-opt" >-SELECT-</option>
                                            <option value="CSE" className="input-signup-opt">CSE</option>
                                            <option value="IT" className="input-signup-opt">IT</option>
                                            <option value="AIML" className="input-signup-opt">AIML</option>
                                            <option value="AIDS" className="input-signup-opt">AIDS</option>
                                            <option value="ECE" className="input-signup-opt">ECE</option>
                                            <option value="MECH" className="input-signup-opt">MECH</option>
                                            <option value="CIVIL" className="input-signup-opt">CIVIL</option>
                                            <option value="EEE" className="input-signup-opt">EEE</option>
                                            <option value="CHEM" className="input-signup-opt">CHEM</option>
                                            <option value="OTHERS" className="input-signup-opt">OTHERS</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUnlock} className="mx-1" />
                                    <label htmlFor="password">PASSWORD</label> <br />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formvalue.password}
                                        onChange={handleInput}
                                        required
                                        placeholder="Enter Strong Password"
                                        className="input-signup"
                                    />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faImage} style={{ color: "#ffffff", }} className="mx-1" />
                                    <label htmlFor="profilepic">Upload Profile</label> <br />
                                    <input
                                        type="file"
                                        name="profilepic"
                                        accept="image/*"
                                        // onChange={handleProfilePic}
                                        required
                                        className="input-signup"
                                    />

                                    <p className="text-warning signup-notice">Note:please upload file under 50kb and passport size photo</p>
                                </div>

                                <div>
                                    <center>
                                        <button type="submit" className="register">Singup</button>
                                    </center>
                                </div>
                            </form>
                            <div className="signup-logo d-flex flex-column align-items-center justify-content-center gap-0">
                                <img
                                    src={ProgImg}
                                    alt="Programmer"
                                    className="d-none d-lg-block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SignUp;