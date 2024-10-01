import Hero from "@/components/sections/Hero";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { Features } from "@/components/ui/custom-components/aceternity/Bento-grid";
import { FloatingNavDemo } from "@/components/ui/custom-components/aceternity/Navbar";
import { TextHoverEffect } from "@/components/ui/custom-components/aceternity/TextHoverEffect";
import { Input } from "@/components/ui/input";
import { MapPin, School } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <FloatingNavDemo />
      <Hero />
      <Features />
    </div>
  );
};

export default page;
