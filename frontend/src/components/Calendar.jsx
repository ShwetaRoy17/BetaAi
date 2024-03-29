import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const localizer = dateFnsLocalizer();

const events = [
  // Replace with your actual events data with { start: date object, title: event name } format
  { start: new Date(2024, 3, 30), title: 'Meeting' },
  { start: new Date(2024, 4, 2), title: 'Birthday' },
];

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const eventStyleGetter = (event, start) => {
    const today = new Date();
    const isUpcomingEvent = event.start > today;
    return {
      style: {
        backgroundColor: isUpcomingEvent ? 'rgba(255, 224, 178, 0.3)' : 'none',
        borderRadius: '50%',
        width: '5px',
        height: '5px',
        position: 'absolute',
        top: start.top + 5,
        left: (start.left + start.width / 2) - 2.5,
      },
    };
  };

  const handleEventHover = (event) => {
    // Optional: Display a tooltip or popup with event details on hover
    console.log('Event Hovered:', event.title);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <button type="button" onClick={handlePrevMonth} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 focus:outline-none">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span className="text-lg font-bold">{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        <button type="button" onClick={handleNextMonth} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 focus:outline-none">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="px-4 py-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={eventStyleGetter}
          onEventHover={handleEventHover}
          style={{ height: '300px' }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
