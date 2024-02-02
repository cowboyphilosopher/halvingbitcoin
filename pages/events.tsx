import React from 'react';
import NavigationBar from 'components/Navigation';

export default function EventsPage() {
  return (
    <>
    <div className="min-h-screen w-full bg-orange-500">
      <div className="flex flex-col justify-center items-center bg-orange-500">
        <div className="relative h-1/10 w-full">
            <NavigationBar />
        </div>
      </div>
    </div>
    </>
  );
}


