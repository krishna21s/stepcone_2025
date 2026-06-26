import React, { useState } from 'react'
import './Admin_Login.css'
import StepconeLogo from '/Assets/STEPCONE[1].png';

const Admin = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const handleusername = (val) => {
    setusername(val)
  }
  const handlepassword = (val) => {
    setpassword(val)
  }

  const handleLogin = () => {
    localStorage.setItem("adminToken", "secureToken123"); // Mock login
    window.location.hash = "#/data"; // Redirect after login
  };

  console.log(username, password)
  return (
    <div className='admin-login-main  bg-light'>
      <div className='p-3 bg-dark text-light '>

        <center className='d-flex justify-content-center align-items-center'><img className='mx-2' src={StepconeLogo} height='40px' alt="" />
          STEPCONE ADMIN</center>
      </div>
      <div className='admin-login-container d-flex justify-content-center align-items-center'>
        <div className='w-25  admin-login-box'>

          <input type="text" className='form-control admin-login-username' id="exampleFormControlInput1" placeholder='Username' onChange={(e) => handleusername(e.target.value)} /> <br />
          <input type="password" name="" className="form-control " id="exampleFormControlInput1" placeholder='Password' onChange={(e) => handlepassword(e.target.value)} /> <br />
          {
            username == "STEPCONE_2025_SC" && password == "8639439589" && (
              <div onClick={handleLogin}>


                <a href='https://gmrit.edu.in/stepcone/#/B90sc86-2025-adm-g19M98R' className='px-3 py-2 text-decoration-none w-100 bg-primary text-light rounded'>Login</a>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Admin
