import React from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  return (
   return (
    <div className="bg-orange-500 h-screen flex flex-col items-center justify-center text-white">
      <h1>Do you ha(l)ve Bitcoin? We should party.</h1>
      <button
        className="mt-4 py-2 px-4 border border-black rounded"
        onClick={() => router.push('https://www.google.com')}
      >
        Press me
      </button>
    </div>
   )
}
}