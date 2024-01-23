/* use client */
import React from 'react';
import Link from 'next/link';
import { Button } from "components/Button/Button";
import siteMetadata from 'data/siteMetadata';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';

export default function Home() {
  const root =
    typeof window === 'undefined'
      ? { classList: { toggle: () => null }, getElementsByClassName: () => null }
      : window.document.documentElement;
  root.classList.toggle('dark'); // toggle to dark initially

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center bg-orange-500 text-white">
        <div className="text-center h-1/10">
          <p>Do you ha(l)ve Bitcoin?</p>
        </div>

        <div className="text-center h-2/10">
          <Link
            className="flex justify-center items-center py-2 px-4 text-lg font-medium"
            href={"/xyz"}
          >
            We should party
          </Link>
        </div>
      </div>
    </>
  );
}
