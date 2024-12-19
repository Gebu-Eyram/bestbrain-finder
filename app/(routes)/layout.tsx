"use client";

import React from "react";
import { UserLocationContext } from "../(context)/UserLocationContext";
import Provider from "../provider";
import { Toaster } from "@/components/ui/toaster";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [userLocation, setUserLocation] = React.useState({
    lat: 0,
    lng: 0,
  });
  return (
    <div>
      <Provider>
        <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
          {children}
          <Toaster />
        </UserLocationContext.Provider>
      </Provider>
    </div>
  );
};

export default layout;
