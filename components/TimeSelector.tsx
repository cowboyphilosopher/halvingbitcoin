import React, { useState } from 'react';
import { Range } from 'react-range';

export default function TimeSelector() {
  const [selectedHour, setSelectedHour] = useState<number>(12);

  const handleSliderChange = (values: number[]) => {
    setSelectedHour(values[0] || 0);
    console.log('Current hour:', values[0]);
  };

  const formatTime = (hour: number) => {
    const meridiem = hour < 12 ? 'am' : 'pm';
    const formattedHour = hour % 12 || 12;
    if (hour === 12) {
      return `Noon`
    }if (hour === 0 || hour === 24) {
      return `Midnight`
    }
    return `${formattedHour}:00${meridiem}`;
  };

  return (
    <div className="w-full px-4 relative">
      <Range
        step={4}
        min={0}
        max={24}
        values={[selectedHour]}
        onChange={handleSliderChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-5 bg-[#c05000] border border-white p-1 rounded-full mt-4 relative"
            style={{ touchAction: 'none' }}
          >
            {children}
            {[0, 4, 8, 12, 16, 20, 24].map((hour) => (
              <div
                key={hour}
                className="absolute top-1/2 transform -translate-y-1/2"
                style={{
                  left: `calc(${(hour / 24) * 100}% - 4px)`,
                }}
              >
                {/* Blue dot always rendered with varying opacity */}
                <div
                  className="w-2 h-2 bg-white rounded-full"
                  style={{ opacity: selectedHour === hour ? 0 : 1 }}
                />
                <div className="text-white text-xs absolute top-4 left-1/2 transform -translate-x-1/2" style={{ marginTop: selectedHour === hour ? '8px' : '0' }}>
                  {formatTime(hour)}
                </div>
              </div>
            ))}
          </div>
        )}
        
        renderThumb={({ props }) => (
          <img
            {...props}
            src="/images/full.png"
            alt="Slider Handle"
            className="w-6 h-6 rounded-full border border-white focus:outline-none focus:ring-0 focus:ring-[#c05000]"
            style={{ zIndex: 1, cursor: 'grab' }}
          />
        )}
      />
    </div>
  );
}
