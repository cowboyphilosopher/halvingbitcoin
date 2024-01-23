/* use client */
import React from 'react';
import { Button } from "components/Button/Button"
 
export default function HomePage() {
 
  return (
    <div className="bg-orange-500 h-screen flex flex-col items-center justify-center text-white">
      <h1>Do you ha(l)ve Bitcoin? We should party.</h1>
      <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Get started
            </Button>
    </div>
  )
}