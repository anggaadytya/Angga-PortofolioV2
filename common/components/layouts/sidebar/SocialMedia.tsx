"use client";
import React from "react";

import { InstagramLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const SocialMedia = () => {
  return (
    <div className="mx-2 py-2">
      <div className="flex items-center gap-2">
        <InstagramLogo size={20}  className="bg-red-500 text-white h-6 w-6 rounded hover:-rotate-12 hover:scale-110 transition-all duration-300 ease-in cursor-pointer"/>
        <GithubLogo size={20} className="bg-black text-white h-6 w-6 rounded"/>
        <LinkedinLogo size={20} className="bg-blue-500 text-white h-6 w-6 rounded"/>
      </div>
    </div>
  );
};

export default SocialMedia;
