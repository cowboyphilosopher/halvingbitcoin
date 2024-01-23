import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [seconds, setSeconds] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center items-center bg-gray-200 text-xl font-semibold h-1/6">
        Countdown
      </div>
      <div className="flex flex-1 justify-center items-center bg-gray-300">
        <span className="text-green-500 bg-black px-2 py-1">
          {seconds}
        </span>
        <span className="text-gray-700 ml-2">Seconds Remaining</span>
      </div>
    </div>
  );
};

export default Countdown;
