"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import SchoolCard from "./SchoolCard";

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
  return (
    <ScrollArea className="w-full h-full py-4 pb-8 px-2  lg:max-h-[calc(90vh-10px)]">
      {schoolLocations.length > 0 &&
        schoolLocations.map((place: any, index: number) => (
          <SchoolCard place={place} key={index} />
        ))}

      <ScrollBar orientation="vertical" className="hidden" />
    </ScrollArea>
  );
};

export default SchoolsList;
