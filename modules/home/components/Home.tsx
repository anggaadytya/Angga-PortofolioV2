"use client";
import Breakline from "@/common/components/elements/Breakline";
import Title from "@/common/components/elements/Title";

import { House } from "@phosphor-icons/react";

import React from "react";
import Github from "./Github";
import Self from "./Self";

const Home = () => {
  return (
    <>
      <Self />
      <Breakline />
      <Github />
      <Breakline />
    </>
  );
};

export default Home;
