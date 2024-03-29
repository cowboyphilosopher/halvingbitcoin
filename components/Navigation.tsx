import React from 'react';
import { Button } from "components/Button/Button"

export default function NavigationBar() {
  // Define inline styles for buttons
  const buttonStyles = 'border rounded px-4 py-2 border-white text-base lg:text-lg font-medium text-white bg-[#f7931a] hover:bg-[#c05000]';
  const buttonStylesMobile = 'sm:min-w-min';

  return (
    <nav className="bg-[#f7931a] p-2">
      <div className="flex flex-wrap justify-center mx-auto space-x-2">
        <Button href="/" className={`${buttonStyles} ${buttonStylesMobile} mb-2`}>
          Home
        </Button>
        <Button href="/intro" className={`${buttonStyles} ${buttonStylesMobile} mb-2`}>
          Intro
        </Button>
        <Button href="/events" className={`${buttonStyles} ${buttonStylesMobile} mb-2`}>
          Events
        </Button>
        <Button href="/faq" className={`${buttonStyles} ${buttonStylesMobile} mb-2`}>
          FAQ
        </Button>
        <Button href="/members" className={`${buttonStyles} ${buttonStylesMobile} md:mb-2`}>
          Members
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </nav>
  );
}
