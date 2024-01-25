/* use client */
import Link from 'next/link';
import BitcoinPage from 'pages/bitcoin';
import { Button } from "components/Button/Button";
import siteMetadata from 'data/siteMetadata';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';
import React from 'react';

export default function Home() {
  const root =
    typeof window === 'undefined'
      ? { classList: { toggle: () => null }, getElementsByClassName: () => null }
      : window.document.documentElement;
  root.classList.toggle('dark'); // toggle to dark initially

  return (
    <>
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="h-full w-full">
         <BitcoinPage />
      </div>
    </div>
    </>
  );
}
