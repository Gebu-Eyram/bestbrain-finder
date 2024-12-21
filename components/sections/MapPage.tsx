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
import { SchoolLocationsContext } from "@/app/(context)/SchoolLocationsContext";

export function MapPage() {
  const { schoolLocations, setSchoolLocations } = React.useContext(
    SchoolLocationsContext
  );

  const [range, setRange] = React.useState(0);

  const [location, setLocation] = React.useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      GetPlaces();
    }, 2000);

    return () => clearTimeout(timeoutId);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("schoolLocations", schoolLocations);
  }, [schoolLocations]);
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
            <SchoolsList />
          </div>
          <div className="relative  flex h-full min-h-[50vh]  flex-col lg:rounded-xl bg-muted/50  ">
            <MapComponent
              range={range}
              setRange={(value: any) => setRange(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
