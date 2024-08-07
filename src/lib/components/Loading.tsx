
import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex space-x-2">
                <div className="h-5 w-5 bg-blue-500 rounded-full transform scale-0 animate-chase"></div>
                <div className="h-5 w-5 bg-blue-500 rounded-full transform scale-0 animate-chase"></div>
                <div className="h-5 w-5 bg-blue-500 rounded-full transform scale-0 animate-chase"></div>
            </div>
            <div className="mt-1 text-center">
                <p className="text-lg font-semibold text-gray-700">
                    Loading...
                </p>
            </div>
        </div>
  );
}
