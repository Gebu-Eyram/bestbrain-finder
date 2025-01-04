"use client";

import React from "react";
import { UserLocationContext } from "../(context)/UserLocationContext";
import Provider from "../provider";
import { Toaster } from "@/components/ui/toaster";
import { SchoolLocationsContext } from "../(context)/SchoolLocationsContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [userLocation, setUserLocation] = React.useState({
    lat: 0,
    lng: 0,
  });

  const [schoolLocations, setSchoolLocations] = React.useState<any>([]);
  React.useEffect(() => {
    const storedSchoolLocations = localStorage.getItem("schoolLocations");
    if (storedSchoolLocations) {
      setSchoolLocations(JSON.parse(storedSchoolLocations));
    }
  }, []);

  return (
    <div>
      <Provider>
        <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
          <SchoolLocationsContext.Provider
            value={{ schoolLocations, setSchoolLocations }}
          >
            {children}
          </SchoolLocationsContext.Provider>
          <Toaster />
        </UserLocationContext.Provider>
      </Provider>
    </div>
  );
};

export default layout;
