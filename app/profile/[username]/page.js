"use client";

import React, { use, useEffect, useState } from "react";
import { Mail, MapPin, Globe, Heart } from "lucide-react";
import { fullProfileFetcher } from "@/actions/userUpdate";
import Image from "next/image";

export default function ProfilePage({ params }) {
  const profileName = use(params).username;
  const [profile, setprofile] = useState({});

  async function profileSetter(username) {
    const profileObj = await fullProfileFetcher(username);
    setprofile(profileObj);
  }

  useEffect(() => {
    profileSetter(profileName);
  }, []);
  // console.log(profile.profilePic)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 overflow-hidden">
        <div className="relative h-32 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30">
          <Image
            src={
              profile.coverPic
                ? profile.coverPic
                : "https://static.vecteezy.com/system/resources/thumbnails/048/802/034/small/natural-leather-structure-material-abstract-texture-background-for-design-natural-color-skin-material-fashion-design-wallpaper-black-wall-texture-background-for-graphic-design-and-web-design-photo.jpg"
            }
            alt={"Cover"}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </div>

        <div className="px-8 pb-8">
          <div className="flex justify-center -mt-16 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-50"></div>
              <img
                src={profile.profilePic ? profile.profilePic : "/ghost.jpg"}
                alt={profile.name}
                className="relative w-32 h-32 rounded-full border-4 border-gray-800 shadow-2xl object-cover bg-gray-800"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/128/6366f1/ffffff?text=" +
                    profile.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("");
                }}
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              {profile.name}
            </h1>
            <p className="text-purple-400 font-medium">@{profile.username}</p>
          </div>

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-5 mb-6 border border-gray-700/50 backdrop-blur-sm">
            <p className="text-gray-300 text-center italic leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/60 transition-all duration-300 group">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-500 text-sm mb-1 font-medium">
                    Email
                  </p>
                  <p className="text-gray-200 break-all">{profile.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/60 transition-all duration-300 group">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-500 text-sm mb-1 font-medium">
                    Location
                  </p>
                  <p className="text-gray-200">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/60 transition-all duration-300 group">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-500 text-sm mb-1 font-medium">
                    Languages
                  </p>
                  <p className="text-gray-200">{profile.languages}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/60 transition-all duration-300 group">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-500 text-sm mb-1 font-medium">
                    Interests
                  </p>
                  <p className="text-gray-200">{profile.likes}</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex gap-3 mt-6">
            <button className="border border-gray-700 hover:border-blue-500 bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 flex justify-center items-center w-1/2 text-white py-3 rounded-xl font-semibold transition-all duration-300">
              Edit Profile
            </button>
            <button className="w-1/2 py-3 rounded-xl flex justify-center items-center border border-gray-700 hover:border-purple-500 bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 text-white font-semibold transition-all duration-300">
              Share
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
