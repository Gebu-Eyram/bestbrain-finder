"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const GetStarted = () => {
  const { user } = useKindeBrowserClient();
  return (
    <Link
      href={`${user ? "/map" : "/api/auth/login"}`}
      className="max-sm:w-full max-w-[400px]"
    >
      <Button className=" max-sm:w-full max-w-[400px]">Get Started</Button>
    </Link>
  );
};

export default GetStarted;
