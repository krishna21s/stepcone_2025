import React, { useState } from 'react'
import './PaymentInterface.css'
import StepConeImg from '/Assets/STEPCONE[1].png';
import { useLocation, useNavigate } from "react-router-dom";
import GmritLogo from '/Assets/gmritlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuildingColumns, faEnvelope, faPaperclip, faPhone, faGraduationCap, faArrowUp19, faUnlock, faHandshakeSimple, faIdBadge } from '@fortawesome/free-solid-svg-icons';
 
const PaymentInterface = () => {
    // Handiling the user input.
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [paymentFee, setPaymentFee] = useState(0);

    const location = useLocation();
    const { event } = location.state || {}; // Retrieve the event data
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMobileChange = (e) => {
        setMobile(e.target.value);
    }

    const handlePaymentFeeChange = (e) => {
        setPaymentFee(e.target.value);
    }

    const handlePaymentClick = async () => {
        const userDetails = {
            email: email,
            mobile: mobile,
            paymentFee: paymentFee
        }
        // Here you can call your API to process the payment
        const res = await axios.post("api/stepcone_backend/paymentgateway.php"
            , userDetails
        );
        const data = res.data;
        console.log(data);
    }

    console.log(email, mobile, paymentFee)

    return (
        <div className=' btn-secondary payment-main bg-secondary-subtle   d-flex flex-column align-items-center justify-content-center'>
            <div className='container d-flex flex-column align-items-center justify-content-center'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={StepConeImg} className='px-4' height='45px' alt="" />
                    <h1 className='text-black-50 border-bottom border-dark fs-1 '>Payment Portal</h1>
                </div>
                <form className='bg-primary-subtle border-radius-10 row mx-2 rounded-3 mt-3 '>
                    <div className='col col-12 d-flex align-items-center m-auto'>
                        <img src={GmritLogo} className='px-4 m-auto' height='55px' alt="" />
                    </div>
                    <div className="mb-3  col col-12 ">
                        <div className='w-75 m-auto ' >
                            <label htmlFor="exampleInputEmail1" className="form-label text-secondary m-auto fs-5 text-light"><FontAwesomeIcon icon={faEnvelope} className="mx-1  " />Email address</label>
                            <input type="email"
                                onChange={(e) => handleEmailChange(e)}
                                className="form-control text-secondary m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text text-light fw-semibold">We'll never share your email with anyone else.</div>
                        </div>
                    </div>
                    <div className="mb-3 col col-12 ">
                        <div className='w-75 m-auto'>
                            <label htmlFor="exampleInputMobile" className="form-label text-secondary fs-5  text-light"><FontAwesomeIcon icon={faPhone} className="mx-1 " />Mobile Number</label>
                            <input type="number"
                                onChange={(e) => handleMobileChange(e)}
                                className="form-control mobile-input" id="exampleInputMobile" />
                        </div>
                    </div>
                    <div class="mb-3 col col-12 m-auto ">
                        <div className='w-75 m-auto d-flex'>
                            <span className="input-group-text " id="inputGroup-sizing-default fs-5 ">Payment Fee &#8377;:</span>
                            <input type="text"
                                onChange={(e) => handlePaymentFeeChange(e)}
                                className="form-control" defaultValue={`${event.registrationFee}`} disabled aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>


                    <div className='col-12 m-auto text-center'>
                        <button type="submit" className="btn btn-outline-light fw-bold m-auto p-2 payment-btn" onClick={handlePaymentClick}
                        >Make Payment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentInterface