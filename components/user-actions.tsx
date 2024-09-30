"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogOut, User } from "lucide-react";
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

const UserActions = () => {
  const { user } = useKindeBrowserClient();
  if (user) {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white p-1 rounded-full">
              {user ? (
                <Image
                  src={user.picture!}
                  alt="user"
                  width={24}
                  height={24}
                  className="rounded-full"
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
        <Link
          href={"/api/auth/login"}
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Link>
      </div>
    );
  }
};

export default UserActions;
