"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import Sidebar from "./sidebar";

import AOS from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const readMode = searchParams.get("read-mode");

  const hideSidebar =
    ["/me", "/board"].includes(pathName) || readMode === "true";

    React.useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 50
      })
    }, [])

  return (
    <div className={`flex h-screen`}>
      <div className="flex flex-col md:flex-row md:w-[26rem] lg:w-[23rem] justify-between md:gap-5">
        {!hideSidebar && (
          <header>
            <Sidebar />
          </header>
        )}
      </div>
      <main className="transition-all scroll-smooth duration-300 w-full md:min-h-screen no-scrollbar">
        {children}
      </main>
    </div>
  );
}
