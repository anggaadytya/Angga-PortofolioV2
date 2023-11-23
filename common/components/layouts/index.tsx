"use client";

import SplashScreen from "@/common/components/layouts/sidebar/Splash";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import Sidebar from "./sidebar";

import { usesplash } from "@/store/splash";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const readMode = searchParams.get("read-mode");

  const { loading, notLoading } = usesplash();

  const hideSidebar =
    ["/me", "/board"].includes(pathName) || readMode === "true";

  React.useEffect(() => {
    const times = setTimeout(() => {
     
    }, 2000);

    return () => clearTimeout(times);
  }, []);

  return (
    <div
      className={`flex h-screen ${
        loading ? "justify-center items-center" : ""
      }`}
    >
      {loading && <SplashScreen />}
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
}
