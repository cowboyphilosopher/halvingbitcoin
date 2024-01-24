import React from 'react';
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
        <div className="flex justify-center items-center" style={{ width: '50vw', height: '50vh' }}>
          <img
                src="/images/notreal.jpeg"
                alt="not a real bitcoiner"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default IntroPage


