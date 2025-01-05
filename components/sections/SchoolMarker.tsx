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
        url: "/school.png",
        // @ts-ignore
        scaledSize: { width: 0, height: 0 },

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
        <div className="">
          <div>
            <div
              className={`w-12 h-12 rounded-full shadow bg-white flex items-center justify-center`}
            >
              <div
                onClick={() => setActivePlace(place)}
                className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-[#FFA500]"
              >
                <img
                  src={
                    photoRef
                      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyCjW673RoO9Lan2do3badZaOMfdQcFxn84`
                      : "/school.png"
                  }
                  alt="school"
                  className="h-10 w-10 rounded-full m-auto"
                />
              </div>
            </div>
          </div>
          <div
            className={`ml-[-70px]  relative mt-[-310px] ${
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
        </div>
      </OverlayView>
    </MarkerF>
  );
};

export default SchoolMarker;
