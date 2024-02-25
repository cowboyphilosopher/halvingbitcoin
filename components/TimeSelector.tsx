import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function TimeSelector() {
  const [selectedTime, setSelectedTime] = useState<number>(0);

  const handleSliderChange = (value: number | number[]) => {
    console.log("value = " + value);
    // If value is an array, select the first value (in case of range slider)
    //setSelectedTime(Array.isArray(value) ? value[0] : value);
    if(Array.isArray(value)) {

      setSelectedTime(value[0]? value[0] : 0);
    } else {
      setSelectedTime(value);
    }
  };

  const formatTime = (time: number) => {
    const days = Math.floor(time / 24);
    const hours = time % 24;
    return `${days} day(s) ${hours}:00`;
  };

  // Define marks for the slider procedurally in a loop
  const marks: { [key: number]: { style: React.CSSProperties; label: string } } = {};
  const numDays = 2; // Number of days
  const numHoursPerDay = 24;
  for (let i = 0; i <= numDays * numHoursPerDay; i += 4) {
    marks[i] = { style: { color: '#FFFFFF', fontSize: '14px' }, label: `${i % numHoursPerDay}:00` };
  }

  const sliderStyles = {
    track: { backgroundColor: '#ff0000', height: '8px' },
    rail: { backgroundColor: '#0000ff', height: '8px' },
    handle: { borderColor: '#ff00ff', height: '8px', width: '8px' },
    dot: { // Use background image for dots
      width: '16px',
      height: '16px',
      backgroundImage: "/images/full.png",
    },
    activeDot: { display: 'none' }, // Hide active dot, since we are using custom images
    step: { backgroundColor: '#0000ff', height: '4px' }, // Typo: remove extra #
  };

  return (
    <div className="flex flex-col items-center">
      {/* Slider component */}
      <Slider
        value={selectedTime}
        min={0}
        max={numDays * numHoursPerDay} // Total hours
        onChange={handleSliderChange}
        marks={marks}
        step={4}
        className="mb-4" // Apply margin bottom using Tailwind CSS
        styles={sliderStyles} // Apply custom styles
      />
      {/* Text box to display selected time */}
      <div className="mt-2"> {/* Apply margin top for spacing */}
        Selected Time: {formatTime(selectedTime)}
      </div>
    </div>
  );
}