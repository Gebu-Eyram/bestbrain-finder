import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
  return (
    <div className="relative max-w-7xl mx-auto bg-grid-small-black/25 dark:bg-grid-small-white/25 mb-8 md:mb-16">
      <div className="absolute  pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] " />
      <div className="max-w-2xl relative z-10 mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold font-[family-name:var(--font-sora)]   sm:text-4xl">
          <span className="block">We are the future of </span>
          <span className="block text-indigo-500">African Education</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-muted-foreground">
          Elevate your learning experience with us. We provide personalized
          learning experiences for students and schools.
        </p>
        <Link
          href="https://www.bestbrainexams.com/about"
          target="_blank"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md  sm:w-auto"
        >
          <Button className=" flex gap-2 bg-indigo-700 text-white duration-500 ease-in border hover:bg-transparent hover:text-foreground items-center">
            Find out more <ArrowRightCircle className="  w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
