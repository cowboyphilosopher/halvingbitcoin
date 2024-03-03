import React, { useState } from 'react';
import { Range } from 'react-range';

export default function PartyDay() {
  

  return (
    <div className="w-full px-4 relative">
      <div className="w-full text-white text-lg md:text-xl lg:text-2xl text-center">
        Friends and Family Day
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         We have booked a house for the 18th-22nd of April.
      </div>
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         The location is subject to change only if we find an even better venue.
      </div> */}
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         Any day that we have the venue members are welcome to stop by to hang out and enjoy the amenities.
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        The day of the halving there will be a pool party and catered food/dessert carts.
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         Members are encouraged to bring precoiners like friends and family to join in the fun on this day.
      </div>
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        There will be activities for smaller kids such as a bounce house. 
      </div> */}
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        If anyone needs to crash to stay for the ceremony or boat day there will be several beds available. 
      </div> */}
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        <a href="https://www.vrbo.com/3141140" className="text-white underline hover:text-gray-300">Check out the place here</a>
      </div>

      <div className="w-full mb-4 text-white text-sm md:text-base lg:text-lg text-center">
      <a href="https://www.youtube.com/watch?v=yDElnJ7dnsk" className="text-white underline hover:text-gray-300">Also a small video tour here</a>
      </div>
    </div>
  );
}
