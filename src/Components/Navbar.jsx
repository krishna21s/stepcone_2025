import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { gsap } from "gsap";
import axios from "axios";
import MenuIcon from "/Assets/menu_icon.png";
import CloseMenu from "/Assets/close_menu.png";
import StepconeLogoImg from '/Assets/STEPCONE[1].png'
import "./Navbar.css";

const encodePath = (path) => btoa(path); // Encode using Base64


const Navbar = () => {
  const [checkLoggedIn, setCheckLoggedIn] = useState("0");
  const [checkAccom, setCheckAccom] = useState("0");
  const handleAccomBtn = async () => {
    const res = await axios.get(
      "api/stepcone_backend/isloggedin.php"
    )

    const data = res.data;
    if (data.isLoggedIn) {
      setCheckLoggedIn(data.isLoggedIn);
      setCheckAccom(data.accomodation);
    }
    // console.log(checkLoggedIn);
    // alert(data.isLoggedIn)
  }
  useEffect(() => {
    handleAccomBtn();
    // console.log(checkLoggedIn)
  })

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(".menu", {
      right: 0,
      duration: 0.26,
    });

    tl.from(".menu .nav-links", {
      x: 700,
      duration: 0.25,
      stagger: 0.1,
      opacity: 0,
    });

    tl.from(".menu img", {
      opacity: 0,
    });

    const handleMenuClick = () => {
      document.querySelector(".menu-icon").style.display = "none";
      tl.play();
    };

    const handleCloseClick = () => {
      tl.reverse().then(() => {
        document.querySelector(".menu-icon").style.display = "block";
      });
    };

    // Attach event listeners
    const menuIcon = document.querySelector(".menu-icon");
    const menuCloseIcon = document.querySelector(".menu img");

    menuIcon.addEventListener("click", handleMenuClick);
    menuCloseIcon.addEventListener("click", handleCloseClick);

    // Cleanup on component unmount
    return () => {
      menuIcon.removeEventListener("click", handleMenuClick);
      menuCloseIcon.removeEventListener("click", handleCloseClick);
    };
  }, []);

  return (
    <>
      <div className="nav-main position-fixed">
        <div className="nav px-4 px-md-5 text-white">
          <Link to="/" className="text-decoration-none">
            <img className="stepcone-text" src={StepconeLogoImg} alt="Logo" />
          </Link>
          <img
            id="menu-icon"
            className="menu-icon"
            src={MenuIcon}
            height="46px"
            alt="Menu Icon"
          />
        </div>
        <div className="menu">
          <img
            className="menu-close m-2"
            src={CloseMenu}
            height="35px"
            alt="Close Menu"
          />
          <div className="h-75 sub-menu">
            <Link className="nav-links" to="/">
              <h4 className="text-white">Home</h4>
            </Link>
            <Link className="nav-links text-white" to={`/${encodePath("/stepcone_$_@&***)(714)530$215 && --event")}`}>
              <h4>Events</h4>
            </Link>

            <Link className="nav-links text-white" to={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --registrations")}`}>
              <h4>Registrations</h4>
            </Link>
            <Link className="nav-links text-white" to={`/${encodePath("/stepcone_$_@*502378r 34374 #$%3$%245 details")}`}>
              <h4>Details</h4>
            </Link>
            <div className="nav-links">
              {
                checkLoggedIn === "1" && (
                  <Link className="nav-links text-white" to={`/${encodePath("/stepcone_$_@*502&502##$ -++==002) && --profile")}`}>
                    <h4>Profile</h4>
                  </Link>
                )
              }
              {
                checkLoggedIn === "0" && (
                  <Link className="nav-links text-white" to={`/${encodePath("/stepcone_$_@&&& 530$215 && --login")}`}>
                    <h4>Login</h4>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      </div >
      <Outlet />
    </>
  );
};

export default Navbar;
