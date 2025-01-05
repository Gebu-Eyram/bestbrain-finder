"use client";
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
import React, { useEffect } from "react";
import axios from "axios";
import SchoolsList from "./SchoolsList";
import { toast } from "@/hooks/use-toast";

export function MapPage() {
  const [range, setRange] = React.useState(0);

  const [location, setLocation] = React.useState({ lat: 0, lng: 0 });
  const [schoolLocations, setSchoolLocations] = React.useState<any>([]);
  // useEffect(() => {
  //   localStorage.setItem("schoolLocations", JSON.stringify(schoolLocations));
  // }, [schoolLocations]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    const storedSchoolLocations = localStorage.getItem("schoolLocations");

    if (storedSchoolLocations) {
      setSchoolLocations(JSON.parse(storedSchoolLocations));
      toast({
        title: "Schools loaded",
        description: "Schools loaded from cache",
      });
    }
  }, []);

  useEffect(() => {
    if (location.lat !== 0 && location.lng !== 0) {
      GetPlaces();
    }
  }, [range]);

  useEffect(() => {});
  const GetPlaces = async () => {
    try {
      const response = await axios.get<{ result: any }>(
        `/api/google-place?radius=${range / 1609.34}&lat=${location.lat}&lng=${
          location.lng
        }`
      );

      //@ts-ignore
      setSchoolLocations(response.data.results);
      //@ts-ignore
      if (response.data.results) {
        localStorage.setItem(
          "schoolLocations",
          //@ts-ignore
          JSON.stringify(response.data.results)
        );

        toast({
          title: "Schools stored",
          description: "Schools stored in cache",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <DrawerForMap places={schoolLocations} />
          <div className="ml-auto flex gap-2 items-center">
            <ModeToggle />
            <UserActions />
          </div>
        </header>
        <div className="grid lg:grid-cols-[300px_1fr] h-full">
          <div className="max-h-screen max-lg:hidden">
            {location.lat && location.lng && (
              <SchoolsList schoolLocations={schoolLocations} />
            )}
          </div>
          <div className="relative  flex h-full min-h-[50vh]  flex-col lg:rounded-xl bg-muted/50  ">
            <MapComponent
<<<<<<< HEAD
              schoolLocations={schoolLocations}
=======
              places={schoolLocations}
>>>>>>> parent of 90776a8 (Remove unused 'places' prop from MapComponent in MapPage)
              range={range}
              setRange={(value: any) => setRange(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
