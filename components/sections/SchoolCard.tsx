"use client";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { UserLocationContext } from "@/app/(context)/UserLocationContext";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  place: any;
  close?: boolean;
}
const SchoolCard = ({ place, close }: Props) => {
  const photoRef = place?.photos ? place?.photos[0]?.photo_reference : "";
  const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [placeId, setPlaceId] = useState("");
  const [placeDetails, setPlaceDetails] = useState<any | null>(null);

  const { userLocation } = useContext(UserLocationContext);

  const onDirectionClick = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&origin=" +
        userLocation.lat +
        "," +
        userLocation.lng +
        "&destination=" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "&travelmode=walking"
    );
  };

  const router = useRouter();

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    var R = 6371; // km
    var toRad = (value: number) => {
      return (value * Math.PI) / 180;
    };

    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d;
  };

  return (
    <div
      className={`first-letter:flex flex-col border w-full min-w-[195px] bg-background mb-3 rounded-2xl gap-2 p-2 items-center ${close ? "pt-8" : ""}`}
    >
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
        {placeDetails && (
          <p className="line-clamp-1 text-muted-foreground">
            Phone: {placeDetails.formatted_phone_number}
          </p>
        )}
        <div className=" flex items-center my-2 justify-between">
          <strong>
            {place.opening_hours?.open_now ? "Open Now" : "Closed"}
          </strong>
          <p>
            <strong>
              {calculateDistance(
                userLocation.lat,
                userLocation.lng,
                place.geometry.location.lat,
                place.geometry.location.lng
              ).toFixed(2)}{" "}
              km
            </strong>
          </p>
        </div>

        <Button
          className="w-full"
          variant={"outline"}
          onClick={() => router.push(`/school/${place.place_id}`)}
        >
          Details
        </Button>
        <Button className="w-full mt-2 " onClick={onDirectionClick}>
          Get Direction
        </Button>
      </div>
    </div>
  );
};

export default SchoolCard;
