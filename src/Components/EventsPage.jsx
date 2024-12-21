import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './EventsPage.css'

import EventCard from './EventCard';
import FooterDetails from './FooterDetails'
import eventsData from '../../public/Assets/events.json';
import SpecificEventPage from './SpecificEventPage';
const EventsPage = () => {

    const centralEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "central") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const signatureEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "signature") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const frontlineEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "frontline") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const workshops = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "workshops") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );
    const onsiteEvents = eventsData.events
        .filter(eventCategory => eventCategory.eventType === "onsite") // Match eventType
        .flatMap(eventCategory =>
            eventCategory.departments.flatMap(department => department.events)
        );

    const [eventClicked, setEventClicked] = useState([]);
    const [eventType, setEventType] = useState("");
    const handleEventHeadingClick = (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
        const eventHeading = e.target.textContent;
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

    }


    // Scroll to the top on page load
    useEffect(() => {
        setEventClicked(centralEvents);
        setEventType("Central Events");
        window.scrollTo({
            top: 0,
            behavior: 'instant', // Smooth scrolling effect
        });
    }, []); // Empty dependency array ensures it runs only on component mount

    return (
        <>
            <Navbar />
            <div className='events-page'>
                <div className="dublicate-div ">

                </div>
                <div className='events-page-header rounded-3 row col m-auto  pb-0'>
                    <div className='col col-6 col-sm-4 col-lg-2'>
                        <a href="#central">
                            <button className=" btn-sm btn-md btn-lg " onClick={(e) => handleEventHeadingClick(e)}>
                                Central
                            </button>
                        </a>
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        <a href="#signature">
                            <button className=" btn-sm btn-md btn-lg" onClick={(e) => handleEventHeadingClick(e)}>
                                Signature
                            </button>
                        </a>
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        <a href="#frontline">
                            <button className=" btn-sm btn-md btn-lg " onClick={(e) => handleEventHeadingClick(e)}>
                                Frontline
                            </button>
                        </a>
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        <a href="#onsite">
                            <button className=" btn-sm btn-md btn-lg " onClick={(e) => handleEventHeadingClick(e)}>
                                On-Site
                            </button>
                        </a>
                    </div>
                    <div className='col col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center'>
                        <a href="#workshops">
                            <button className=" btn-sm btn-md btn-lg d-block d-md-inline-block " onClick={(e) => handleEventHeadingClick(e)}>
                                Workshops
                            </button>
                        </a>
                    </div>
                </div>
                <div className="events-data d-flex flex-column flex-wrap justify-content-center align-items-center">
                    {/* central events */}
                    {/* <div className='central-main' id='central'>
                        <div className=''>
                            <h1 className='pt-4 event-h1s text-center fs-3'>Central Events</h1>
                        </div>
                        <hr className='event-hr' />
                        <div className='central d-flex flex-row flex-wrap justify-content-around gap-4' id='central'>
                            {
                                centralEvents.map((event) => (
                                    <div className='pt-2 col col-12 col-sm-8 col-md-5  col-xl-3'>
                                        <EventCard key={event.id} event={event} />
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}


                    <SpecificEventPage eventType={eventType} specificEventsProp={eventClicked} />
                    {/* signature events */}
                    {/* <div className='signature-main' id='signature' >
                        <div>
                            <h1 className='pt-4 event-h1s text-center fs-3'>Signature Events</h1>
                        </div>
                        <hr className='event-hr' />
                        <div className='signature d-flex flex-row flex-wrap justify-content-around gap-4' >
                            {
                                signatureEvents.map((event) => (
                                    <div className='pt-2 col col-12 col-sm-8 col-md-5 col-xl-3'>
                                        <EventCard key={event.id} event={event} />
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}

                    {/* Frontline events */}

                    {/* <div className='frontline-main' id='frontline'>
                        <div>
                            <h1 className='pt-4 event-h1s text-center fs-3'>Frontline Events</h1>
                        </div>
                        <hr className='event-hr' />
                        <div className='frontline d-flex flex-row flex-wrap justify-content-around gap-4' >
                            {
                                frontlineEvents.map((event) => (
                                    <div className='pt-2 col col-12 col-sm-8 col-md-5 col-xl-3'>
                                        <EventCard key={event.id} event={event} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className='onsite-main' id='onsite'>
                        <div>
                            <h1 className='pt-4 event-h1s text-center fs-3'>On-Site Events</h1>
                        </div>
                        <hr className='event-hr' />
                        <div className='onsite d-flex flex-row flex-wrap justify-content-around gap-4' >
                            {
                                onsiteEvents.map((event) => (
                                    <div className='pt-2 col col-12 col-sm-8 col-md-5 col-xl-3'>
                                        <EventCard key={event.id} event={event} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>



                    <div className='workshops-main' id='workshops'>
                        <div>
                            <h1 className='pt-4 event-h1s text-center fs-3'>Workshops</h1>
                        </div>
                        <hr className='event-hr' />
                        <div className='onsite d-flex flex-row flex-wrap justify-content-around gap-4' >
                            {
                                workshops.map((event) => (
                                    <div className='pt-2 col col-12 col-sm-8 col-md-5 col-xl-3'>
                                        <EventCard key={event.id} event={event} />
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}

                </div>
                <div className='pt-5 event-footer-div'>

                </div>
            </div>
            <FooterDetails />
        </>
    )
}

export default EventsPage