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
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex h-3/10 w-1/2 justify-around items-center">
          <div className="relative h-full w-full">
            <Countdown />
          </div>
        </div>
        <div className="h-5/10 w-full flex justify-center items-center">
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


