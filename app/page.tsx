import React from 'react';

export default function HomePage() {
   return (

    <div className="bg-orange-500 h-screen flex flex-col items-center justify-center text-white">
      <h1>Hello World</h1>
      <button
        className="mt-4 py-2 px-4 border border-black rounded"
        onClick={() => window.location.href = 'https://www.google.com'}
      >
        Press me
      </button>
    </div>
   )
}