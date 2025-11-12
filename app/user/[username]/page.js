"use client";

import List from "@/Components/List";
import React, { useState, use, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Paymenter from "@/actions/payment";
import { profileFetcher } from "@/actions/userUpdate";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const unwrappedParams = use(params);
  const { data: session } = useSession();
  const [records, setrecords] = useState([]);
  const [profile, setprofile] = useState();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    message: "",
    amount: "",
    reciever: unwrappedParams.username,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    Paymenter(formData);
    setTimeout(() => {
      fetchData();
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const username = unwrappedParams.username;
    try {
      const res = await fetch(
        `/api/payment?username=${encodeURIComponent(username)}`
      );
      const data = await res.json();
      if (data.length === 0) {
        router.replace("/notfound.js");
      }
      setrecords(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function pfp() {
    const username = unwrappedParams.username;
    const profile = profileFetcher(username);
    const pfpUrl = await profile;
    setprofile(pfpUrl.data);
  }

  useEffect(() => {
    pfp();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pb-20">
      <div className="w-full pt-16 pb-12 flex justify-center items-center flex-col md:flex-row gap-8 px-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500"></div>

          <Image
            src={
              profile
                ? profile
                : "https://static.vecteezy.com/system/resources/thumbnails/048/802/034/small/natural-leather-structure-material-abstract-texture-background-for-design-natural-color-skin-material-fashion-design-wallpaper-black-wall-texture-background-for-graphic-design-and-web-design-photo.jpg"
            }
            alt="Profile picture"
            className="relative rounded-3xl border-2 border-gray-800 group-hover:border-gray-600 h-40 w-40 object-cover transition-all duration-500 shadow-2xl"
            width={160}
            height={160}
            loading="eager"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-2">
            @{unwrappedParams.username}
          </h1>
          <p className="text-gray-400 text-lg">Support this creator</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:border-blue-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-400"
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
              <h2 className="text-3xl font-bold text-white">Supporters</h2>
            </div>

            <div className="space-y-3 max-h-96 overflow-hidden">
              {records.length === 0 ? (
                <div className="text-center py-12">
                  <div className="inline-block p-4 bg-gray-800/50 rounded-full mb-4">
                    <svg
                      className="w-12 h-12 text-gray-600"
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
                  <p className="text-gray-500 text-lg">No supporters yet</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Be the first to support!
                  </p>
                </div>
              ) : (
                records.map((items) => (
                  <List
                    name={items.name}
                    amount={items.amount}
                    message={items.message}
                    key={items._id}
                  />
                ))
              )}
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:border-purple-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-400"
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
              <h2 className="text-3xl font-bold text-white">Support Creator</h2>
            </div>

            <div className="space-y-5">
              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl px-4 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 outline-none resize-none"
                  placeholder="Write a supportive message..."
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Amount ($)
                </label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full h-12 bg-gray-800/50 border border-gray-700 hover:border-green-500/50 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 rounded-xl px-4 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                  placeholder="Enter amount"
                  min="1"
                />
              </div>

              <Button
                className="w-full h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300 mt-6"
                onClick={handleSubmit}
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Send Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
