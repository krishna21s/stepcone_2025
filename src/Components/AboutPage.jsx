import React, { useEffect } from 'react'
import './AboutPage.css'
import aboutTeam from '../../public/Assets/aboutTeam.json';
import aboutDev from '../../public/Assets/aboutDev.json';
import AboutCard from './AboutCard';
//Temp logo images
import Fa_Logo from "/Assets/fa_stud_logo.png"
import Stud_Logo from "/Assets/stud.png";


import Navbar from './Navbar.jsx';
import AOS from 'aos';
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

    return (
        <>
            <Navbar />
            <div className='about-main'>
                <div className="container d-flex flex-column">
                    <div className="dublicate-div">

                    </div>
                    <div>
                        <div className='p-5'>
                            <h1 className="about-title text-center fs-2 border-bottom pb-3">Our Developers</h1>

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
                                        <img src={Fa_Logo} alt="Faculty Img" />
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

                        <div>
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
                                                <div className="fa-stud-img">
                                                    <img src={Fa_Logo} alt="Faculty Img" />
                                                </div>
                                                <div className="team-details">
                                                    <p className='text-warning-emphasis m-auto text-center '>Faculty Convenor</p>
                                                    <a href="mailto:hariprasad@gmrit.edu.in" target="blank"> <small className="text-light-emphasis text-wrap "><strong className="text-warning">Email: </strong>hariprasad@gmrit.edu.in</small></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage