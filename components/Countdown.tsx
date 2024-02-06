'use client'

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json() as Promise<BlockCypherResponse>);
interface BlockCypherResponse {
  height: number;
  // Add other properties from the API response if necessary
}

export default function Countdown() {
  const { data, error } = useSWR<BlockCypherResponse>('https://api.blockcypher.com/v1/btc/main', fetcher);
  const [blocksRemaining, setBlocksRemaining] = useState('Loading...');

  useEffect(() => {
    if (data && typeof data.height === 'number') {
      const remaining = 840000 - data.height;
      setBlocksRemaining(remaining.toString());
    }
  }, [data]);
    
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center items-center bg-orange-500 text-xl text-white font-bold h-1/2 rounded-t-lg">
        Blocks Remaining
      </div>
      <div className="flex h-1/2 w-full justify-center items-center bg-orange-500 rounded-b-lg">
        <span className={`text-white bg-alpha ${error ? 'text-red-500' : ''}`}>
          {error ? 'Error fetching data' : blocksRemaining}
        </span>
        <span className="text-white ml-2">blocks until the 1st event.</span>
      </div>
    </div>
  );
};
