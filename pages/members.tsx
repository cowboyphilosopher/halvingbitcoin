import React from 'react';
import MemberMap from 'components/MemberMap';
import NavigationBar from 'components/Navigation';

export default function MembersPage() {
  return (
      <>
        <div className="min-h-screen w-full bg-orange-500">
          <div className="flex flex-col justify-center items-center bg-orange-500">
            <div className="relative h-1/10 w-full">
                <NavigationBar />
            </div>
            <div className="relative h-1/4 w-full flex justify-center items-center text-white">
             <p>Enter the public address that was given to you with your party invite.</p>
             <p>If you have paid you should see your invite status below.</p> 
            </div>
            <div className="relative h-1/2 w-full flex justify-center items-center">
                <MemberMap />
            </div>
          </div>
        </div>
      </>
    );
}

