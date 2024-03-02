import React, { useState } from 'react';
import { Range } from 'react-range';

export default function BoatDay() {
  

  return (
    <div className="w-full px-4 relative">
      <div className="w-full text-white text-lg md:text-xl lg:text-2xl text-center">
        Boat Day
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        Rent a boat.
      </div>
      <div className="w-full mb-4 text-white text-sm md:text-base lg:text-lg text-center">
         Link to the boat. 
      </div>
    </div>
  );
}
