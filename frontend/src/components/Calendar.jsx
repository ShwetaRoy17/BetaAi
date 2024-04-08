import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="w-full overflow-hidden text-white font-serif text-[1vw]">
      <div className="flex justify-between mb-4">
        <button onClick={prevMonth}>&lt;</button>
        <h2 className="text-[1.3vw] font-bold">
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {[...Array(firstDayOfMonth(currentDate)).keys()].map((day) => (
          <div key={`empty-${day}`} />
        ))}
        {[...Array(daysInMonth(currentDate)).keys()].map((day) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day + 1);
          return (
            <div
              key={day}
              className={`text-center hover:text-gshades8 p-2 ${
                isToday(date) ? "bg-gshades4 text-white rounded-sm" : ""
              }`}
            >
              {day + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
