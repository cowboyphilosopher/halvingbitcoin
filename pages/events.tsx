import dynamic from 'next/dynamic';

import React from 'react';
import NavigationBar from 'components/Navigation';
import WalletBalance from 'components/WalletTotal';
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
          <div className="relative h-1/10 w-full flex flex-wrap justify-center items-center text-white">
            <div>
              <div className="text-center">
                Total Party Funds: 115,515,465 sats
              </div>
              <div className="text-center">
                Current Budget Per Event: 23,103,093 sats
              </div>
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
          {/* <div>
            <h1>Bitcoin Wallet Balance</h1>
            <WalletBalance zpubKey={"Zpub75bvHhALtQr49PzycX6sdDVxuNffRSV3N1Z6LX5qzx9ptKtefL7HJVZ3q8vFqYQ9sXJPGFtFdtPFeZsRzJQaowNMVPxQFgaRKK9QSzoMvDQ"} />
          </div> */}
          <div className="h-1/3 w-full flex justify-center items-center">
            <div className="relative w-full h-1/2 md:w-2/3 flex justify-center items-center">
              <img
                    src="/images/events.png"
                    alt="party preview"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

