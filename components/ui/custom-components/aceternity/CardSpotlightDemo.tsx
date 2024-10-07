import Link from "next/link";
import { CardSpotlight } from "./CardSpotlight";
import { Button } from "../../button";

export function CardSpotlight1() {
  return (
    <CardSpotlight className="flex flex-col max-w-sm h-full  justify-between p-1 border bg-base-50 rounded-3xl shadow">
      <div className="z-20">
        <div className="flex flex-col p-8 border shadow rounded-[1.3rem]">
          <span className="text-xl text-base-900  font-[family-name:var(--font-sora)] font-medium">
            Free{" "}
          </span>
          <p className="text-sm text-base-500 mt-2">
            This is for casual users that want to get around. For individuals
            and hobbyists seeking fundamental features.
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
    </CardSpotlight>
  );
}

export function CardSpotlight2() {
  return (
    <CardSpotlight className="flex flex-col max-w-sm h-full  justify-between p-1 border bg-base-50 rounded-3xl shadow">
      <div className="z-20">
        <div className="flex flex-col p-8 border shadow rounded-[1.3rem]">
          <span className="text-xl text-base-900  font-[family-name:var(--font-sora)] font-medium">
            Free{" "}
          </span>
          <p className="text-sm text-base-500 mt-2">
            This is for casual users that want to get around. For individuals
            and hobbyists seeking fundamental features.
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
    </CardSpotlight>
  );
}
