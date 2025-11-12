import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@Components/ui/ui/button";

const Profile = ({ props }) => {
  return (
    <div className="group relative rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

      <div className="relative flex flex-col items-center text-center space-y-4">
        <div className="relative group/image">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-2xl opacity-50 group-hover/image:opacity-75 blur-md transition-all duration-500" />
          <Image
            src={props.profilePic}
            className="relative rounded-2xl border-2 border-gray-700 h-32 w-32 object-cover group-hover/image:border-gray-600 group-hover/image:scale-105 transition-all duration-500 shadow-xl"
            height={128}
            width={128}
            alt="profileImage"
          />
        </div>

        <div className="space-y-2 w-full">
          <h3 className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-blue-400 transition-all duration-500">
            {props.name}
          </h3>
          <p className="text-gray-400 text-sm font-medium">@{props.username}</p>

          <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 px-2">
            {props.bio}
          </p>
        </div>

        <div className="flex justify-center gap-4 w-full pt-2">
          <div className="flex items-center gap-1.5 group/stat">
            <div className="p-1.5 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg">
              <svg
                className="w-3.5 h-3.5 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-white font-semibold text-xs">
              {props.likes}
            </span>
          </div>

          <div className="flex items-center gap-1.5 group/stat">
            <div className="p-1.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
              <svg
                className="w-3.5 h-3.5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="text-white font-semibold text-xs">
              {props.location}
            </span>
          </div>

          <div className="flex items-center gap-1.5 group/stat">
            <div className="p-1.5 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg">
              <svg
                className="w-3.5 h-3.5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </div>
            <span className="text-white font-semibold text-xs">
              {props.languages}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full pt-2">
          <Link href={`/user/${props.username}`} className="w-full">
            <Button
              variant="secondary"
              className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold border-0 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
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
                Support
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
          <Link href={`/profile/${props.username}`} className="w-full">
            <Button
              variant="secondary"
              className="relative w-full bg-gray-800/80 hover:bg-gray-700 text-white font-semibold border border-gray-600 hover:border-blue-500/50 shadow-md hover:shadow-lg transition-all duration-300 group/btn"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                View Profile
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
