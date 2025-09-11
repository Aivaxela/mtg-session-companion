import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-600 shadow-lg border-b border-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl font-bold text-gray-200 truncate">
              MTG Session Companion
            </h1>
          </div>

          <div className="hidden md:flex space-x-2 lg:space-x-8">
            <Link
              to="/sessions"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/sessions")
                  ? "bg-blue-600 text-blue-100"
                  : "text-gray-300 hover:text-blue-300 hover:bg-slate-500"
              }`}
            >
              Sessions
            </Link>
            <Link
              to="/decks"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/decks")
                  ? "bg-blue-600 text-blue-100"
                  : "text-gray-300 hover:text-blue-300 hover:bg-slate-500"
              }`}
            >
              Decks
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-300 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-500">
            <Link
              to="/sessions"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive("/sessions")
                  ? "bg-blue-600 text-blue-100"
                  : "text-gray-300 hover:text-blue-300 hover:bg-slate-500"
              }`}
            >
              Sessions
            </Link>
            <Link
              to="/decks"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive("/decks")
                  ? "bg-blue-600 text-blue-100"
                  : "text-gray-300 hover:text-blue-300 hover:bg-slate-500"
              }`}
            >
              Decks
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
