import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import GetStarted from "../get-started";

const Hero = () => {
  return (
    <section id="Hero" className="w-full pb-6 sm:pb-10  lg:pb-24  relative">
      <video
        src="/map-video.mp4"
        muted
        loop
        autoPlay
        className=" absolute inset-0 -z-10 opacity-10 dark:opacity-20 bg-transparent w-full h-full pointer-events-none object-fill "
      />
      <div className="absolute  pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] -z-10" />

      <div className="mx-auto max-w-2xl lg:pb-16 pt-32 sm:pt-48 lg:pt-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 border cursor-pointer">
            School finding made easy by{" "}
            <span className="font-semibold text-indigo-600">Bestbrain</span>{" "}
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl max-sm:max-w-md font-bold tracking-tight sm:text-6xl">
            Uncover the schools within your reach.
          </h1>
          <p className="mt-6 text-lg max-sm:max-w-sm leading-8 text-center w-full text-muted-foreground">
            Tired of searching for schools one by one? This app makes it easy to
            discover the schools in your area.
          </p>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 mt-4 sm:mt-6 lg:mt-8 ">
            <GetStarted />
            <Link href={"/#features"} className="max-sm:w-full max-w-[400px]">
              <Button variant={"outline"} className=" max-sm:w-full ">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute w-full -z-10 h-40 bg-gradient-to-b bottom-0 from-transparent  to-background" />
    </section>
  );
};

export default Hero;
