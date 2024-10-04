import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const PricingSection = () => {
  return (
    <section x-data="{duration: 'monthly'}">
      <div className="px-2 py-16 mx-auto md:px-12 lg:px-24 max-w-screen-xl relative">
        <div className="max-w-xl text-center mx-auto">
          <span className="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase">
            PRICING
          </span>
          <p className="text-4xl mt-4 font-semibold tracking-tight font-[family-name:var(--font-sora)] text-base-900 lg:text-balance">
            Equip your business with world class tools
          </p>
        </div>
        <div className="flex  flex-col gap-4 mt-12 sm:flex-row items-center justify-center  mx-auto">
          <div className="flex flex-col max-w-sm h-full  justify-between p-1 border bg-base-50 rounded-3xl shadow">
            <div className="">
              <div className="flex flex-col p-8 border shadow rounded-[1.3rem]">
                <span className="text-xl text-base-900  font-[family-name:var(--font-sora)] font-medium">
                  {" "}
                  Free{" "}
                </span>
                <p className="text-sm text-base-500 mt-2">
                  This is for casual users that want to get around. For
                  individuals and hobbyists seeking fundamental features.
                </p>
              </div>
              <div className="p-8 pt-0 mt-8">
                <p className="font-semibold lg:text-3xl flex items-baseline  font-[family-name:var(--font-sora)] text-2xl tracking-tighter text-base-900">
                  $0.00
                  <span className="text-sm font-normal tracking-normal  text-base-500">
                    /month
                  </span>
                </p>
                <div className="w-full mt-4">
                  <Link href="#hero">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Tier 2 --> */}
          <div className="flex h-full border max-w-sm justify-between flex-col bg-muted/30 p-1 rounded-3xl bg-base-900 shadow">
            <div>
              <div className="flex flex-col border p-8 bg-base-800 shadow rounded-[1.3rem]">
                <span className="text-xl font-[family-name:var(--font-sora)] font-medium">
                  {" "}
                  Pro{" "}
                </span>
                <p className="text-sm text-base-300 mt-2">
                  Designed with medium-sized businesses in mind, this
                  subscription tier provides advanced tools.
                </p>
              </div>
              <div className="p-8 pt-0 mt-8">
                <p className="font-semibold flex font-[family-name:var(--font-sora)] lg:text-3xl items-baseline text-2xl tracking-tighter">
                  $49.00
                  <span className="text-sm font-normal tracking-normal font-sans text-base-300">
                    /month
                  </span>
                </p>
                <div className="w-full mt-4">
                  <button className=" bg-indigo-500 hover:bg-indigo-500/90 text-white p-2 text-sm rounded-md font-medium w-full ">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
