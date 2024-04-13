"use client";

import Image from "next/image";
import Link from "next/link";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

//TODO: Change to zod schema when connection to API
type Payment = {
  id: string;
  candidateName: string;
  jobtitle: string;
  appliedOn: string;
};

//TODO: Get Data from API/DB
export const payments: Payment[] = [
  {
    id: "728ed52f",
    candidateName: "Michael Burrow",
    jobtitle: "Front-end Dev",
    appliedOn: "10/04/2024",
  },
  {
    id: "489e1d42",
    candidateName: "Tak Kumar",
    jobtitle: "Full-stack Dev",
    appliedOn: "10/04/2024",
  },
  // ...
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "candidatename",
    header: () => <div className="">Candidate Name</div>,
    cell: ({ row }) => {
      const title = row.original.candidateName;
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
    header: "Applied for position",
  },
  { accessorKey: "appliedOn", header: "Applied On" },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center space-x-3">
          <Link href={row.original.appliedOn} target="_blank">
            <Button
              variant="outline"
              className="flex h-1/2 items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
            >
              <span className="hidden md:block">Shortlist</span>
            </Button>
          </Link>
          <Link href={row.original.appliedOn} target="_blank">
            <Button
              variant="outline"
              className="flex h-1/2 items-center justify-center space-x-1 bg-[#BC2720] px-5 py-4 transition-all duration-500 hover:bg-red-900 hover:text-virtuo-white-origin"
            >
              <span className="hidden md:block">Reject</span>
            </Button>
          </Link>
        </div>
      );
    },
  },
];
