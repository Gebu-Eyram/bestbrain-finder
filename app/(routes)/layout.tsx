"use client";

import React from "react";
import { UserLocationContext } from "../(context)/UserLocationContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [userLocation, setUserLocation] = React.useState({
    lat: 0,
    lng: 0,
  });
  return (
    <div>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        {children}
      </UserLocationContext.Provider>
    </div>
  );
};

export default layout;
