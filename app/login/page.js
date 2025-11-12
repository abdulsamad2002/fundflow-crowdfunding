"use client";

import React from "react";
import { Button } from "@/Components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 overflow-x-hidden">
        <div className="max-w-2xl w-full">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-3xl opacity-30 blur-2xl" />

            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 shadow-2xl text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full mb-4">
                  <svg
                    className="w-16 h-16 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h1 className="text-3xl font-semibold text-gray-300">
                  Welcome aboard,
                </h1>
                <h2 className="h-20 mb-0 text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                  {session.user.name}
                </h2>
                <p className="text-gray-400 text-lg mt-3">
                  You're successfully logged in
                </p>
              </div>
              <Link href="/dashboard" className="block">
                <Button className="w-full h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300">
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
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 overflow-x-hidden">
      <div className="max-w-md w-full">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-3xl opacity-30 blur-2xl" />

          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8 space-y-3">
              <div className="inline-block p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full mb-2">
                <svg
                  className="w-12 h-12 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-gray-400 text-base">
                Sign in to continue supporting creators
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => signIn("google")}
                className="group relative w-full h-14 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center justify-center gap-3"
              >
                <FaGoogle className="w-5 h-5 text-red-500" />
                <span>Continue with Google</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                By continuing, you agree to our Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
