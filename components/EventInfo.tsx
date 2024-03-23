import React, { useState } from 'react';

export default function EventInfo() {
  

  return (
    <div className="w-full px-4 relative">
      <div className="w-full mt-4 text-white text-lg md:text-xl lg:text-2xl text-center mx-auto">
        Event One
      </div>
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center mx-auto">
        The first event will be more of an open hangout.
      </div> */}
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center mx-auto">
      Members are encouraged to bring their family and friends to celebrate the halving with us.
      </div> */}
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
         We have booked a house for the 18th-22nd of April.
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center mx-auto">
        There will be a pool party with catered food and fun activities. 
      </div>

      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
        <a href="https://www.vrbo.com/920820" className="text-white underline hover:text-gray-300">Check out the place here</a>
      </div>

      <div className="w-full mb-4 text-white text-sm md:text-base lg:text-lg text-center">
      <a href="https://youtu.be/vCJeViNiy20?si=X8BxEIAEyUUvZTVI" className="text-white underline hover:text-gray-300">Also a small video tour here</a>
      </div>
      
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center mx-auto">
         Members will also be able to enjoy a party boat on the final day.
      </div>

      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center">
      <a href="https://www.instagram.com/bellalunayacht/" className="text-white underline hover:text-gray-300">The boat has an instagram</a>
      </div>
    </div>
  );
}
