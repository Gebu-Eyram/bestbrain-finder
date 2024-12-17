import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import DrawerForMap from "./DrawerForMap";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Textarea } from "../ui/textarea";
import UserActions from "../user-actions";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import MapComponent from "./MapComponent";

export function MapPage() {
  return (
    <div className="grid h-screen w-full">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <Link href={"/"} className="text-xl flex gap-2 font-semibold">
            <Image
              src="/logo.svg"
              alt="logo"
              className=""
              width={24}
              height={24}
            />
            <h1 className="max-sm:hidden">Bestbrain</h1>
          </Link>
          <DrawerForMap />
          <div className="ml-auto flex gap-2 items-center">
            <ModeToggle />
            <UserActions />
          </div>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto lg:p-4   ">
          <div className="relative flex h-full min-h-[50vh] flex-col lg:rounded-xl bg-muted/50  ">
            <MapComponent />
          </div>
        </main>
      </div>
    </div>
  );
}
