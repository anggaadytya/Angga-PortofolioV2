"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-gray-100 w-full sm:hidden">
        <div className="flex justify-between items-center px-4 py-2">
          <h1 className="text-xl font-bold">Your App</h1>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <aside
        className={`bg-gray-800 text-gray-100 md:w-64 w-full ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-start gap-6 ps-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/skill"}>Skill</Link>
          <Link href={"/project"}>Project</Link>
        </div>
      </aside>
    </div>
  );
};

export default Header;
