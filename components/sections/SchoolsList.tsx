"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import SchoolCard from "./SchoolCard";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

const SchoolsList = ({ schoolLocations }: { schoolLocations: any }) => {
  const [location, setLocation] = React.useState({ lat: 0, lng: 0 });

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  const [search, setSearch] = React.useState("");
  return (
    <ScrollArea className="w-full h-full py-4 pb-8 px-2 gap-4  lg:max-h-[calc(90vh-10px)]">
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

      {schoolLocations
        .filter((place: any) =>
          place.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((place: any, index: number) => (
          <SchoolCard place={place} key={index} />
        ))}

      <ScrollBar orientation="vertical" className="hidden" />
    </ScrollArea>
  );
};

export default SchoolsList;
