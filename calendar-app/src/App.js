// src/App.jsx
import React, { useState } from 'react';
import dayjs from 'dayjs';
import Calendar from './components/Calendar';
import events from './data/events.json';

function App() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handlePrev = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const handleNext = () => setCurrentDate(currentDate.add(1, 'month'));

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrev} className="bg-blue-600 text-white px-4 py-2 rounded">Prev</button>
          <h1 className="text-xl font-bold">{currentDate.format('MMMM YYYY')}</h1>
          <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
        </div>
        <Calendar currentDate={currentDate} events={events} />
      </div>
    </div>
  );
}

export default App;
