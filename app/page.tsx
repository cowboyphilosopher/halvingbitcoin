import React from 'react';
import { useRouter } from 'next/navigation'
 
export default function HomePage() {
  const router = useRouter()
 
  return (
    <div className="bg-orange-500 h-screen flex flex-col items-center justify-center text-white">
      <h1>Do you ha(l)ve Bitcoin? We should party.</h1>
      <button
        type="button"
        className="mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100"
        onClick={() => router.push('/dashboard')}
      >
        Dashboard
      </button>
    </div>
  )
}