import React from 'react';
import Link from 'next/link';
import { Button } from "components/Button/Button";
import siteMetadata from 'data/siteMetadata';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';
const Countdown = dynamic(() => import('components/Countdown'), { ssr: false });

const BitcoinPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-4 bg-orange-500 text-center">
        <div className="text-white text-xl font-bold">
          Do you halve Bitcoin?
        </div>
        <div>
          <Button className="border rounded px-4 py-2 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            We should party
          </Button>
        </div>
        
      </div>
    </>
  )
}

export default BitcoinPage


