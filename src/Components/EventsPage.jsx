import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './EventsPage.css';

import FooterDetails from './FooterDetails';
import eventsData from '../../public/Assets/events.json';
import SpecificEventPage from './SpecificEventPage';

const EventsPage = () => {
    // Filter events based on event type
    const centralEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "central")
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const signatureEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "signature")
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const frontlineEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "frontline")
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const workshops = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "workshops")
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const onsiteEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "onsite")
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );

    const [eventClicked, setEventClicked] = useState([]);
    const [eventType, setEventType] = useState("");

    const handleEventHeadingClick = (eventHeading) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });

        // Update state based on clicked button
        switch (eventHeading) {
            case "Central":
                setEventType("Central Events");
                setEventClicked(centralEvents);
                break;
            case "Signature":
                setEventType("Signature Events");
                setEventClicked(signatureEvents);
                break;
            case "Frontline":
                setEventType("Frontline Events");
                setEventClicked(frontlineEvents);
                break;
            case "On-Site":
                setEventType("On-Site Events");
                setEventClicked(onsiteEvents);
                break;
            case "Workshops":
                setEventType("Workshops");
                setEventClicked(workshops);
                break;
            default:
                setEventType("Central Events");
                setEventClicked(centralEvents);
        }
    };

    useEffect(() => {
        // Set default view to "Central Events"
        setEventClicked(centralEvents);
        setEventType("Central Events");
        window.scrollTo({
            top: 0,
            behavior: 'instant', // Instant scroll on initial load
        });
    }, []); // Runs only once on mount

    return (
        <>
            <Navbar />
            <div className="events-page">
                <div className="dublicate-div"></div>
                <div className="events-page-header rounded-3 row col m-auto pb-0">
                    {["Central", "Signature", "Frontline", "On-Site", "Workshops"].map((heading, index) => (
                        <div
                            key={index}
                            className="col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center"
                        >
                            <button
                                className="btn-sm btn-md btn-lg"
                                onClick={() => handleEventHeadingClick(heading)}
                            >
                                {heading}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="events-data d-flex flex-column flex-wrap justify-content-center align-items-center">
                    <SpecificEventPage eventType={eventType} specificEventsProp={eventClicked} />
                </div>

                <div className="pt-5 event-footer-div"></div>
            </div>
            <FooterDetails />
        </>
    );
};

export default EventsPage;
