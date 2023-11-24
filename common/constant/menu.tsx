import {
  Archive as BlogIcon,
  Phone as ContactIcon,
  ChalkboardSimple as DashboardIcon,
  House as HomeIcon,
  Folders as LearnIcon,
  UserCircle as ProfileIcon,
  Code as ProjectIcon,
  DiscordLogo as DiscordIcon,
  GithubLogo as GithubIcon,
  InstagramLogo as InstagramIcon,
  LinkedinLogo as LinkedinIcon,
  TiktokLogo as TiktokIcon,
  TwitterLogo as TwitterIcon,
} from "@phosphor-icons/react";

import { MenuItemProps } from "../types/menu";

const iconSize = 20;
const color = "black";

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Home",
  },
  {
    title: "Skills",
    href: "/skills",
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Skills",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: projects",
  },
  {
    title: "About",
    href: "/abouts",
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: About",
  },
  {
    title: "Dashboard",
    href: "/dashboards",
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Dashboard",
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: "Github",
    href: "",
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Github",
    backgroundColor: "bg-gray-800",
  },
  {
    title: "Linkedin",
    href: "",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
    backgroundColor: "bg-blue-600",
  },
  {
    title: "Twitter",
    href: "",
    icon: <TwitterIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: "Social: Twitter",
  },
  {
    title: "Instagram",
    href: "",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
    backgroundColor: "bg-pink-600",
  },
  {
    title: "Discord",
    href: "",
    icon: <DiscordIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Discord",
    backgroundColor: "bg-purple-700",
  },
  {
    title: "TikTok",
    href: "",
    icon: <TiktokIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Tiktok",
    backgroundColor: "bg-black",
  },
];
