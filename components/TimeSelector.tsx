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
    <div className="w-full h-1/5 px-4 relative">
      <div className="w-full mt-4 text-white text-sm md:text-base lg:text-lg text-center">
        The time that block 840,000 occurs will affect the schedule of the party.
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         There are 2 main event days so please plan accordingly.
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
        <div className="text-white text-center mt-4">
          <div>
            Let&apos;s assume that block 840,000 is on 4/20 at the selected time. The ceremony for the halving will happen on block 840,000 regardless of the time.
          </div>
          {selectedHour === 0 && (
            <div>
              If the block is around midnight of 4/19-4/20 then the family day is on 4/19 and boat day is 4/20. This is just shifting the day forward by 1 day. This allows for more people to stay and participate. 
            </div>
          )}
          {selectedHour === 4 && (
            <div>
              If the block is around 4am of 4/20 then the family day is on 4/19 and boat day is 4/20. Unfortunately most people will not be able to participate in the ceremony but the best bitcoiners will be there.
            </div>
          )}
          {selectedHour === 8 && (
            <div>
              If the block is around 8am of 4/20 then the family day is on 4/19 and boat day is 4/20. Early morning ceremony followed by the boat trip for members later that day. 
            </div>
          )}
          {selectedHour === 12 && (
            <div>
              If the block is around Noon of 4/20 then the family day is on 4/20 and boat day is 4/21. This is a decent time but some people might not be at the venue for the party day yet. 
            </div>
          )}
          {selectedHour === 16 && (
            <div>
              If the block is around 4pm of 4/20 then the family day is on 4/20 and boat day is 4/21. Even better time for the ceremony with more people having arrived and the event will be in full swing.
            </div>
          )}
          {selectedHour === 20 && (
            <div>
              If the block is around 8pm of 4/20 then the family day is on 4/20 and boat day is 4/21. The ideal time for the halving ceremony. Most people will have arrived and dinner will have been served. Great time for desserts and drinks to celebrate the halving.
            </div>
          )}
          {selectedHour === 24 && (
            <div>
              If the block is around midnight of 4/20-4/21 then the family day is on 4/20 and boat day is 4/21. Another great time since it will be like a new years countdown although some families will probably miss out due to it being later.
            </div>
          )}
          {/* Add more divs as needed for other selected hours */}
        </div>
      </div>
    </div>
  );
}
