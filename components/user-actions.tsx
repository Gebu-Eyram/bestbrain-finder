"use client";

import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogIn, LogOut, MapIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEffect, useState } from "react";

const UserActions = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    //@ts-ignore
    user && setCurrentUser(user);
  }, [user]);
  if (user) {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] p-px text-black dark:text-white rounded-full">
              {currentUser ? (
                <Image
                  src={user.picture!}
                  alt="user"
                  width={24}
                  height={24}
                  className="rounded-full h-8 w-8"
                />
              ) : (
                <User h-6 w-6 />
              )}
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-xs">
            <DropdownMenuLabel className="flex flex-col justify-start items-start">
              <span>
                {user?.family_name} {user?.given_name}
              </span>
              <span className="line-clamp-1 w-full text-xs font-light max-w-[130px]">
                {user.email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/map" className="cursor-pointer">
              <DropdownMenuItem className="flex gap-2 cursor-pointer">
                <MapIcon className="w-4 h-4" /> <span>Map</span>
              </DropdownMenuItem>
            </Link>

            <Link href="/api/auth/logout" className="cursor-pointer">
              <DropdownMenuItem className="flex gap-2 cursor-pointer">
                <LogOut className="w-4 h-4" /> <span>Logout</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  } else {
    return (
      <div>
        <div className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white  p-2 sm:px-4 rounded-full">
          <LoginLink>
            <span className="max-sm:hidden ">Login</span>
            <LogIn className="w-4 h-4 sm:hidden" />
          </LoginLink>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </div>
      </div>
    );
  }
};

export default UserActions;
