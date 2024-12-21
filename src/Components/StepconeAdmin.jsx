import React, { useEffect, useState } from 'react';
import './StepconeAdmin.css';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import StepconeLogo from '/Assets/STEPCONE[1].png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import eventsData from '../../public/Assets/events.json';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
const StepconeAdmin = () => {

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

    // const [eventCount, setEventCount] = useState(0);
    const [eventFetchedData, setEventFetchedData] = useState([]);
    const [currEvent, setCurrEvent] = useState('-----------');
    const [studCount, setStudCount] = useState(1);

    const handleEventClick = async (item) => {
        try {
            // Check if the item has a name (it's an event) or it's a label
            setCurrEvent(item.name || item);
            if (currEvent !== "Internal" && currEvent !== "External") {
                // setEventCount(0);
                const eventNameData = {
                    "event": item.name
                }
                const response = await axios.post(
                    '/api/stepcone_backend/sc_admin.php',
                    eventNameData
                );

                setEventFetchedData(response.data.EventData);
                // console.log(response.data);
                // const fetchedData = ;
                // console.log(fetchedData[0]);
                // console.log(response.data.EventData);
                // setEventFetchedData(response.data.EventData);
            }
            else {
                const studGet = {   
                    "participant": item
                }
                const response = await axios.post(
                    '/api/stepcone_backend/sc_admin_students.php',
                    studGet
                );

                setEventFetchedData(response.data.EventData);
                console.log(response.data);

            }

        }
        catch {
            alert("No data found, Try again");
        }

    };


    useEffect(() => {
        // the default item to be fetched on page load
        const defaultEvent = { name: "Paper Presentation" };
        handleEventClick(defaultEvent);
    }, []); // T

    const handlePdfDownload = () => {
        const pdfContainer = document.getElementById("adm-table-div").innerHTML;

        // Open a new window for printing
        const printWindow = window.open("", "");

        // Write HTML content into the new window
        printWindow.document.write(`
            <html>
                <head>
                  <link   href='https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Great+Vibes&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Onest:wght@100..900&family=Orbitron:wght@400..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Poiret+One&family=Signika+Negative:wght@300..700&family=Thasadith:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap' />

                    <title>Print</title>
                    <style>
                        /* General styles */
                        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Great+Vibes&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Onest:wght@100..900&family=Orbitron:wght@400..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Poiret+One&family=Signika+Negative:wght@300..700&family=Thasadith:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

                        body {
                            font-family: "Mulish", sans-serif;
                            font-optical-sizing: auto;
                            font-weight: 300;
                            font-style: normal;
                            margin: 0;
                            padding: 20px;
                            background-color: #f9f9f9;
                        }
    
                        /* Header styles */
                        .header {
                            text-align: center;
                            margin-bottom: 20px;
                        }
    
                        .header h1 {
                            font-size: 24px;
                            font-weight: bold;
                            margin: 0;
                            color: #333;
                        }
    
                        .header h2 {
                            font-size: 20px;
                            font-weight: normal;
                            margin: 5px 0 20px 0;
                            color: #555;
                        }
    
                        /* Table styles */
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-bottom: 20px;
                        }
    
                        th, td {
                            border: 1px solid #ddd;
                            padding: 8px;
                            text-align: left;
                        }
    
                        th {
                            background-color: #4CAF50;
                            color: white;
                            font-weight: bold;
                        }
    
                        tr:nth-child(even) {
                            background-color: #f2f2f2;
                        }
    
                        tr:hover {
                            background-color: #ddd;
                        }
    
                        /* Footer styles */
                        footer {
                            text-align: center;
                            font-size: 12px;
                            color: #666;
                            margin-top: 20px;
                        }

                    </style>
                </head>
                <body>
                    <div class="header">
                         <h1>GMR INSTITUTE OF TECHNOLOGY</h1>
                        <h2>STEPCONE 2025</h2>
                        
                    </div>
                    ${pdfContainer}
                    <footer>
                        Generated on ${new Date().toLocaleString()}
                    </footer>
                </body>
            </html>
        `);

        // Close the document stream and trigger print
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    };
    console.log(studCount);


    return (
        <div className='sc-adm-main'>
            {/* Navigation Bar */}
            <div className='sc-adm-nav d-flex justify-content-center align-items-center '>
                <div className='d-flex align-items-center justify-content-around'>
                    <img src={StepconeLogo} height='40px' alt="Stepcone Logo" />
                    <Link to="/sc-2025-adm-g19M98R">
                        <p className='pt-3 d-flex text-light mx-4'>STEPCONE ADMIN</p>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="sc-adm container-fluid">
                <div className="row d-flex">
                    {/* Sidebar */}
                    <div className="sc-index col-2 ">
                        <div className='text-center'>
                            <div className='text-warning fs-4 text-center w-50'><FontAwesomeIcon icon={faListCheck} style={{ color: "darkblue" }} className='mx-2' />Index</div>
                        </div>
                        <hr />
                        <div className='sc-index-data'>
                            <div className='d-flex py-3 gap-2'>
                                <button className='sc-adm-internal'
                                    onClick={() => handleEventClick("Internal")}
                                >
                                    <Link>
                                        <p className='px-3 fs-5 border adm-login-details-btn '

                                        >Internal</p>
                                    </Link>
                                </button>
                                <button className='sc-adm-external'
                                    onClick={() => handleEventClick("External")}
                                >
                                    <Link>
                                        <p className='px-3 fs-5 border adm-login-details-btn '>External</p>
                                    </Link>
                                </button>
                            </div>

                            {/* Event Categories with Sub-events */}
                            <div className='sc-adm-event'>
                                <h3 className='text-light'>Central Events</h3>
                                <ul className='text-light text-start px-3'>
                                    {
                                        centralEvents.map((event, index) => (
                                            <Link className=''>
                                                <button
                                                    onClick={() => handleEventClick(event = event)}
                                                    className='sc-adm-event-click text-start'>
                                                    <li className='px-2'>{event.name}</li>
                                                </button>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className='sc-adm-event'>
                                <h3 className='text-light'>Signature Events</h3>
                                <ul className='text-light text-start px-3'>
                                    {
                                        signatureEvents.map((event, index) => (
                                            <Link className=''>
                                                <button
                                                    onClick={() => handleEventClick(event)}
                                                    className='sc-adm-event-click text-start'>
                                                    <li className='px-2'>{event.name}</li>
                                                </button>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className='sc-adm-event'>
                                <h3 className='text-light'>Frontline Events</h3>
                                <ul className='text-light text-start px-3'>
                                    {
                                        frontlineEvents.map((event, index) => (
                                            <Link className=''>
                                                <button
                                                    onClick={() => handleEventClick(event)}
                                                    className='sc-adm-event-click text-start'>
                                                    <li className='px-2'>{event.name}</li>
                                                </button>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className='sc-adm-event'>
                                <h3 className='text-light'>On-Site Events</h3>
                                <ul className='text-light text-start px-3'>
                                    {
                                        onsiteEvents.map((event, index) => (
                                            <Link className=''>
                                                <button
                                                    onClick={() => handleEventClick(event)}
                                                    className='sc-adm-event-click text-start'>
                                                    <li className='px-2'>{event.name}</li>
                                                </button>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='sc-adm-event'>
                                <h3 className='text-light'>Workshops</h3>
                                <ul className='text-light text-start px-3'>
                                    {
                                        workshops.map((event, index) => (
                                            <Link className='' >
                                                <button
                                                    onClick={() => handleEventClick(event)}
                                                    className='sc-adm-event-click text-start'>
                                                    <li className='px-2'>{event.name}</li>
                                                </button>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='st-adm-dub-div'>
                                {/* this is the dublicate div for adjustments */}
                            </div>
                        </div>
                    </div>

                    {/* Table Content */}

                    {
                        (currEvent === "Internal") && (
                            <div className='col col-10 ' id='adm-table-div' >
                                <div className="adm-event-hdng text-center d-flex  flex-column justify-content-center ">
                                    <h1 className='text-secondary sc-adm-curr-event  fs-2 py-4 border-bottom' >{currEvent}</h1>
                                    <h4 className='text-dark'>Number of Students: {eventFetchedData ? eventFetchedData[0] ? eventFetchedData.length : "N/A" : 'N/A'}</h4>
                                </div>
                                <table className="adm-data-table table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">JNTU NO</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Term</th>
                                            <th scope="col">Branch</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            eventFetchedData && (
                                                eventFetchedData.map((stud, index) => (
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{stud.username}</td>
                                                        <td>{stud.jntu}</td>
                                                        <td>{stud.email}</td>
                                                        <td>{stud.mobile}</td>
                                                        <td>term-{stud.term}</td>
                                                        <td>{stud.branch}</td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                        {
                                            !eventFetchedData && (
                                                <div className='position-absolute d-flex justify-content-center col-9' >
                                                    <h3 className='text-center text-danger m-auto'>No data found</h3>
                                                </div>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        )
                    }




                    {
                        (currEvent === "External") && (
                            <div className='col col-10 ' id='adm-table-div' >
                                <div className="adm-event-hdng text-center d-flex  flex-column justify-content-center ">
                                    <h1 className='text-secondary sc-adm-curr-event  fs-2 py-4 border-bottom' >{currEvent}</h1>
                                    <h4 className='text-dark'>Number of Students: {eventFetchedData ? eventFetchedData[0] ? eventFetchedData.length : "N/A" : 'N/A'}</h4>
                                </div>
                                <table className="adm-data-table table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">College Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Term</th>
                                            <th scope="col">Branch</th>
                                            <th scope="col">Accomodation</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            eventFetchedData && (
                                                eventFetchedData.map((stud, index) => (
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{stud.username}</td>
                                                        <td>{stud.clg_name}</td>
                                                        <td>{stud.email}</td>
                                                        <td>{stud.mobile}</td>
                                                        <td>term-{stud.term}</td>
                                                        <td>{stud.branch}</td>
                                                        <td>
                                                            {
                                                                stud.accomodation == 0 && (
                                                                    "not Registered"
                                                                )
                                                            }
                                                            {
                                                                stud.accomodation == 1 && (
                                                                    "Registered"
                                                                )
                                                            }
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                        {
                                            !eventFetchedData && (
                                                <div className='position-absolute d-flex justify-content-center col-9' >
                                                    <h3 className='text-center text-danger m-auto'>No data found</h3>
                                                </div>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        )
                    }





                    {
                        (currEvent !== "Internal" && currEvent !== "External") && (
                            <div className='col col-10 ' id='adm-table-div' >
                                <div className="adm-event-hdng text-center d-flex  flex-column justify-content-center ">
                                    <h1 className='text-secondary sc-adm-curr-event  fs-2 py-4 border-bottom' >{currEvent}</h1>
                                    <h4 className='text-dark'>Number of Teams: {eventFetchedData ? eventFetchedData[0] ? eventFetchedData.length / eventFetchedData[0].Teamsize : "N/A" : 'N/A'}</h4>
                                </div>
                                <table className="adm-data-table table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Team Id</th>
                                            <th scope="col">Team Name</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Student Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">payment Status</th>
                                            <th scope="col">Participant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            eventFetchedData && (
                                                eventFetchedData.map((stud, index) => (
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{stud.teamId}</td>
                                                        <td>{stud.Teamname}</td>
                                                        <td>{stud.name}</td>
                                                        <td>{stud.email}</td>
                                                        <td>{stud.mobile}</td>
                                                        <td>{stud.amount}/-</td>
                                                        <td>{stud.transStatus}</td>
                                                        <td>
                                                            {
                                                                stud.Affiliated == 1 && (
                                                                    "Internal"
                                                                )
                                                            }
                                                            {
                                                                stud.Affiliated == 0 && (
                                                                    "External"
                                                                )
                                                            }
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                        {
                                            !eventFetchedData && (
                                                <div className='position-absolute d-flex justify-content-center col-9' >
                                                    <h3 className='text-center text-danger m-auto'>No data found</h3>
                                                </div>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        )
                    }



                    <div className=' d-flex justify-content-center m-auto sc-adm-print position-fixed w-100'>
                        <button className=' bg-primary' onClick={handlePdfDownload}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepconeAdmin;
