"use client";
import { DataTableColumnHeader } from "@/app/dataTable/columns";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, School, Trash, Trash2Icon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type SCHOOL = {
  createdBy: string;
  schoolName: string;
  schoolLocation: string;
  schoolRegion: string;
  schoolContact: string;
  schoolRemarks: string;
};

export const DataTableColumnsMarketing: ColumnDef<SCHOOL>[] = [
  {
    accessorKey: "schoolName",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader className="" column={column} title="Name" />
      );
    },
  },
  {
    // id: "status",
    accessorKey: "schoolLocation",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader className="" column={column} title="School" />
      );
    },
  },
  {
    accessorKey: "schoolRegion",
    header: ({ column }) => {
      return <p className="text-xs">Region</p>;
    },
  },
  {
    accessorKey: "schoolContact",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader className="" column={column} title="Contact" />
      );
    },
  },
  {
    accessorKey: "schoolRemarks",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader className="" column={column} title="Remarks" />
      );
    },
  },
  {
    accessorKey: "createdBy",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader className="" column={column} title="Marketer" />
      );
    },
  },
];
