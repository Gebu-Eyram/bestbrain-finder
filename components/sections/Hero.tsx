import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import GetStarted from "../get-started";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="w-full pt-36 pb-6 sm:pb-10 md:pt-24 lg:pb-24 lg:pt-32 xl:pt-48 relative"
    >
      <video
        src="/map-video.mp4"
        muted
        loop
        autoPlay
        className=" absolute inset-0 -z-10 opacity-10 dark:opacity-20 bg-transparent w-full h-full pointer-events-none object-fill "
      />
      <div className="absolute  pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] -z-10" />

      <div className="flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <div className="space-y-2 w-full flex gap-4 flex-col">
          <h1 className="text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl/none">
            Find schools around you
          </h1>
          <p className="mx-auto max-w-[400px] sm:max-w-[500px]  md:max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Tired of searching for schools one by one? This app makes it easy to
            discover the schools in your area.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 mt-4 sm:mt-6 lg:mt-8 ">
          <GetStarted />
          <Link href={"/#features"} className="max-sm:w-full max-w-[400px]">
            <Button variant={"outline"} className=" max-sm:w-full ">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute w-full -z-10 h-40 bg-gradient-to-b bottom-0 from-transparent  to-background" />
    </section>
  );
};

export default Hero;
