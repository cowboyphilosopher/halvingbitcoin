'use client'

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Countdown = () => {
  const { data, error } = useSWR('https://blockchain.info/q/getblockcount', fetcher);
  const blockHeight = data || 'Loading...';

  useEffect(() => {
    // You can add any additional effects if needed when blockHeight changes
    
  }, [blockHeight]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center items-center bg-orange-500 text-xl text-white font-bold h-1/5 rounded-t-lg">
        Blocks Remaining
      </div>
      <div className="flex flex-1 justify-center items-center bg-orange-500 rounded-b-lg">
        <span className={`text-white bg-alpha px-2 py-1 ${error ? 'text-red-500' : ''}`}>
          {error ? 'Error fetching data' : blockHeight}
        </span>
        <span className="text-white ml-2"> Blocks until the 1st event.</span>
      </div>
    </div>
  );
};

export default Countdown;
