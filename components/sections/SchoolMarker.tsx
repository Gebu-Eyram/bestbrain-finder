import { MarkerClusterer, MarkerF, OverlayView } from "@react-google-maps/api";
import React from "react";
import { Button } from "../ui/button";
import SchoolCard from "./SchoolCard";
import { X } from "lucide-react";
interface Props {
  place: any;
  setActivePlace: any;
  activePlace: any;
}

const SchoolMarker = ({ place, activePlace, setActivePlace }: Props) => {
  const photoRef = place?.photos ? place?.photos[0]?.photo_reference : "";
  return (
    <MarkerF
      // @ts-ignore
      position={place.geometry.location}
      onClick={() => setActivePlace(place)}
      icon={{
        url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyCjW673RoO9Lan2do3badZaOMfdQcFxn84`,
        // @ts-ignore
        scaledSize: { width: 30, height: 30 },

        // Make the icon rounded
      }}
      shape={{
        coords: [12.5, 12.5, 12.5],
        type: "circle",
      }}
    >
      <OverlayView
        position={place.geometry.location}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <div
          className={`ml-[-90px]  relative mt-[-310px] ${
            place === activePlace ? "" : "hidden"
          }`}
        >
          <Button
            size={"icon"}
            className="absolute "
            variant={"ghost"}
            onClick={() => setActivePlace("")}
          >
            <X className="w-4 h-4 " />
          </Button>
          <SchoolCard close place={place} />
        </div>
      </OverlayView>
    </MarkerF>
  );
};

export default SchoolMarker;
