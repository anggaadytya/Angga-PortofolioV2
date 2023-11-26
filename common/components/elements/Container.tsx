"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  [propName: string]: React.ReactNode | string | undefined;
  withMarginTop?: boolean;
}

export default function Container({
  children,
  className = "",
  withMarginTop = true,
  ...others
}: ContainerProps) {
  const searchParams = useSearchParams();
  const readMode = searchParams?.get("read-mode");

  return (
    <div
      data-aos="fade-up"
      className={` ${
        (readMode !== "true" || withMarginTop) && "mt-[5.6rem] mx-2 fixed -z-10"
      } md:mt-6 md:mr-2 ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}
