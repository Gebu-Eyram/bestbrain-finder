"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const GetStarted = () => {
  const { user } = useKindeBrowserClient();
  return user ? (
    <Link href="/map" className=" max-sm:w-full max-w-[400px]">
      <Button className=" max-sm:w-full max-w-[400px] dark:bg-white dark:text-black bg-black text-white hover:bg-black/80  dark:hover:bg-white/80">
        Get Started
      </Button>
    </Link>
  ) : (
    <LoginLink>
      <Button className=" max-sm:w-full max-w-[400px]">Get Started</Button>
    </LoginLink>
  );
};

export default GetStarted;
