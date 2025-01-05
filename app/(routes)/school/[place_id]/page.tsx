"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Globe, Map, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
const page = () => {
  const { place_id } = useParams();
  const [placeId, setPlaceId] = React.useState<any>("");
  const [placeDetails, setPlaceDetails] = React.useState<any | null>(null);
  const GetPlaceDetails = async () => {
    try {
      const link = `/api/get-phone?place_id=${placeId}`;
      console.log(link);
      const response = await axios.get<{ result: any }>(link);
      //@ts-ignore
      console.log(response.data.result);
      setPlaceDetails(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setPlaceId(place_id);
  }, [place_id]);
  useEffect(() => {
    placeId.length > 0 && GetPlaceDetails();
  }, [placeId]);
  const handleCall = () => {
    window.open(`tel:${placeDetails?.international_phone_number}`);
  };
  return (
    <div className="p-4">
      <div>
        <div className="mx-auto rounded-3xl ring-1 ring-border  lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 slg:flex-auto w-full">
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground/80 ">
                  {placeDetails?.name}
                </h3>
                <p className="mt-6 text-base leading-7  text-foreground/60">
                  {/* {SelectedSchool && SelectedSchool[0].desc} */}
                </p>
              </div>
              <div>
                {/* <Image
                  src={
                    (SelectedSchool && SelectedSchool[0].picture) ||
                    "/school.svg"
                  }
                  alt="image"
                  height={50}
                  width={50}
                  className="rounded-full max-sm:w-25 max-sm:h-25"
                /> */}
              </div>
            </div>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold font leading-6 text-primary">
                School Details
              </h4>
              <div className="h-px flex-auto bg-border" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              <li className="flex gap-x-3">
                <PhoneCall
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-primary"
                />
                <span className="flex-auto w-full line-clamp-1 text-foreground/80">
                  <span> {placeDetails?.international_phone_number}</span>
                </span>
              </li>
              <li className="w-full flex">
                <Link href={placeDetails?.url || "#"} className="flex gap-x-3">
                  <Globe
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-primary"
                  />
                  <span className="flex-auto  w-full line-clamp-1 text-foreground/80">
                    <span className=" w-full">Find on map</span>
                  </span>
                </Link>
              </li>
              <li className="flex gap-x-3">
                <MapPin
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-primary"
                />
                <span className="flex-auto w-full line-clamp-1 text-foreground/80">
                  {placeDetails?.vicinity || "No vicinity found"}
                </span>
              </li>
              <li className="flex gap-x-3">
                <Map
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-primary"
                />
                <span className="flex-auto w-full line-clamp-1 text-foreground/80">
                  {placeDetails?.formatted_address || "No address found"}
                </span>
              </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
            <div className="rounded-2xl bg-muted/30 h-full py-10 text-center ring-1 ring-inset relative ring-border lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs flex flex-col items-center px-8">
                <p className="text-base w-full text-center hidden md:flex  font-semibold font text-foreground/80">
                  Call School
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-foreground/80">
                    <PhoneCall className="h-10 w-10" />
                  </span>
                </p>
                <Button
                  onClick={handleCall}
                  className="w-full !bg-green-600 !text-white  mt-6 "
                >
                  Call
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Link href={"/map"} className="w-full  ">
          <Button className="w-full  max-w-sm mt-4" variant="outline">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default page;
