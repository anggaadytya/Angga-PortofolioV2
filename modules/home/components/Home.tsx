"use client";

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-[200vh]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          damping: 25,
          stiffness: 260,
          type: "spring",
        }}
        className="bg-red-500 w-full h-[20vh] text-white text-center"
      >
        halo
      </motion.div>
      <div className="bg-red-600 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-700 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-800 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-900 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-400 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-300 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-200 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-100 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-500 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-600 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-700 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-800 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-900 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-400 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-500 w-full h-[20vh] text-white text-center">
        halo
      </div>
      <div className="bg-red-600 w-full h-[20vh] text-white text-center">
        halo
      </div>
    </div>
  );
};

export default Home;
