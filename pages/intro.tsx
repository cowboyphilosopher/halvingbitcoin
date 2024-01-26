import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Countdown = dynamic(() => import('components/Countdown'), { ssr: false });

export default function IntroPage() {
  return (
    <>
    <div className="min-h-screen w-full bg-orange-500">
      <div className="flex flex-col justify-center items-center bg-orange-500">
        <div className="flex h-1/2 w-full justify-center items-center">
          <div className="relative h-full w-full">
            <Countdown />
          </div>
        </div>
        <div className="h-1/2 w-full flex justify-center items-center">
          <div className="relative w-full h-1/2 md:w-2/3 flex justify-center items-center">
            <img
                  src="/images/notreal.jpeg"
                  alt="not a real bitcoiner"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


