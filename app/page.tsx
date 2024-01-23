/* use client */
import React from 'react';
import Link from 'next/link';
import { Button } from "components/Button/Button";
import siteMetadata from 'data/siteMetadata';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';
const Countdown = dynamic(() => import('components/Countdown'), { ssr: false });

export default function Home() {
  const root =
    typeof window === 'undefined'
      ? { classList: { toggle: () => null }, getElementsByClassName: () => null }
      : window.document.documentElement;
  root.classList.toggle('dark'); // toggle to dark initially

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="text-center h-1/10">
          <p>Do you ha(l)ve Bitcoin?</p>
        </div>

        <div className="text-center h-2/10">
          <Link
            className={
              'sm:text-lg py-4 px-20 rounded-3xl xs:rounded-xl text-white font-medium bg-orange hover:bg-blue-600 dark:hover:bg-blue-600 dark:bg-[#0095D4]'
            }
            href={"/xyz"}
          >
            We should party
          </Link>
        </div>

        <div className="flex h-3/10 w-1/2 justify-around items-center">

          <div className="flex-1">
            <Countdown />
          </div>

        </div>
        <div className="h-5/10 w-full flex justify-center items-center">
          <div className="relative h-full w-full max-w-xs">
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
  );
}
