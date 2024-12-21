import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";
import Navbar from "./Navbar";
// import profileImg from `upload/${userData.profilepic}`;
import AOS from "aos";
import LoadingAnimation from "./LoadingAnimation";

const Profile = () => {
    const [userData, setUserData] = useState(null); // Initialize as null
    const [eventData, setEventData] = useState([]);
    const handleProfile = async () => {
        try {
            const response = await axios.get("api/stepcone_backend/userdata.php");
            const data = response.data;
            setUserData(data); // Update state with fetched data
            console.log(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            alert("Failed to fetch user data. Please try again later.");
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            // once: true, // Whether animation should happen only once - while scrolling down
        });
        AOS.refresh(); // Refresh AOS to apply animations on dynamic content
    }, []);

    useEffect(() => {
        handleProfile();
    }, []);

    const handleEventDetails = async () => {
        const myEmail = {
            "myemail": userData.session.myemail
        }
        try {
            const response = await axios.post("api/stepcone_backend/checkevents.php",
                myEmail
            );
            const data = response.data;
            const dataOfEvents = data.events;
            setEventData(dataOfEvents);
            console.log(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            alert("Failed to fetch user data. Please try again later.");
        }
    }

    useEffect(() => {
        handleEventDetails();
    }, [userData]);

    const handleLogoutBtn = async () => {
        try {
            const res = await axios.post("api/stepcone_backend/logout.php");
            const logoutData = res.data;
            alert(logoutData.message);
            if (logoutData.status === "success") {
                window.location.href = "/";
            }
        } catch (error) {
            console.error("Error during logout:", error);
            alert("Logout failed. Please try again.");
        }
    };

    // Show loading state until data is fetched
    if (!userData) {
        return <div>
        </div>
    }
console.log(userData.session.profilepic)


    return (
        <>
            <Navbar />
            <div className="profile-main container-fluid p-4">
                <div className="row gy-1 mt-5 align-items-start bg-dark">
                    {/* Profile Info Section */}
                    <div className="profile-info col-12 col-md-4 col-lg-3 bg-dark py-3 d-flex flex-column align-items-center justify-content-center">
                        <div className="profile-logo d-flex justify-content-center align-items-center">
                            <img
                                // src="https://img.pikbest.com/png-images/20240511/3d-graduate-male-student-with-hat-cartoon-character_10560477.png!sw800"
                                src={`http://localhost/stepcone_backend/upload/${userData.session.profilepic}`}
                                alt="Profile"
                                className="img-fluid"
                            />
                        </div>
                        <div className="profile-details text-center mt-3">
                            <div className="text-info my-2">{userData.session?.username || "N/A"}</div>
                            <div className="text-info my-2">{userData.session?.mobile || "N/A"}</div>
                            <div className="text-info my-2">{userData.session?.myemail || "N/A"}</div>
                            <button className="btn btn-warning px-4 py-2 mt-3" onClick={handleLogoutBtn}>
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Registered Events Section */}
                    <div className="profile-register col-12 col-md-8 col-lg-9 bg-dark text-info p-3">
                        <h3>Registered Events</h3>
                        <hr />
                        <div className="row gy-3 gap-1 "
                        >
                            {eventData?.length > 0 ? (
                                [...Array(eventData.length)].map((_, index) => (
                                    <div
                                        data-aos='fade-up-down'
                                        key={index}
                                        className="profile-event col-12 d-flex justify-content-between align-items-center bg-secondary rounded p-3"
                                    >
                                        <div>{eventData[index]?.eventName || "NA"}</div>
                                        <div className="bg-success px-3 py-2 rounded-2 text-light">
                                            TeamID: {eventData[index]?.teamId || "NA"}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div data-aos="fade-up-down" className="text-center text-danger">No events found for you {userData.session?.username || ""}</div>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
