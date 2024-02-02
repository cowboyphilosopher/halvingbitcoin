import React from 'react';
import { Button } from "components/Button/Button"

export default function NavigationBar() {
  return (
    <nav className="bg-orange-500 p-4">
      <div className="flex justify-center">
        <div className="flex space-x-4 max-w-screen mx-auto">
          <Button href="/" className="border rounded px-4 py-2 border-white text-base font-medium text-white bg-orange-500 hover:bg-orange-700">
            Home
          </Button>
          <Button href="/intro" className="border rounded px-4 py-2 border-white text-base font-medium text-white bg-orange-500 hover:bg-orange-700">
            Intro
          </Button>
          <Button href="/events" className="border rounded px-4 py-2 border-white text-base font-medium text-white bg-orange-500 hover:bg-orange-700">
            Events
          </Button>
          <Button href="/faq" className="border rounded px-4 py-2 border-white text-base font-medium text-white bg-orange-500 hover:bg-orange-700">
            FAQ
          </Button>
          <Button href="/members" className="border rounded px-4 py-2 border-white text-base font-medium text-white bg-orange-500 hover:bg-orange-700">
            Members
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </nav>
  );
}
