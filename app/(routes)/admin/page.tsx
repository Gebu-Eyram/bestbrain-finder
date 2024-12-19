"use client";
import { DataTable } from "@/app/dataTable/data-table";
import { DataTableColumnsMarketing, SCHOOL } from "@/app/dataTable/definitions";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React, { useEffect } from "react";

const Admin = () => {
  const schoolsList = useQuery(api.schools.GetSchools, {});

  const [schools, setSchools] = React.useState<SCHOOL[]>([]);

  useEffect(() => {
    if (schoolsList) {
      setSchools(schoolsList);
    }
  }, [schoolsList]);
  return (
    <div className="px-2 p-4">
      <div className="max-w-screen-xl mx-auto">
        <DataTable data={schools} columns={DataTableColumnsMarketing} />
      </div>
    </div>
  );
};

export default Admin;
