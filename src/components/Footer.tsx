import React from "react";
import { Heart, Code, Home } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and</span>
            <Code size={16} className="text-blue-400" />
            <span>by Diksinth S</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <Home size={16} className="text-amber-500 animate-bounce" />
            <span className="text-sm">
              © {new Date().getFullYear()} All rights reserved
            </span>
          </div>
        </div>

        {/* <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div> */}
      </div>
    </footer>
  );
};
