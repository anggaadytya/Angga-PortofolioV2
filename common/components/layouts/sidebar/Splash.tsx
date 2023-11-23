"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 30,
      }}
      >
        <Image
          src={"https://avatars.githubusercontent.com/u/114200420?v=4"}
          alt="profile"
          width={180}
          height={180}
          className="rounded-full"
        />
      </motion.div>
      <motion.h1
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className=" text-sm md:text-xl font-semibold tracking-wider py-2"
      >
        WELCOME TO WEBSITE PORTOFOLIO
      </motion.h1>
      <motion.h2 
       initial={{ x: -40, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{
         type: "spring",
         stiffness: 260,
         damping: 20,
       }}
      className="text-sm font-medium">
        MUHAMMAD ANGGA ADYTYA
      </motion.h2>
    </div>
  );
};

export default SplashScreen;
