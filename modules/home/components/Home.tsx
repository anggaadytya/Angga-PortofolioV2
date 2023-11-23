import SplashScreen from "@/common/components/layouts/sidebar/Splash";
import Breakline from "@/common/components/elements/Breakline";
import Title from "@/common/components/elements/Title";

import React from "react";
import Github from "./Github";

const Home = () => {
  return (
    <>
      <Breakline />
      <Title title="Home" />
      <Breakline />
      <Github />
      <Breakline />
    </>
  );
};

export default Home;
