"use client";

import React from "react";
import Provider from "../provider";
import { Toaster } from "@/components/ui/toaster";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [userLocation, setUserLocation] = React.useState({
    lat: 0,
    lng: 0,
  });

  const [schoolLocations, setSchoolLocations] = React.useState<any>([]);

  return (
    <div>
      <Provider>
        {children}
        <Toaster />
      </Provider>
    </div>
  );
};

export default layout;
