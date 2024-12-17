import { ModeToggle } from "@/components/mode-toggle";
import DrawerForMap from "@/components/sections/DrawerForMap";
import UserActions from "@/components/user-actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <Link href={"/"} className="text-xl flex gap-2 font-semibold">
          <Image
            src="/logo.svg"
            alt="logo"
            className=""
            width={24}
            height={24}
          />
          <h1 className="max-sm:hidden">Bestbrain</h1>
        </Link>

        <div className="ml-auto flex gap-2 items-center">
          <ModeToggle />
          <UserActions />
        </div>
      </header>
      Dashboard
      <h1>This is the Dashboard</h1>
    </div>
  );
};

export default Dashboard;
