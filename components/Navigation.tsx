import React from 'react';
import { Button } from "components/Button/Button"

export default function NavigationBar() {
  // Define inline styles for buttons
  const buttonStyles = 'border rounded px-4 py-2 border-white text-base font-medium text-white bg-orange-500 hover:bg-orange-700';
  const buttonStylesMobile = 'sm:min-w-min';

  return (
    <nav className="bg-orange-500 p-4">
      <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto">
        <Button href="/" className={`${buttonStyles} ${buttonStylesMobile} mb-2 sm:mb-0`}>
          Home
        </Button>
        <Button href="/intro" className={`${buttonStyles} ${buttonStylesMobile} mb-2 sm:mb-0`}>
          Intro
        </Button>
        <Button href="/events" className={`${buttonStyles} ${buttonStylesMobile} mb-2 sm:mb-0`}>
          Events
        </Button>
        <Button href="/faq" className={`${buttonStyles} ${buttonStylesMobile} mb-2 sm:mb-0`}>
          FAQ
        </Button>
        <Button href="/members" className={`${buttonStyles} ${buttonStylesMobile} mb-2 sm:mb-0`}>
          Members
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </nav>
  );
}
