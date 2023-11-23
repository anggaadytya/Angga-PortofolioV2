"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { GithubLogo } from "@phosphor-icons/react";
import Title from "@/common/components/elements/Title";

const Github = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <Title icons={<GithubLogo size={20} />} title="Github Contributions" />
      <GitHubCalendar
        username="anggaadytya"
        colorScheme="light"
        blockRadius={3}
        showWeekdayLabels
      />
    </div>
  );
};

export default Github;
