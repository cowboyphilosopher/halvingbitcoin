import dynamic from 'next/dynamic';

import React from 'react';
import NavigationBar from 'components/Navigation';
import WalletBalance from 'components/WalletTotal';
import TimeSelector from 'components/TimeSelector';
import PartyDay from 'components/PartyDay';
import PizzaDay from 'components/PizzaDay';
import BoatDay from 'components/BoatDay';
import EventInfo from 'components/EventInfo';
const Countdown = dynamic(() => import('components/Countdown'), { ssr: false });


export default function EventsPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#f7931a]">
        <div className="flex flex-col justify-center items-center bg-[#f7931a]">
          <div className="relative h-1/10 w-screen">
              <NavigationBar />
          </div>
          {/* <div className="flex h-1/10 w-full justify-center items-center mb-4">
            <div className="relative h-full w-full">
              <Countdown />
            </div>
          </div> */}
          {/* <div className="relative h-1/10 w-full flex flex-wrap justify-center items-center text-white mb-4">
            <div>
              <div className="text-center">
                Total Party Funds: 126,471,081 sats
              </div>
              <div className="text-center">
                Current Budget Per Event: 25,294,216 sats
              </div>
            </div>
          </div> */}

          <div className="flex w-full justify-center items-center">
            <div className="w-full">
              <EventInfo />
            </div>
          </div>

          {/* <div className="flex w-full justify-center items-center">
            <div className="w-full mt-4">
              <TimeSelector />
            </div>
          </div> */}

          <div className="flex w-full justify-center items-center">
            <div className="w-full mt-4">
              <PizzaDay />
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
            <div className="w-full mt-4">
              <PartyDay />
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
          <div className="w-full mt-4">
              <BoatDay />
            </div>
          </div>

          <div className="relative mt-4 mb-4 w-full flex flex-wrap justify-center items-center text-white text-sm md:text-base lg:text-lg">
          <div>
            <div className="text-center">
              If you have any special accommodation needs or requests please let me know. I would also love suggestions for caterers or activities if you have something in mind.
            </div>
            <div className="text-center">
              btcwiseops@gmail.com
            </div>
          </div>
        </div>
          {/* <div>
            <h1>Bitcoin Wallet Balance</h1>
            <WalletBalance zpubKey={"Zpub75bvHhALtQr49PzycX6sdDVxuNffRSV3N1Z6LX5qzx9ptKtefL7HJVZ3q8vFqYQ9sXJPGFtFdtPFeZsRzJQaowNMVPxQFgaRKK9QSzoMvDQ"} />
          </div> */}
          {/* <div className="h-1/3 w-full flex justify-center items-center">
            <div className="relative w-full h-1/2 md:w-2/3 flex justify-center items-center">
              <img
                    src="/images/events.png"
                    alt="party preview"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

