import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector } from 'react-redux';

const localizer = momentLocalizer(moment);

function MyCalendar() {
  

  const {events} = useSelector((state) => state.events);

  const myEventsList = events.map((event) => ({
    title: event.eventName,
    start: new Date(event.date),
    end: new Date(event.date),
    allDay: true,
  }));

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default MyCalendar;