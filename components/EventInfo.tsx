import React, { useState } from 'react';

export default function EventInfo() {
  

  return (
    <div className="w-full px-4 relative">
      <div className="w-full text-white text-lg md:text-xl lg:text-2xl text-center mx-auto">
        Event One
      </div>
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center mx-auto">
        The first event will be more of an open hangout.
      </div> */}
      {/* <div className="w-full text-white text-sm md:text-base lg:text-lg text-center mx-auto">
      Members are encouraged to bring their family and friends to celebrate the halving with us.
      </div> */}
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center mx-auto">
        We are renting an airbnb and will have a pool party with catered food and fun activities. 
      </div>
      <div className="w-full text-white text-sm md:text-base lg:text-lg text-center mx-auto">
         Members will also be able to enjoy a party boat on the day after the friends and family day.
      </div>
    </div>
  );
}
