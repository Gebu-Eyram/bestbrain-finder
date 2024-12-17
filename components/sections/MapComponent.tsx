"use client";

import React, { useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import { LoaderIcon, MapPin, Settings2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const MapComponent = () => {
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
    console.log(location);
  }, [location]);
  const [range, setRange] = React.useState(100);
  const [open, setOpen] = React.useState(false);
  const [places, setPlaces] = React.useState([]);

  const GetPlaces = async () => {
    try {
      const response = await axios.get<{ result: any }>(
        `/api/google-place?radius=${range / 1000}&lat=${location.lat}&lng=${
          location.lng
        }`
      );
      //@ts-ignore
      setPlaces(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      GetPlaces();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [range]);

  useEffect(() => {
    console.log(places);
  }, [places]);

  return (
    <div className="w-full h-full rounded-t-lg relative">
      <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
        <DialogContent className="w-full max-w-screen-md max-sm:max-w-[94vw]  rounded-xl">
          <DialogHeader>
            <DialogTitle>Range - {range}m. </DialogTitle>
            <DialogDescription>
              Select the range you want to search for schools.
              <input
                className="w-full my-4"
                type="range"
                value={range}
                onChange={(e) => setRange(parseInt(e.target.value))}
                min={0}
                step={100}
                max={5000}
              />
              Radius in meters
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <LoadScript
        mapIds={["232a00da9734c406"]}
        loadingElement={
          <div className="h-full w-full flex items-center justify-center">
            <LoaderIcon className="w-10 h-10 animate-spin" />
          </div>
        }
        googleMapsApiKey={"AIzaSyCjW673RoO9Lan2do3badZaOMfdQcFxn84"}
      >
        <GoogleMap
          mapContainerClassName="w-full h-full rounded-lg relative"
          mapContainerStyle={containerStyle}
          center={location}
          zoom={16}
          options={{ mapId: "232a00da9734c406", disableDefaultUI: true }}
        >
          <div className="absolute top-4 left-4  gap-2 ">
            <Button
              onClick={() => {
                navigator.geolocation.getCurrentPosition((position) => {
                  setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  });
                });
              }}
              size={"icon"}
              className="absolute !bg-red-700 "
            >
              <MapPin className="w-4 h-4 !text-white" />
            </Button>
          </div>
          <div className="absolute top-4 left-16  gap-2 ">
            <Button
              onClick={() => {
                setOpen(true);
              }}
              size={"icon"}
              className="absolute "
            >
              <Settings2 className="w-4 h-4 !text-white" />
            </Button>
          </div>

          {/* Child components, such as markers, info windows, etc. */}

          <MarkerF
            position={location}
            icon={{
              url: "/map-marker.png",
              //@ts-ignore
              scaledSize: { width: 40, height: 40 },
            }}
          />

          {places.map((place, index) => (
            <MarkerF
              key={index}
              // @ts-ignore
              position={place.geometry.location}
              icon={{
                url: "/school.png",
                //@ts-ignore
                scaledSize: { width: 25, height: 25 },
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
