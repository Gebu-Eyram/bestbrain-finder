"use client";
import React from "react";
import { FloatingNav } from "@/components/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { SparklesIcon } from "lucide-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "/#features",
      icon: (
        <SparklesIcon className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "https://www.bestbrainexams.com/contact-us",
      icon: (
        <IconMessage className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
