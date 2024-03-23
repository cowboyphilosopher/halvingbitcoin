import React, { useState } from 'react';
import { Range } from 'react-range';

export default function PartyDay() {
  

  return (
    <div className="w-full px-4 relative">
      <div className="w-full text-white text-lg md:text-xl lg:text-2xl text-center">
       4/19 - Hangout Day
      </div>
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         We have booked a house for the 18th-22nd of April.
      </div> */}
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         The location is subject to change only if we find an even better venue.
      </div> */}
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         Friday night we will have a small gathering for bitcoiners.
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        Anyone currently in our bitcoin chats are welcome to hang out and talk bitcoin in style. 
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        We can order some food/drinks from the local restaurants. 
      </div>
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        There will be activities for smaller kids such as a bounce house. 
      </div> */}
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        If anyone needs to crash to stay for the ceremony or boat day there will be several beds available. 
      </div> */}
    </div>
  );
}
