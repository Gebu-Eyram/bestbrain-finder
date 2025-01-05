import { MarkerF, OverlayView } from "@react-google-maps/api";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import SchoolCard from "./SchoolCard";
import React, { useEffect } from "react";
interface Props {
  place: any;
  activePlace: any;
  setActivePlace: React.Dispatch<any>;
}

const SchoolMarker = ({ place, activePlace, setActivePlace }: Props) => {
  const photoRef = place?.photos ? place?.photos[0]?.photo_reference : "";
  return (
    <MarkerF
      // @ts-ignore
      position={place.geometry.location}
      onClick={() => setActivePlace(place)}
      icon={{
        url: "/school.png",
        //@ts-ignore
        scaledSize: { width: 0, height: 0 },
      }}
    >
      <OverlayView
        position={place.geometry.location}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <div className="cursor-pointer">
          {photoRef ? (
            <img
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyCjW673RoO9Lan2do3badZaOMfdQcFxn84`}
              alt=""
              className="w-10 h-10 rounded-full border-4 border-white dark:border-gray-700 shadow"
              onClick={() => setActivePlace(place)}
            />
          ) : (
            <div
              className="h-10 w-10 border-4 border-white dark:border-gray-700 shadow-sm rounded-full bg-primary flex items-center justify-center"
              onClick={() => setActivePlace(place)}
            />
          )}

          <div
            className={`ml-[-70px]  relative mt-[-270px] ${
              place === activePlace ? "" : "hidden"
            }`}
          >
            <Button
              size={"icon"}
              className="absolute"
              variant={"ghost"}
              onClick={() => {
                console.log("clicked");
                setActivePlace(null);
              }}
            >
              <X className="w-4 h-4" />
            </Button>
            <SchoolCard close place={place} />
          </div>
        </div>
      </OverlayView>
    </MarkerF>
  );
};

export default SchoolMarker;
