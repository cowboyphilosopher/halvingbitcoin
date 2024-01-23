'use client'

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Countdown = () => {
  const { data, error } = useSWR('https://blockchain.info/q/getblockcount', fetcher);
  const [blocksRemaining, setBlocksRemaining] = useState('Loading...');

  useEffect(() => {
    if (data) {
      const remaining = 840000 - data;
      setBlocksRemaining(remaining);
    }
  }, [data]);
    
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center items-center bg-orange-500 text-xl text-white font-bold h-1/5 rounded-t-lg">
        Blocks Remaining
      </div>
      <div className="flex flex-1 justify-center items-center bg-orange-500 rounded-b-lg">
        <span className={`text-white bg-alpha ${error ? 'text-red-500' : ''}`}>
          {error ? 'Error fetching data' : blocksRemaining}
        </span>
        <span className="text-white ml-2">blocks until the 1st event.</span>
      </div>
    </div>
  );
};

export default Countdown;
