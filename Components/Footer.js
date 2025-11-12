import React from "react";
import { Copyright, Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className=" w-full mt-auto">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-gray-400 group">
              <Copyright
                size={16}
                className="group-hover:text-blue-400 transition-colors duration-300"
              />
              <span className="text-sm">
                2024{" "}
                <span className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  Abdul Samad
                </span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Made with</span>
              <Heart
                size={14}
                className="text-red-500 fill-red-500 animate-pulse"
              />
              <span className="text-sm text-gray-500">for</span>
              <span className="text-sm font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                FundFlow
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="/terms"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
