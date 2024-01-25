import Link from 'next/link';
import React from 'react';

export default function BitcoinPage() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-2 bg-orange-500 text-center">
        <div className="text-white ">
          Do you ha(l)ve Bitcoin?
        </div>
        <div>
          <Link href="/intro"
              className="border rounded px-4 py-2 border-white text-base font-medium text-white bg-orange-500 hover:bg-orange-700"
            >
            We should party
            </Link>
        </div>
      </div>
    </>
  );
}


