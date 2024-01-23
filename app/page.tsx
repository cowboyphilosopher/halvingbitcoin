/* use client */
import React from 'react';
import Link from 'next/link';
import { Button } from "components/Button/Button";
 
export default function HomePage() {
 
export default function HomePage() {

  return (
    <div className="bg-orange-500 h-screen flex flex-col items-center justify-center text-white">
      <h1>Do you ha(l)ve Bitcoin? We should party.</h1>
      <Link href="/bitcoin" passHref>
          <Button as="a" className="border-black border-2 w-1/10 h-3/20">
              PRESS ME PLEASE
          </Button>
      </Link>
    </div>
  )
}
