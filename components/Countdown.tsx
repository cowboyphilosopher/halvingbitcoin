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
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center items-center bg-gray-200 text-xl font-semibold h-1/6">
        Countdown
      </div>
      <div className="flex flex-1 justify-center items-center bg-gray-300">
        <span className={`text-green-500 bg-black px-2 py-1 ${error ? 'text-red-500' : ''}`}>
          {error ? 'Error fetching data' : blockHeight}
        </span>
        <span className="text-gray-700 ml-2">Current Block Height</span>
      </div>
    </div>
  );
};

export default Countdown;
