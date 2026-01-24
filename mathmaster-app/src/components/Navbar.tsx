"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconInfoCircle,
  IconCalendar,
  IconChartBar,
  IconBook,
  IconUsers,
  IconLifebuoy,
  IconLogin,
} from "@tabler/icons-react";
import { ThemeSelector } from "./ThemeSelector";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Schedule",
      icon: (
        <IconCalendar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/schedule",
    },
    {
      title: "Dashboard",
      icon: (
        <IconChartBar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/dashboard",
    },
    {
      title: "Resources",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resources",
    },
    {
      title: "Community",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/community",
    },
    {
      title: "Support",
      icon: (
        <IconLifebuoy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/support",
    },
    {
      title: "Sign In",
      icon: (
        <IconLogin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/auth",
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-end justify-between pb-8 px-4">
      <div className="mb-2 ml-2">
        <ThemeSelector />
      </div>
      <FloatingDock items={links} />
    </div>
  );
}
