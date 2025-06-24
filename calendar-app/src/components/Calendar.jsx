// src/components/Calendar.jsx
import React from 'react';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
dayjs.extend(isToday);

function Calendar({ currentDate, events }) {
  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDay = startOfMonth.day();  
  const daysInMonth = endOfMonth.date();

  const calendar = [];
  for (let i = 0; i < startDay; i++) calendar.push(null);
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push(dayjs(currentDate).date(i));
  }

  const getEventsForDay = (day) =>
    events.filter(event => dayjs(event.date).isSame(day, 'day'));

  return (
    <div className="grid grid-cols-7 gap-2">
      {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
        <div key={d} className="font-bold text-center">{d}</div>
      ))}
      {calendar.map((day, i) => (
        <div
          key={i}
          className={`h-24 p-1 border rounded text-sm overflow-auto ${day?.isToday() ? 'bg-yellow-100 border-yellow-500' : ''}`}
        >
          {day && (
            <>
              <div className="font-medium">{day.date()}</div>
              {getEventsForDay(day).map((event, i) => (
                <div key={i} className="mt-1 text-xs bg-blue-200 px-1 rounded" title={`${event.title} (${event.time})`}>
                  {event.title}
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
