import React, { useEffect } from 'react'
import EventCard from './EventCard';
import { use } from 'react';

const SpecificEventPage = ({ specificEventsProp, eventType }) => {
  const [specificEvents, setSpecificEvents] = React.useState([]);
  useEffect(
    () => {
      setSpecificEvents(specificEventsProp);
    })

  // Scroll to the top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Smooth scrolling effect
    });
  }, []); // Empty dependency array ensures it runs only on component mount

  return (
    <>
      <div className='specific-event-main' >
        <div>
          <h1 className='pt-4 event-h1s text-center fs-3'>{eventType}</h1>
        </div>
        <hr className='event-hr' />
        <div className='d-flex flex-row flex-wrap justify-content-around gap-4' >
          {
            specificEvents.map((event) => (
              <div className='pt-2 col col-12 col-sm-8 col-md-5 col-xl-3'>
                <EventCard key={event.id} event={event} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SpecificEventPage