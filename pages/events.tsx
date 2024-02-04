import dynamic from 'next/dynamic';

import React from 'react';
import NavigationBar from 'components/Navigation';
const Countdown = dynamic(() => import('components/Countdown'), { ssr: false });


export default function EventsPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-orange-500">
        <div className="flex flex-col justify-center items-center bg-orange-500">
          <div className="relative h-1/10 w-screen">
              <NavigationBar />
          </div>
          <div className="flex h-1/10 w-full justify-center items-center">
            <div className="relative h-full w-full">
              <Countdown />
            </div>
          </div>
          <div className="relative h-1/3 w-full flex justify-center items-center text-white px-4">
            <div>
              <div className="text-center">
                Event 1: Block 840,000
              </div>
              <div className="text-center">
                Event 2: Block 1,050,000
              </div>
              <div className="text-center">
                Event 3: Block 1,260,000
              </div>
              <div className="text-center">
                Event 4: Block 1,470,000
              </div>
              <div className="text-center">
                Event 5: Block 1,680,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



