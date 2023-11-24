"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const readMode = searchParams.get("read-mode");

  const hideSidebar =
    ["/me", "/board"].includes(pathName) || readMode === "true";

  return (
    <div className={`flex h-screen`}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="flex flex-col md:flex-row md:w-[26rem] lg:w-[23rem] justify-between md:gap-5"
      >
        {!hideSidebar && (
          <header>
            <Sidebar />
          </header>
        )}
      </motion.div>
      <motion.main
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        className="transition-all scroll-smooth duration-300 w-full md:min-h-screen no-scrollbar"
      >
        {children}
      </motion.main>
    </div>
  );
}
