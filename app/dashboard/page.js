"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { profileUpdater } from "@/actions/userUpdate";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex justify-center items-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          </div>
          <p className="text-gray-400 text-lg animate-pulse">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  async function data() {
    setSaving(true);
    try {
      form.email = session.user.email;
      console.log(form);
      await profileUpdater(form);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      setForm({});
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pb-20">
      <div className="w-full pt-16 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl">
              <svg
                className="w-8 h-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-gray-400 text-base mt-1">
                Manage your creator profile
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-3xl opacity-20 blur-2xl" />

          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-400"
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
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name || ""}
                  onChange={handleChange}
                  className="w-full h-12 bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl px-4 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Profile Picture URL
                </label>
                <input
                  type="text"
                  name="profilePic"
                  placeholder="https://example.com/profile.jpg"
                  value={form.profilePic || ""}
                  onChange={handleChange}
                  className="w-full h-12 bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-4 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Cover Picture URL
                </label>
                <input
                  type="text"
                  name="coverPic"
                  placeholder="https://example.com/cover.jpg"
                  value={form.coverPic || ""}
                  onChange={handleChange}
                  className="w-full h-12 bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl px-4 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                  Bio
                </label>
                <textarea
                  name="bio"
                  placeholder="Tell us about yourself..."
                  value={form.bio || ""}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-800/50 border border-gray-700 hover:border-green-500/50 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 outline-none resize-none"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Interests
                </label>
                <input
                  type="text"
                  name="likes"
                  placeholder="e.g., Photography, Gaming, Music"
                  value={form.likes || ""}
                  onChange={handleChange}
                  className="w-full h-12 bg-gray-800/50 border border-gray-700 hover:border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 rounded-xl px-4 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-cyan-400"
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
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g., New York, USA"
                  value={form.location || ""}
                  onChange={handleChange}
                  className="w-full h-12 bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 rounded-xl px-4 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-emerald-400"
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
                  Languages
                </label>
                <input
                  type="text"
                  name="languages"
                  placeholder="e.g., English, Spanish, French"
                  value={form.languages || ""}
                  onChange={handleChange}
                  className="w-full h-12 bg-gray-800/50 border border-gray-700 hover:border-emerald-500/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl px-4 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={data}
                  disabled={saving}
                  className="relative w-full h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden group"
                >
                  {saving ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Saving...
                    </span>
                  ) : saved ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Saved Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                        />
                      </svg>
                      Save Profile
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
