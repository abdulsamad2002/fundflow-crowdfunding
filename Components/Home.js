"use client";

import React from "react";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden">
      <div className="flex justify-center items-center flex-col min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="flex-1 flex flex-col justify-center items-center w-full max-w-7xl">
          <div className="rounded-2xl mb-4 sm:mb-6 md:mb-8 mx-auto flex justify-center items-center flex-col">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300% mb-2 sm:mb-3 md:mb-4 text-center px-2">
              FundFlow
            </h1>
            <div className="h-1 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-center text-gray-300 leading-relaxed mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6">
            <p className="mb-2 sm:mb-3 md:mb-4">
              FundFlow is where{" "}
              <span className="text-blue-400 font-semibold">
                ideas find the support
              </span>{" "}
              they deserve.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
              Launch your project, share your story, and connect with a
              community ready to help bring your vision to life.
            </p>
          </div>

          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto flex justify-center items-center flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 px-4">
            <Link href={"/creators"} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Browse Creators
              </Button>
            </Link>

            {!session && (
              <Link href={"/login"} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-semibold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl border border-gray-700 hover:border-purple-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Creator Login
                </Button>
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-xs sm:max-w-2xl lg:max-w-5xl w-full px-4">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                Launch Projects
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Start your creative journey and showcase your ideas to the
                world.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                Build Community
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Connect with supporters who believe in your vision and mission.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                Get Funded
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Receive support from backers who want to see your ideas succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
