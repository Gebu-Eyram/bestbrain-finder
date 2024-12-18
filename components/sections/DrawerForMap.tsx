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
import { LayoutList } from "lucide-react";
import SchoolCard from "./SchoolCard";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const DrawerForMap = ({ places }: { places: any }) => {
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
            {places.length > 0 &&
              places.map((place: any, index: number) => (
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
