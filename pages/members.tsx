import React from 'react';
import MemberMap from 'components/MemberMap';
import NavigationBar from 'components/Navigation';

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-[#f7931a]">
      <div className="flex flex-col justify-center items-center bg-[#f7931a] px-4">
        <div className="relative h-1/10 w-screen">
          <NavigationBar />
        </div>
        <div className="relative h-1/4 w-full flex justify-center items-center text-white max-w-3xl px-4">
          <div>
            <div className="text-center">
              Enter the public address that was given to you with your party invite.
            </div>
            <div className="text-center">
              If you have paid you should see your invite status below.
            </div>
          </div>
        </div>
        <div className="flex relative h-1/3 w-screen justify-center items-center">
          <MemberMap />
        </div>
        <div className="h-3/10 w-full flex justify-center items-center">
          <div className="relative w-full h-1/2 md:w-2/3 flex justify-center items-center">
            <img
                  src="/images/notreal.jpeg"
                  alt="not a real bitcoiner"
            />
          </div>
        </div>
        <div className="relative h-1/4 w-full flex flex-wrap justify-center items-center text-white">
          <div>
            <div className="text-center">
              Any questions or concerns please send an email to:
            </div>
            <div className="text-center">
              btcwiseops@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
