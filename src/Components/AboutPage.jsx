import React, { useEffect } from 'react'
import './AboutPage.css'
import aboutTeam from '../../public/Assets/aboutTeam.json';
import aboutDev from '../../public/Assets/aboutDev.json';
import AboutCard from './AboutCard';
import FooterDetails from './FooterDetails.jsx'
import hariTechSupport from '/assets_sc/hari_tech_support.jpg';
import sridhar from '/Assets/about_info/sridhar.jpg';
import satish from '/Assets/about_info/satish.png';
import saiTeja from '/Assets/about_info/saiteja.jpg';
import maheendra from '/Assets/about_info/maheendra.jpg';
//Temp logo images
import Fa_Logo from "/Assets/fa_stud_logo.png"
import Stud_Logo from "/Assets/stud.png";


import Navbar from './Navbar.jsx';
import AOS from 'aos';
import Student_council from './Student_council.jsx';
const AboutPage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 250 // Animation duration
            // once: true, // Whether animation should happen only once - while scrolling down
        });
        AOS.refresh(); // Refresh AOS to apply animations on dynamic content
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    }, []);


    const imageMap = {
        'sridhar': sridhar,
        'satish': satish
    }

    return (
        <>
            <Navbar />

            <div className='about-main '>
                <div className="dublicate-div">

                </div>
                <div className='w-100 p-5'>
                    <h1 className="about-title text-center fs-2 border-bottom pb-3">Faculty Convenors</h1>
                </div>
                <div className="fac-convenors d-flex flex-wrap justify-content-evenly align-item-center gap-5" data-aos="fade-up">
                    {
                        aboutTeam.facultyConvenors.map((person, index) => (
                            <div
                                className="team-card-div d-flex flex-column justify-content-center align-items-center mb-3"
                            // key={index}
                            >
                                <div className="team-card border d-flex flex-column justify-content-around align-items-center">
                                    <div>
                                        <p className='text-white m-auto border-bottom border-secondary'>{person.name}</p>
                                    </div>
                                    <div className="fa-stud-img ">
                                        <img className='rounded-circle' src={imageMap[person.image]} alt="Faculty Img" />
                                    </div>
                                    <div className="team-details">
                                        <p className='text-warning-emphasis m-auto text-center '>Faculty Convenor</p>
                                        <a href={`mailto:${person.mail}`} target="blank"> <small className="text-light-emphasis text-wrap "><strong className="text-warning">Email: </strong>{person.mail}</small></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <Student_council />

            <div className='about-main '>
                <div className="container d-flex flex-column">
                    <div className="dublicate-div">

                    </div>
                    <div>
                        {/* <div>
                            <div className='w-100 p-5'>
                                <h1 className="about-title text-center fs-2 border-bottom pb-3">Faculty Convenors</h1>
                            </div>
                            <div className="fac-convenors d-flex flex-wrap justify-content-around align-item-center gap-5" data-aos="fade-up">
                                {
                                    aboutTeam.facultyConvenors.map((person, index) => (
                                        <div
                                            className="team-card-div d-flex flex-column justify-content-center align-items-center mb-3"
                                        // key={index}
                                        >
                                            <div className="team-card border d-flex flex-column justify-content-around align-items-center">
                                                <div>
                                                    <p className='text-white m-auto border-bottom border-secondary'>{person.name}</p>
                                                </div>
                                                <div className="fa-stud-img ">
                                                    <img className='rounded-circle' src={imageMap[person.image]} alt="Faculty Img" />
                                                </div>
                                                <div className="team-details">
                                                    <p className='text-warning-emphasis m-auto text-center '>Faculty Convenor</p>
                                                    <a href={`mailto:${person.mail}`} target="blank"> <small className="text-light-emphasis text-wrap "><strong className="text-warning">Email: </strong>{person.mail}</small></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> */}


                        {/* <div className='px-3'> */}

                        {/* </div> */}

                        <div className='p-5'>
                            <h1 className="about-title text-center fs-2 border-bottom pb-3">Tech Team</h1>

                        </div>
                        <div className='d-flex justify-content-center'>
                            <div
                                className="team-card-div d-flex flex-column justify-content-center align-items-center mb-3"
                                data-aos="fade-up"
                            // key={index}
                            >
                                <div className="team-card border d-flex flex-column justify-content-around align-items-center">
                                    <div>
                                        <p className='text-white m-auto border-bottom border-secondary'>Hari Prasad</p>
                                    </div>
                                    <div className="fa-stud-img">
                                        <img src={hariTechSupport} className='rounded-circle' alt="Faculty Img" />
                                    </div>
                                    <div className="team-details">
                                        <p className='text-warning-emphasis m-auto text-center'>Technical Support</p>
                                        <a href="mailto:hariprasad@gmrit.edu.in" target="blank"> <small className="text-light-emphasis text-wrap "><strong className="text-warning">Email: </strong>hariprasad@gmrit.edu.in</small></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about-developers row justify-content-center'>
                            {
                                aboutDev.map((person) => (
                                    <div className='person col col-12 col-md-6 my-2 justify-content'
                                        data-aos="fade-up-down">
                                        <AboutCard key={person.id} person={person} />
                                    </div>
                                ))
                            }
                        </div>


                        <div className='d-flex justify-content-between flex-wrap tech-2nd'>


                            <div
                                className="team-card-div d-flex flex-column justify-content-center align-items-center m-5"
                                data-aos="fade-up"
                            // key={index}
                            >
                                <div className="team-card border d-flex flex-column justify-content-around align-items-center">
                                    <div>
                                        <p className='text-white m-auto border-bottom border-secondary'>D. Sai Teja
                                        </p>
                                    </div>
                                    <div className="fa-stud-img">
                                        <img src={saiTeja} className='rounded-circle' alt="tech team Img" />
                                    </div>
                                    <div className="team-details">
                                        <p className='text-warning-emphasis m-auto text-center'>Full stack Advisor</p>
                                        <a href="mailto:saiteja.d.555@gmail.com" target="blank"> <small className="text-light-emphasis text-wrap "><strong className="text-warning">Email: saiteja.d.555@gmail.com</strong></small></a>
                                    </div>
                                </div>
                            </div>



                            <div
                                className="team-card-div d-flex flex-column justify-content-center align-items-center m-5"
                                data-aos="fade-up"
                            // key={index}
                            >
                                <div className="team-card border d-flex flex-column justify-content-around align-items-center">
                                    <div>
                                        <p className='text-white m-auto border-bottom border-secondary'>G. Maheendra</p>
                                    </div>
                                    <div className="fa-stud-img">
                                        <img src={maheendra} className='rounded-circle' alt="tech team Img" />
                                    </div>
                                    <div className="team-details">
                                        <p className='text-warning-emphasis m-auto text-center'>UI/UX Designer</p>
                                        <a href="mailto:trendymahee@gmail.com " target="blank"> <small className="text-light-emphasis text-wrap "><strong className="text-warning">Email: trendymahee@gmail.com</strong></small></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='dub-about-div'>

                </div>
            </div >

            <FooterDetails />
        </>
    )
}

export default AboutPage