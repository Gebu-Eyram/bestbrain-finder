"use client";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import PricingSection from "@/components/sections/PricingSection";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { Features } from "@/components/ui/custom-components/aceternity/Bento-grid";
import { CardStackDemo } from "@/components/ui/custom-components/aceternity/CardStack";
import { FloatingNavDemo } from "@/components/ui/custom-components/aceternity/Navbar";
import { TextHoverEffect } from "@/components/ui/custom-components/aceternity/TextHoverEffect";
import { Input } from "@/components/ui/input";
import {
  useKindeAuth,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { MapPin, School } from "lucide-react";
import { useMutation } from "convex/react";
import React, { useEffect } from "react";
import { api } from "@/convex/_generated/api";

const page = () => {
  const { user } = useKindeBrowserClient();
  const createUser = useMutation(api.user.createUser);
  const checkUser = async () => {
    const result = await createUser({
      // @ts-ignore
      email: user?.email,
      // @ts-ignore
      username: user?.family_name + " " + user?.given_name,
      //@ts-ignore
      imgUrl: user?.picture,
    });
    console.log(result);
  };

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);
  return (
    <div className="relative">
      <FloatingNavDemo />
      <div className="p-2">
        <Hero />
      </div>
      <Features />
      {/*  <CardStackDemo />
        <PricingSection />*/}

      <CTA />
      <Footer />
    </div>
  );
};

export default page;
