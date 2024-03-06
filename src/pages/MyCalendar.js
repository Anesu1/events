
import {useRef, useEffect} from 'react'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useSelector } from 'react-redux';

export default function MyCalendar() {
  
    const {events} = useSelector((state) => state.events);
    const calendarRef = useRef(null);

    useEffect(() => {
      const calendarEl = calendarRef.current;
  
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: formatEvents(events),
        // Add any other configuration options you need
      });
  
      calendar.render();
  
      return () => {
        calendar.destroy();
      };
    }, [events]);

    const formatEvents = (events) => {
      return events.map((event) => ({
        title: event.eventName,
        start: event.date,
      }));
    };
  
    return <div className='p-10' ref={calendarRef}></div>;
   
  
}
