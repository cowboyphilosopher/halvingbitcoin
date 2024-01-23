/* use client */
import React from 'react';
import Link from 'next/link';
import { Button } from "components/Button/Button";
import siteMetadata from 'data/siteMetadata';
import dynamic from 'next/dynamic';

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
          <p>i love bitcoin</p>
        </div>
        <div className="flex h-3/10 w-full justify-around items-center">
          <div className="flex-1">
            <Link href="/xyz" className="rounded-lg py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white text-center block">
              1
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/xyz" className="rounded-lg py-2 px-4 bg-green-500 hover:bg-green-700 text-white text-center block">
              2
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/xyz" className="rounded-lg py-2 px-4 bg-red-500 hover:bg-red-700 text-white text-center block">
              3
            </Link>
          </div>
        </div>
        <div className="h-2/10 w-full flex justify-center items-center">
          <img src="path-to-your-image.jpg" alt="Description" />
        </div>
      </div>
    </>
  );
}
