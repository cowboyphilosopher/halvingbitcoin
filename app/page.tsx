import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
   return (
    <div className="bg-orange-500 h-screen flex flex-col items-center justify-center text-white">
      <h1>Do you ha(l)ve Bitcoin?</h1>
      <button
        className="mt-4 py-2 px-4 border border-black rounded"
      >
        We Should Party
      </button>
    </div>
   )
}