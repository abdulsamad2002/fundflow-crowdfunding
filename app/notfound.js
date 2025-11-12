"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300%">
            404
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"></div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-2">
            Looks like this flow has dried up.
          </p>
          <p className="text-gray-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full absolute animate-ping"></div>
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Back to Home
            </button>
          </Link>
          
          <Link href="/creators">
            <button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-semibold px-8 py-4 text-lg rounded-xl border border-gray-700 hover:border-purple-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Browse Creators
            </button>
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto opacity-50">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          <div className="h-2 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
          <div className="h-2 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
        </div>
      </div>
      
    </div>
  );
};

export default NotFound;