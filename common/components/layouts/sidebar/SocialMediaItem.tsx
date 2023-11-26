"use client";
import React from "react";

import Tooltip from "../../elements/Tooltip";
import Link from "next/link";
import { MenuItemProps } from "@/common/types/menu";

const SocialMediaItem = ({
  title,
  href,
  icon,
  backgroundColor
}: MenuItemProps) => {
  return (
    <div className="mx-2 py-2">
      <div className="flex items-center gap-2">
        <Tooltip title={title}>
          <Link
            href={href}
            className={`${backgroundColor} text-neutral-100 rounded flex items-center justify-center h-6 w-6 hover:-rotate-6 hover:scale-110 transition-all duration-300 ease-in-out border border-neutral-700`}
          >
            {icon}
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default SocialMediaItem;
