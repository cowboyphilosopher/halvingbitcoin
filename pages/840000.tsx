import dynamic from 'next/dynamic';

import React from 'react';
import NavigationBar from 'components/Navigation';
import WalletBalance from 'components/WalletTotal';
import TimeSelector from 'components/TimeSelector';
const Countdown = dynamic(() => import('components/Countdown'), { ssr: false });


export default function EventsPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#f7931a]">
        <div className="flex flex-col justify-center items-center bg-[#f7931a]">
          <div className="relative h-1/10 w-screen">
              <NavigationBar />
          </div>
        </div>
      </div>
    </>
  );
}

