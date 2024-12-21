import React from 'react'
import './FooterDetails.css'
import { Outlet, Link } from "react-router-dom";
const encodePath = (path) => btoa(path); // Encode using Base64
const decodePath = (encodedPath) => atob(encodedPath); // 



const Footer = () => {
    const handleGmritWebsite = () => {
        window.open('https://gmrit.edu.in/', '_blank');
    }
    return (
        <div className='footer-main container-fluid bg-divght d-flex flex-wrap row position-relative align-items-center '>

            <div className='col-3 py-3'>
                <center>
                    <h4>LINKS</h4>
                    <div>
                        <div><a href="#" className='mx-2'>
                            <Link to={`/${encodePath("/stepcone_$_@*502&502##$ -++==*(&^%$#----developers and team")}`}>
                                Developers & Team
                            </Link>
                        </a></div>
                        <div><a className='text-dark-subtle' onClick={handleGmritWebsite}>gmrit.edu.in</a></div>
                        <div><Link to={`/${encodePath("/stepcone_$_@&***)(714)530$215 && --event")}`}>Events</Link></div>
                        <div><Link to={`/${encodePath("/stepcone_$_@*502378r 34374 #$%3$%245 details")}`}>Detailed Info </Link></div>

                    </div>
                </center>

            </div>
            <div className='col-3  py-3'>
                <center>
                    <h4>CONTACT US</h4>
                    <div className=''>
                        <div><a href="#">College Contact</a></div>
                        <div><a href="#">Landline</a></div>
                        <div><a href="">gmrit@gmrit.edu.in</a></div>
                        <div><a href="mailto:stepcone@gmrit.edu.in">stepcone@gmrit.edu.in</a></div>

                    </div>
                </center>

            </div>
            <div className='col-3  py-3'>
                <center>
                    <h4>ADDRESS</h4>
                    <div>
                        <div><a href="#" className='mt-0'>Rajam</a></div>
                        <div><a href="#">Vizianagaram-532127</a></div>
                        <div><a href="https://www.google.co.in/maps/place/GMR+Institute+of+Technology/@18.4621944,83.6675039,14.77z/data=!4m6!3m5!1s0x3a3c772724754cc9:0xcf876cd74c2b6b01!8m2!3d18.4664551!4d83.6607752!16s%2Fm%2F02qh6jk?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='btn map  '>View Map</a> </div>
                    </div>

                </center>

            </div>
            <div className='col-3 py-2 mb-2 follow mt-5'>
                <center className=''>
                    <h4 className=''>FOLLOW US</h4>
                    <div className=' d-flex justify-content-around'>
                        <div><a href="https://www.instagram.com/gmrit_rajam/">
                            <img src="https://static.vecteezy.com/system/resources/previews/017/743/716/original/instagram-icon-logo-free-png.png" alt="" />
                        </a></div>
                        <div><a href="#">
                            <img src="https://www.cput.ac.za/storage/system/icons/cput-x-icon.png" alt="" />
                        </a></div>
                        <div><a href="#">
                            <img src="https://www.pikpng.com/pngl/b/502-5029571_find-me-circle-facebook-logo-png-clipart.png" alt="" /></a></div>
                        <div><a href="#">

                            <img src="https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-facebook-icon-social-media-logo-png-image_6618431.png" alt="" /></a></div>

                    </div>
                    <div className=' developers'>
                        <h5 className=''><u className=''>DEVELOPED BY</u></h5>
                        <h6><a className='text-dark-emphasis' target='blank' href="https://www.linkedin.com/in/venkata-krishna-meka/">M. Venkata Krishna</a></h6>
                        <h6><a className='text-dark-emphasis' target='blank' href="https://www.linkedin.com/in/abdul-yunus-a2679b324/">Abdul Yunus</a></h6>
                    </div>

                </center>

            </div>

        </div>
    )
}

export default Footer