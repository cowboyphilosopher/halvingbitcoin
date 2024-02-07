import React from 'react';
import { Button } from "components/Button/Button"

export default function BitcoinPage() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-2 bg-[#f7931a] text-center">
        <div className="text-white">
          Do you ha(l)ve Bitcoin?
        </div>
        <div className="h-3/10 w-1/4 flex justify-center items-center">
          <div className="relative w-full h-1/2 md:w-2/3 flex justify-center items-center">
            <img
              src="/images/full.png"
              alt="party logo"
            />
          </div>
        </div>
        <div>
          <Button href="/intro" className="border rounded px-4 py-2 border-white text-base font-medium text-white bg-[#f7931a] hover:bg-[#c05000]">
            We should party
          </Button>
        </div>
      </div>
    </>
  );
}


