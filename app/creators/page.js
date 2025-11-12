"use client";

import React from "react";
import { fetchUsers } from "@/actions/userUpdate";
import { useEffect, useState } from "react";
import Profile from "@/Components/Profile";

const Page = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetcher() {
      try {
        const users = await fetchUsers();
        setCreators(users);
      } catch (error) {
        console.error("Error fetching creators:", error);
      } finally {
        setLoading(false);
      }
    }
    fetcher();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pb-20">
      <div className="w-full pt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-4">
            Discover Creators
          </h1>
          <p className="text-gray-400 text-lg">
            Support amazing creators and help them continue their work
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          </div>
        ) : creators.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-gray-800/50 rounded-full mb-6">
              <svg
                className="w-16 h-16 text-gray-600"
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
            <p className="text-gray-400 text-xl">No creators found</p>
            <p className="text-gray-600 text-sm mt-2">
              Check back later for new creators!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((item) => (
              <Profile props={item} key={item._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
