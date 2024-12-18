"use client";
import { ModeToggle } from "@/components/mode-toggle";
import DrawerForMap from "@/components/sections/DrawerForMap";
import UserActions from "@/components/user-actions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [remark, setRemark] = useState("");

  const handleUserInput = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const Regions = [
    "Greater Accra",
    "Ashanti",
    "Western",
    "Central",
    "Eastern",
    "Volta",
    "Northern",
    "Upper East",
    "Upper West",
    "Bono",
    "Bono East",
    "Ahafo",
    "Oti",
    "Savannah",
    "North East",
    "Western North",
  ];

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <Link href={"/"} className="text-xl flex gap-2 font-semibold">
          <Image
            src="/logo.svg"
            alt="logo"
            className=""
            width={24}
            height={24}
          />
          <h1 className="max-sm:hidden">Bestbrain</h1>
        </Link>

        <div className="ml-auto flex gap-2 items-center">
          <ModeToggle />
          <UserActions />
        </div>
      </header>
      <div className="mx-auto w-full my-4 flex flex-col gap-4 p-2 max-w-screen-lg">
        <Card>
          <CardHeader>
            <CardTitle>School Name</CardTitle>
            <CardDescription>
              Enter the name of the school you want to register.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              onChange={(e) => handleUserInput("schoolName", e.target.value)}
              placeholder="School Name"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
            <CardDescription>
              Enter the location of the school you want to register.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Input
              onChange={(e) =>
                handleUserInput("schoolLocation", e.target.value)
              }
              placeholder="Location"
            />
            <Select>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select a Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Regions</SelectLabel>
                  {Regions.map((region) => (
                    <SelectItem
                      value={region}
                      key={region}
                      onClick={() => {
                        handleUserInput("schoolLocation", region);
                      }}
                    >
                      {region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>
              Enter the contact of the school you want to register.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="number" placeholder="Number" maxLength={10} />
          </CardContent>
          <CardHeader className="border-t">
            <CardTitle>Remarks</CardTitle>
            <CardDescription>What are the schools remarks?</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              onChange={(e) => handleUserInput("schoolRemarks", e.target.value)}
              placeholder="Remarks"
            />
          </CardContent>

          <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
