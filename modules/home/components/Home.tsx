"use client";
import Breakline from "@/common/components/elements/Breakline";
import Title from "@/common/components/elements/Title";

import { House } from "@phosphor-icons/react";

import React from "react";
import Github from "./Github";

const Home = () => {
  return (
    <>
      <Breakline />
      <Title title="Home" icons={<House size={20} />} />
      <p className="text-sm font-light text-zinc-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        inventore ipsam laudantium itaque, dicta laboriosam cupiditate
        doloremque facere! Facilis perferendis repellendus placeat aliquid
        molestiae at accusamus, tenetur dolore sapiente tempora!
      </p>
      <Breakline />
      <Github />
      <Breakline />
    </>
  );
};

export default Home;
