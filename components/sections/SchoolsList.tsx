"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import SchoolCard from "./SchoolCard";
import { SchoolLocationsContext } from "@/app/(context)/SchoolLocationsContext";

const SchoolsList = () => {
  const { schoolLocations, setSchoolLocations } = React.useContext(
    SchoolLocationsContext
  );
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
