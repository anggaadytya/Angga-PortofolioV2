import React from "react";

import Breakline from "@/common/components/elements/Breakline";
import { MENU_ITEMS, SOCIAL_MEDIA } from "@/common/constant/menu";

import Menu from "./Menu";
import Profile from "./Profile";
import Copyright from "@/common/components/elements/Copyright";
import SocialMedia from "./SocialMedia";


export default function Sidebar() {
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  const filterdSocial = SOCIAL_MEDIA?.filter((item) => item?.isShow);
  
  return (
    <div data-aos="fade-down" className="fixed md:bg-white inset-y-0 left-0 transition-all duration-300 flex flex-col md:px-2 md:h-screen md:py-8">
      <Profile />
      <nav>
        <Breakline />
        <div className="hidden md:flex md:flex-col ">
          <Menu list={filterdMenu} />
        </div>
        <Breakline />
        <SocialMedia list={filterdSocial}/>
        <Copyright />
      </nav>
    </div>
  );
}
