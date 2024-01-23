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
      <div className="flex flex-col h-screen justify-center items-center gap-4 bg-orange-500">
        
      </div>
    </>
  )
}

export default BitcoinPage


