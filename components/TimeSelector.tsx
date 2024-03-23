import React, { useState } from 'react';
import { Range } from 'react-range';

export default function TimeSelector() {
  const [selectedHour, setSelectedHour] = useState<number>(12);

  const handleSliderChange = (values: number[]) => {
    // if (values[0] === 0) {
    //   values[0] = 24;
    // }

    setSelectedHour(values[0] || 0);
    console.log('Current hour:', values[0]);
  };

  const formatTime = (hour: number) => {
    const meridiem = hour < 12 ? 'am' : 'pm';
    const formattedHour = hour % 12 || 12;
    if (hour === 12) {
      return `Noon`
    } if (hour === 0 || hour === 24) {
      return `12am`
    }
    return `${formattedHour}${meridiem}`;
  };

  return (
    <div className="w-full px-4 relative">
      <div className="w-full text-white text-lg md:text-xl lg:text-2xl text-center">
        Event Schedule
      </div>
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        The time that block 840,000 occurs will affect the schedule of the party.
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        The ceremony for the halving will happen on block 840,000 regardless of the time.
      </div> */}
      <div className="w-full mb-4 text-white text-sm md:text-base lg:text-lg text-center">
         There are 2 main event days so please plan accordingly.
      </div>
      <div className="w-full mb-4 text-white text-sm md:text-base lg:text-lg text-center">
        Let&apos;s assume that we can somehow know that block 840,000 is on 4/20 at the selected time.
      </div>
      <Range
        step={4}
        min={0}
        max={24}
        values={[selectedHour]}
        onChange={handleSliderChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="flex-center w-4/5 lg:w-1/2 h-5 bg-[#c05000] border border-white p-1 rounded-full mt-4 relative"
            style={{ touchAction: 'none', margin: '0 auto' }}
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
                <div className="text-white xs:text-xs sm:text-sm md:text-2xl lg:text-2xl absolute top-4 left-1/2 -translate-x-1/2" style={{ marginTop: selectedHour === hour ? '8px' : '0' }}>
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
            className="w-9 h-9 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full border border-white focus:outline-none focus:ring-0 focus:ring-[#c05000]"
            style={{ zIndex: 1, cursor: 'grab' }}
          />
        )}
      />
      <div className="flex justify-center items-center h-3/5 mt-6">
        <div className="text-white text-sm md:text-base lg:text-lg text-center mt-4">
          {selectedHour === 0 && (
            <div className="flex-col justify-center items-center mt-2">
              <div>
                Around midnight of 4/19-4/20
              </div>
              {/* <div>
                Party Day: 4/19
              </div>
              <div>
                Boat Day: 4/20
              </div> */}
              <div>
              It will be like a New Year&apos;s Eve party when we celebrate. Although some with families might miss out on the ceremony.
              </div>
            </div>
          )}
          {selectedHour === 4 && (
            <div className="flex-col justify-center items-center mt-2">
              <div>
                Around 4am of 4/20
              </div>
              {/* <div>
                Party Day: 4/19
              </div>
              <div>
                Boat Day: 4/20
              </div> */}
              <div>
                Unfortunately most people will not be able to participate in the ceremony this late/early so only the Best Bitcoiners will be there.
              </div>
            </div>
          )}
          {selectedHour === 8 && (
            <div className="flex-col justify-center items-center mt-2">
            <div>
              Around 8am of 4/20
            </div>
            {/* <div>
              Party Day: 4/19
            </div>
            <div>
              Boat Day: 4/20
            </div> */}
            <div>
              Early morning ceremony followed by the boat trip for members later that day. Non members are still welcome at the venue to enjoy the ceremony. 
            </div>
          </div>
          )}
          {selectedHour === 12 && (
            <div className="flex-col justify-center items-center mt-2">
              <div>
                Around Noon of 4/20
              </div>
              {/* <div>
                Party Day: 4/20
              </div>
              <div>
                Boat Day: 4/21
              </div> */}
              <div>
                This is a decent time for the ceremony but some people might not be at the venue for the party day yet. 
              </div>
            </div>
          )}
          {selectedHour === 16 && (
            <div className="flex-col justify-center items-center mt-2">
              <div>
                Around 4pm of 4/20
              </div>
              {/* <div>
                Party Day: 4/20
              </div>
              <div>
                Boat Day: 4/21
              </div> */}
              <div>
                Good time for the ceremony with more people having arrived and the event will be in full swing.
              </div>
            </div>
          )}
          {selectedHour === 20 && (
            <div className="flex-col justify-center items-center mt-2">
              <div>
                Around 8pm of 4/20
              </div>
              {/* <div>
                Party Day: 4/20
              </div>
              <div>
                Boat Day: 4/21
              </div> */}
              <div>
                The ideal time for the halving ceremony. Most people will have arrived and eaten dinner. Great time for desserts and drinks to celebrate the halving.
              </div>
            </div>
          )}
          {selectedHour === 24 && (
            <div className="flex-col justify-center items-center mt-2">
              <div>
                Around Midnight of 4/20-4/21
              </div>
              {/* <div>
                Party Day: 4/20
              </div>
              <div>
                Boat Day: 4/21
              </div> */}
              <div>
                It will be like a New Year&apos;s Eve party when we celebrate. Although some with families might miss out on the ceremony.
              </div>
            </div>
          )}
          {/* Add more divs as needed for other selected hours */}
        </div>
      </div>
    </div>
  );
}
