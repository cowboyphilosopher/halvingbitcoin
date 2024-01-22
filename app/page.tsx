import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
   return (
    <div className="bg-orange-500 h-screen flex flex-col items-center justify-center text-white">
      <h1>Do you ha(l)ve Bitcoin? We should party.</h1>
    </div>
   )
}