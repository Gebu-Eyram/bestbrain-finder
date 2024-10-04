"use client";

import React, { useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import { LoaderIcon } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
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

  return (
    <div className="w-full h-full rounded-lg">
      <LoadScript
        mapIds={["232a00da9734c406"]}
        loadingElement={
          <div className="h-full w-full flex items-center justify-center">
            <LoaderIcon className="w-10 h-10 animate-spin" />
          </div>
        }
        googleMapsApiKey={""}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={16}
          options={{ mapId: "232a00da9734c406" }}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
          <MarkerF position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
