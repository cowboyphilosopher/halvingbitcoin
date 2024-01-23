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
      <div className="flex-none">
            <Link
              className={
                'sm:text-lg py-4 px-20 rounded-3xl xs:rounded-xl text-white font-medium bg-[#0095D4] hover:bg-blue-600 dark:hover:bg-blue-600 dark:bg-[#0095D4]'
              }
              href={"/page"}
            >
              Click Here to Enter
            </Link>
          </div>
    </>
  );
}
