'use client'

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Countdown() {
  const { data, error } = useSWR('https://blockchain.info/q/getblockcount', fetcher);
  const [blocksRemaining, setBlocksRemaining] = useState('Loading...');

  useEffect(() => {
    if (typeof data === 'number') {
      const remaining = 840000 - data;
      setBlocksRemaining(remaining.toString());
    }
  }, [data]);
    
  return (
    <div className="flex flex-col h-full min-h-[100px]">
      <div className="flex justify-center items-center bg-orange-500 text-xl text-white font-bold h-1/3 rounded-t-lg">
        Blocks Remaining
      </div>
      <div className="flex flex-1 h-2/3 w-full justify-center items-center bg-orange-500 rounded-b-lg">
        <span className={`text-white bg-alpha ${error ? 'text-red-500' : ''}`}>
          {error ? 'Error fetching data' : blocksRemaining}
        </span>
        <span className="text-white ml-2">blocks until the 1st event.</span>
      </div>
    </div>
  );
};
