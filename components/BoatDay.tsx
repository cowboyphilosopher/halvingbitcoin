import React, { useState } from 'react';
import { Range } from 'react-range';

export default function BoatDay() {
  

  return (
    <div className="w-full px-4 relative">
      <div className="w-full text-white text-lg md:text-xl lg:text-2xl text-center">
        Party Boat Day
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         Keeping with the theme of bitcoin the boat is called &quot;Bella Luna&quot; which means Beautiful Moon.
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        The captain of the boat is also a bitcoiner and will be paid in bitcoin.
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        The boat maxes out at 40 guests which should be enough for all members to bring a +1. 
      </div>
      
      
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        Members should NOT bring their hardware wallets on the boat unless they want plausible deniability about losing their coins. 
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        There MAY be a boating accident with your hardware wallets and it would be a shame if everyone on the boat lost their bitcoin on video.
      </div> */}
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        <a href="https://www.bellalunayacht.com/" className="text-white underline hover:text-gray-300">Check out the boat here</a>
      </div> */}
      <div className="w-full mb-4 text-white text-sm md:text-base lg:text-lg text-center">
      <a href="https://www.instagram.com/bellalunayacht/" className="text-white underline hover:text-gray-300">The boat has an instagram with more followers than me!</a>
      </div>
    </div>
  );
}
