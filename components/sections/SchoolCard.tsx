import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const SchoolCard = ({ place }: { place: any }) => {
  const photoRef = place?.photos ? place?.photos[0]?.photo_reference : "";
  const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  return (
    <div className="flex flex-col border w-full min-w-[195px] bg-background mb-3 rounded-2xl gap-2 p-2 items-center">
      {photoRef.length > 0 ? (
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyCjW673RoO9Lan2do3badZaOMfdQcFxn84`}
          alt={place.name}
          className="w-full aspect-video rounded-md object-cover object-center"
        />
      ) : (
        <div className="bg-muted w-full aspect-video rounded-lg animate-pulse"></div>
      )}

      <div className="text-start w-full items-start text-xs pl-2">
        <p className="font-medium line-clamp-1 text-sm">{place.name}</p>
        <p className="line-clamp-2 text-muted-foreground">
          {place.formatted_address}
        </p>
        <div className=" flex items-center my-2 justify-between">
          <strong>
            {place.opening_hours?.open_now ? "Open Now" : "Closed"}
          </strong>
          <p>
            <strong>4 miles</strong>
          </p>
        </div>

        <Button className="w-full" variant={"outline"}>
          Get Direction
        </Button>
      </div>
    </div>
  );
};

export default SchoolCard;
