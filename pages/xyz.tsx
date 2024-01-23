import React from 'react';
import Link from 'next/link';
import { Button } from "components/Button/Button";
import siteMetadata from 'data/siteMetadata';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';
const Countdown = dynamic(() => import('components/Countdown'), { ssr: false });

const XyzPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-4 bg-gray-100">
        <div className="flex h-1/2 w-full justify-center items-center bg-gray-200 rounded-lg shadow">
        <div className="h-1/2 w-full flex justify-center items-center bg-gray-300 rounded-lg shadow">
          <div className="relative h-full w-full">
            <Countdown />
          </div>
        </div>
        <div className="h-1/2 w-full flex justify-center items-center">
          <div className="relative h-full w-full">
            <NextImage
                src={'/images/notreal.jpeg'}
                alt={'not a real bitcoiner'}
                layout="responsive"
                width={500} // Set the desired width
                height={300} // Set the desired height
                objectFit="contain"
              />
          </div>
        </div>
      </div>
    </>
  )
}

export default XyzPage


