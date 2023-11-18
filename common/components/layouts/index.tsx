"use client"
import React, { Children } from "react";


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <div className="flex h-screen">
      {/* Navbar pada tampilan desktop */}
      <nav className="hidden sm:block bg-gray-800 text-gray-100 w-64">
        {/* Isi sidebar di sini */}
        Sidebar Desktop
      </nav>

      {/* Konten Utama */}
      <main className="flex-1 overflow-y-auto ">
        {/* Navbar untuk tampilan mobile */}
        <nav className="sm:hidden bg-gray-800 text-gray-100 sticky top-0 z-50">
          <div className="flex justify-between items-center px-4 py-4">
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

        {/* Konten */}
        {children}
      </main>

      {/* Sidebar pada tampilan mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 bg-gray-800 text-gray-100 w-64 sm:hidden ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
      >
        {/* Isi sidebar di sini */}
        Sidebar Mobile
      </aside>
    </div>
 

  );
}
