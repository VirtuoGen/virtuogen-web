"use client";

import Image from "next/image";

import { ColumnDef } from "@tanstack/react-table";

import { cn } from "@/lib/utils";

//TODO: Change to zod schema when connection to API
type Payment = {
  id: string;
  companyName: string;
  jobtitle: string;
  field: string;
  appliedOn: string;
  applicationStatus?: "Pending" | "Accepted" | "Rejected";
};

//TODO: Get Data from API/DB
export const payments: Payment[] = [
  {
    id: "728ed52f",
    companyName: "Uber",
    jobtitle: "Front-end Dev",
    field: "Developer",
    appliedOn: "10/04/2024",
    applicationStatus: "Pending",
  },
  {
    id: "489e1d42",
    companyName: "Designer Inc",
    jobtitle: "Backend Engineer",
    field: "Designer",
    appliedOn: "10/04/2024",
    applicationStatus: "Accepted",
  },
  {
    id: "971e1d42",
    companyName: "Google",
    jobtitle: "Full-stack Dev",
    field: "Developer",
    appliedOn: "10/04/2024",
    applicationStatus: "Rejected",
  },
  // ...
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "companyName",
    header: () => <div className="">Company&apos; Name</div>,
    cell: ({ row }) => {
      const title = row.original.companyName;
      return (
        <div className="flex items-center justify-center space-x-2 font-medium">
          <Image
            alt="candidate icon"
            className="h-8 w-8 rounded-full"
            src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yWGEydmx6RjVZZXJ6OWhmNVR1eXVGYnNuankifQ"
            height={32}
            width={32}
          />
          <span>{title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "jobtitle",
    header: "Job Title",
  },
  { accessorKey: "field", header: "Field" },
  { accessorKey: "appliedOn", header: "Applied On" },
  {
    accessorKey: "applicationStatus",
    header: "Application Status",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center space-x-3">
          <span
            className={cn(
              "flex h-1/2 items-center justify-center space-x-1 rounded-full px-5 py-4 text-black",
              row.original.applicationStatus === "Pending"
                ? "bg-[#FDFF9F]"
                : row.original.applicationStatus === "Accepted"
                  ? "bg-[#CAFFB0]"
                  : "bg-[#FFB5B2]",
            )}
          >
            {row.original.applicationStatus}
          </span>
        </div>
      );
    },
  },
];
