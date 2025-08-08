import React, { useState, useEffect } from 'react';

const Greetings = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

   const getGreeting = () => {
    const hour = dateTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // Format time as HH:MM:SS
  const timeString = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  // Format date as Month DD, YYYY
  const dateString = dateTime.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
  // Get day of week name (e.g., Monday)
  const dayName = dateTime.toLocaleDateString([], { weekday: 'long' });
  

  return (
    <div className='bg-[#262626] p-6 rounded-xl border border-[#262626] flex items-center justify-between'>
      <div className='bg-[#1a1a1a] p-4 rounded-lg'>
        <h2 className='text-2xl font-bold text-white mb-2'>{getGreeting()}, Manusha</h2>
        <p className='text-gray-400 flex items-center gap-2'>
          Give your best services for customers 😊
        </p>
      </div>
      {/* Current Time */}
      <div className='bg-[#1a1a1a] p-4 rounded-lg text-center py-4'>
        <div
          className='text-3xl font-bold text-white font-mono'
          style={{ width: '8ch', minWidth: '8ch', display: 'inline-block', fontVariantNumeric: 'tabular-nums' }}
        >
          {timeString}
        </div>
        <div className='text-gray-400 text-sm '>
          {dateString},{dayName}
        </div>
        
      </div>
    </div>
  );
};

export default Greetings;
