import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import SchoolCard from "./SchoolCard";

const SchoolsList = ({ places }: { places: any }) => {
  return (
    <ScrollArea className="w-full h-full py-4 pb-8 px-2  lg:max-h-[calc(90vh-10px)]">
      {places.length > 0 &&
        places.map((place: any, index: number) => (
          <SchoolCard place={place} key={index} />
        ))}

      <ScrollBar orientation="vertical" className="hidden" />
    </ScrollArea>
  );
};

export default SchoolsList;
