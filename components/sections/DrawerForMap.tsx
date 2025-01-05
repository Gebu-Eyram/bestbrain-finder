"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { IconSettingsAutomation } from "@tabler/icons-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LayoutList, SearchIcon } from "lucide-react";
import SchoolCard from "./SchoolCard";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const DrawerForMap = ({ places }: { places: any }) => {
  const [search, setSearch] = React.useState("");
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"outline"} className="lg:hidden" size={"icon"}>
          <LayoutList className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="h-screen overflow-y-auto px-0">
        <SheetHeader>
          <SheetTitle>Schools around you</SheetTitle>
          <ScrollArea className="w-full h-full py-4 pb-8 px-2  lg:max-h-[calc(90vh-10px)]">
            <div className="flex items-center justify-between relative px-4 border rounded-lg bg-background mb-4">
              <SearchIcon className="w-4 h-4 absolute left-4 top-0 translate-y-1/2 " />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search for schools"
                className="w-full border-none outline-none pl-5 "
              />
            </div>

            {places
              .filter((place: any) =>
                place.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((place: any, index: number) => (
                <SchoolCard place={place} key={index} />
              ))}

            <ScrollBar orientation="vertical" className="hidden" />
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerForMap;
