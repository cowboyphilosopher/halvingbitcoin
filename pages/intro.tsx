import React from 'react';
import Link from 'next/link';
import { Button } from "components/Button/Button";
import siteMetadata from 'data/siteMetadata';
import dynamic from 'next/dynamic';
const Countdown = dynamic(() => import('components/Countdown'), { ssr: false });

const IntroPage = () => {
  return (
    <>
    <div className="min-h-screen w-full bg-orange-500">
      <div className="flex flex-col justify-center items-center bg-orange-500">
        <div className="flex h-1/2 w-1/2 justify-center items-center bg-gray-200 rounded-lg shadow">
          <div className="relative h-full w-full">
            <Countdown />
          </div>
        </div>
        <div className="h-1/2 w-full flex justify-center items-center">
        <div className="h-1/2 w-1/2 flex justify-center items-center">
          <img
                src="/images/notreal.jpeg"
                alt="not a real bitcoiner"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default IntroPage


