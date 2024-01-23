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
      <div className="flex flex-col h-screen justify-center items-center gap-2 bg-orange-500 text-center">
        <div className="text-white ">
          Do you ha(l)ve Bitcoin?
        </div>
        <div>
          <Link
              className="border rounded px-4 py-2 border-white text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700"
              href={"/intro"}
            >
            We should party
            </Link>
        </div>
      </div>
    </>
  )
}

export default BitcoinPage


