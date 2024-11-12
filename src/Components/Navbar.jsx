// Navbar.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import MenuIcon from '../Assets/menu_icon.png' // Ensure remix icon CSS is installed
import CloseMenu from '../Assets/close_menu.png' // Ensure remix icon CSS is installed
import './Navbar.css';
const Navbar = () => {
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(".menu", {
      right: 0,
      duration: 0.2
    });

    tl.from(".menu h4", {
      x: 700,
      duration: 0.3,
      stagger: 0.3,
      opacity: 0
    });

    tl.from(".menu img", {
      opacity: 0
    });

    document.querySelector(".nav img").addEventListener("click", () => {
      document.querySelector(".nav img").style.display = "hidden"
      tl.play();
    });

    document.querySelector(".menu img").addEventListener("click", () => {
      tl.reverse();
      document.querySelector(".nav img").style.display = "block"

    });

    return () => {
      document.querySelector(".nav img").removeEventListener("click", () => tl.play());
      document.querySelector(".menu img").removeEventListener("click", () => tl.reverse());
    };
  }, []);

  return (
    <div className="nav-main position-fixed">
      <div className="nav px-4 px-md-5 text-white ">
        <a href="# " className='text-decoration-none'>
          <h1 className='stepcone-text fs-2'>Stepcone</h1>
        </a>
        <img src={MenuIcon} height='46px' alt="" />
      </div>
      <div className="menu">
        <img className=' menu-close m-2' src={CloseMenu} height='35px' alt="" />
        {/* <i className="ri-close-line btn btn-outlined-light m-2"></i> */}
        <div className='h-75'>
          <a href="#home">
            <h4 className='fs-4  btn my-3'>Home</h4>
          </a>
          <h4 className='fs-4  btn my-3'>Events</h4>
          <h4 className='fs-4  btn my-3'>Registrations</h4>
          <h4 className='fs-4  btn my-3'>Contact</h4>
          <h4 className='fs-4  btn my-3'>About</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
