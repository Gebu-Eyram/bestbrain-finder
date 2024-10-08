"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconDirection,
  IconDirectionSign,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconUserFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BotIcon,
  BrainCircuit,
  LayoutIcon,
  RadarIcon,
  School,
} from "lucide-react";
import { BentoAvatar } from "../../avatar-demo";
import { CardSkeleton } from "./DamnGoodCard";
import Radar from "./Radar";
import { InView } from "@/components/core/InView";

export function Features() {
  return (
    <section id="features" className="py-4 sm:py-8">
      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <div className="p-4 w-full max-w-6xl mx-auto flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl   font-[family-name:var(--font-sora)] font-bold text-neutral-900 dark:text-neutral-200">
            Amazing features just for you!
          </h2>

          <p className="max-sm:text-sm text-gray-500  dark:text-gray-400">
            Here are some of the amazing features we offer to make your
            experience better.
          </p>
        </div>
        <BentoGrid className="max-w-6xl p-2 sm:p-4 pb-8  mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </InView>
    </section>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 [mask-image:radial-gradient(ellipse_at_center,white,white,transparent)]"
    >
      <Radar />
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/logo.svg"
          width={30}
          height={30}
          className=" w-10 h-10 sm:w-[30px] rounded-full  sm:h-[30px] cursor-pointer"
          alt="logo"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Bestbrain Junior High
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Far
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/logo.svg"
          width={30}
          height={30}
          className=" w-10 h-10 sm:w-[30px] rounded-full  sm:h-[30px] cursor-pointer"
          alt="logo"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Bestbrain Elementary
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Near
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/logo.svg"
          width={30}
          height={30}
          className=" w-10 h-10 sm:w-[30px] rounded-full  sm:h-[30px] cursor-pointer"
          alt="logo"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          BrainBest School Complex
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Quite far
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <BentoAvatar />
        <p className="text-xs text-neutral-500">
          Where can I locate the school around the corner?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Take a left turn at the junction.
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Adjustable search radius",
    description: (
      <span className="text-sm">
        Want to find more schools? Just increase your search radius.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <RadarIcon className="h-4 w-4 !text-blue-500" />,
  },
  {
    title: "High end technolgy",
    description: (
      <span className="text-sm">
        We use the latest technologies in the industry to power our services.
      </span>
    ),
    header: <CardSkeleton />,
    className: "md:col-span-1",
    icon: <BrainCircuit className="h-4 w-4 !text-blue-500" />,
  },
  {
    title: "Simple interface",
    description: (
      <span className="text-sm">
        Enjoy top tier user experience with our simple interface.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <LayoutIcon className="h-4 w-4 !text-blue-500" />,
  },
  {
    title: "School details",
    description: (
      <span className="text-sm">
        Know more about your school with detailed information before getting
        there.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <School className="h-4 w-4 !text-blue-500" />,
  },

  {
    title: "Directions",
    description: (
      <span className="text-sm font-mono">
        Get directions to your schools with Google powered navigation.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconDirectionSign className="h-4 w-4 !text-blue-500" />,
  },
];
