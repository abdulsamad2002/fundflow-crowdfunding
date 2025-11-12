"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "sonner";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full">
      <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 w-full text-white flex justify-between items-center h-16 px-4 sm:px-6 md:px-10 shadow-lg border-b border-gray-800">
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300"
          >
            FundFlow
          </Link>
        </div>

        <ul className="hidden md:flex justify-center items-center gap-3">
          {session && (
            <li>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200"
                >
                  Dashboard
                </Button>
              </Link>
            </li>
          )}

          {!session && (
            <li className="text-lg text-gray-300 px-4">
              Find creators and Donate
            </li>
          )}

          {session?.user?.name && (
            <li>
              <Link href={`/profile/${session.user.name}`}>
                <Button
                  variant="ghost"
                  className="hover:bg-gray-800 hover:text-purple-400 transition-colors duration-200"
                >
                  Your Profile
                </Button>
              </Link>
            </li>
          )}

          <li>
            <Link href="/creators">
              <Button
                variant="ghost"
                className="hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200"
              >
                Creators
              </Button>
            </Link>
          </li>

          {session ? (
            <li>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 transition-all duration-200 shadow-md hover:shadow-lg"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </Button>
            </li>
          ) : (
            <li>
              <Link href="/login">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 transition-all duration-200 shadow-md hover:shadow-lg">
                  Login
                </Button>
              </Link>
            </li>
          )}
        </ul>

        <button
          className="md:hidden text-white hover:text-blue-400 transition-colors duration-200 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed right-0 top-16 bottom-0 w-full sm:w-80 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 shadow-2xl transition-transform duration-300 ease-in-out border-l border-gray-700 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-2 p-6">
            {session && (
              <li>
                <Link href="/dashboard" onClick={closeMenu} className="block">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left text-white hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200 text-base py-6"
                  >
                    Dashboard
                  </Button>
                </Link>
              </li>
            )}

            {!session && (
              <li className="text-base text-gray-200 px-4 py-3 border-b border-gray-700">
                Find creators and Donate
              </li>
            )}

            {session?.user?.name && (
              <li>
                <Link
                  href={`/profile/${session.user.name}`}
                  onClick={closeMenu}
                  className="block"
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left text-white hover:bg-gray-700 hover:text-purple-400 transition-colors duration-200 text-base py-6"
                  >
                    Your Profile
                  </Button>
                </Link>
              </li>
            )}

            <li>
              <Link href="/creators" onClick={closeMenu} className="block">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left text-white hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200 text-base py-6"
                >
                  Creators
                </Button>
              </Link>
            </li>

            {session ? (
              <li className="mt-4">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-6 transition-all duration-200 shadow-md hover:shadow-lg text-base"
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                >
                  Logout
                </Button>
              </li>
            ) : (
              <li className="mt-4">
                <Link href="/login" onClick={closeMenu} className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-6 transition-all duration-200 shadow-md hover:shadow-lg text-base">
                    Login
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
