import React, { useState } from 'react';
import './Signup_Login.css'
function Signup_Login() {
    const [affiliation, setAffiliation] = useState('');

    const handleCollegeChange = (event) => {
        setAffiliation(event.target.value);
    };

    return (
        <div className='signup-main'>
            <div className="navbar">
                <div>
                    <h2>REGISTER</h2>
                </div>
            </div>
            <div className="login">
                <div className="login-box">
                    <form>
                        <div>
                            <center>
                                <div className="user-logo">
                                    <img
                                        src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"
                                        alt=""
                                    />
                                </div>
                            </center>
                        </div>
                        <div>
                            <label htmlFor="user">USERNAME</label> <br />
                            <input type="text" name="user" />
                        </div>
                        <div>
                            <label htmlFor="college">AFFILIATED WITH</label>
                            <select
                                id="clg"
                                value={affiliation}
                                onChange={handleCollegeChange}
                            >
                                <option value="">-SELECT-</option>
                                <option value="1">GMRIT</option>
                                <option value="0">NON-GMRIT</option>
                            </select>
                        </div>
                        {/* gmrit students form */}
                        {affiliation === '1' && (
                            <div id="gmrit">
                                <div>
                                    <label htmlFor="jntu">JNTU NUMBER</label>
                                    <input type="text" name="jntu" />
                                </div>
                            </div>
                        )}

                        {/* non-gmrit form */}
                        {affiliation === '0' && (
                            <div id="nongmrit">
                                <div>
                                    <label htmlFor="nongmrit_clg">COLLEGE NAME</label>
                                    <input type="text" name="nongmrit_clg" />
                                </div>
                            </div>
                        )}

                        <div>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="mobile">MOBILE</label>
                            <input type="tel" name="mobile" />
                        </div>
                        <div>
                            <label htmlFor="year">YEAR</label>
                            <select name="year">
                                <option value="">-SELECT-</option>
                                <option value="1">FIRST</option>
                                <option value="2">SECOND</option>
                                <option value="3">THIRD</option>
                                <option value="4">FOURTH</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="branch">BRANCH</label>
                            <select name="branch">
                                <option value="">-SELECT-</option>
                                <option value="CSE">CSE</option>
                                <option value="IT">IT</option>
                                <option value="AIML">AIML</option>
                                <option value="AIDS">AIDS</option>
                                <option value="ECE">ECE</option>
                                <option value="MECH">MECH</option>
                                <option value="CIVIL">CIVIL</option>
                                <option value="EEE">EEE</option>
                                <option value="CHEM">CHEM</option>
                                <option value="OTHERS">OTHERS</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="password">PASSWORD</label> <br />
                            <input type="password" name="password" />
                        </div>

                        <div>
                            <center>
                                <button type="submit">Register</button>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup_Login;