import React from 'react';
import NavigationBar from 'components/Navigation';
import PartyDoc from 'components/PartyDoc';

export default function IntroPage() {
  return (
    <>
    <div className="min-h-screen w-full bg-orange-500">
      <div className="flex flex-col justify-center items-center bg-orange-500">
        <div className="relative h-1/10 w-screen">
            <NavigationBar />
        </div>
        <div className="relative h-1/10 w-full flex flex-wrap justify-center items-center text-white">
          <div>
            <div className="text-center justify-center text-xl">
              The main ideas around the party are explained below
            </div>
          </div>
        </div>
        <div className="flex h-3/10 w-full md:w-1/2 justify-center items-center p-4">
          <PartyDoc />
        </div>
        <div className="relative h-1/10 w-full flex flex-wrap justify-center items-center text-white">
          <div>
            <div className="text-center justify-center text-xl">
              TL;DR:
            </div>
          </div>
        </div>
        <div className="h-3/10 w-full flex justify-center items-center">
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


