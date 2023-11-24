"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { GithubLogo } from "@phosphor-icons/react";
import Title from "@/common/components/elements/Title";

const Github = () => {
  return (
    <div className="w-full">
      <Title icons={<GithubLogo size={20} />} title="Github Contributions" />
      <div className="px-2 md:px-0 text-xs w-full no-scrollbar flex justify-center ">
        <GitHubCalendar
          username="anggaadytya"
          year={new Date().getFullYear()}
          colorScheme="light"
          blockRadius={3}
          fontSize={11}
          showWeekdayLabels={true}
        />
      </div>
    </div>
  );
};

export default Github;
