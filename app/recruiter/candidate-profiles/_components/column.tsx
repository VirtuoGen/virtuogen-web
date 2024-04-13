"use client";

import Image from "next/image";
import Link from "next/link";

import { ColumnDef } from "@tanstack/react-table";

//TODO: Change to zod schema when connection to API
type Payment = {
  id: string;
  candidateName: string;
  jobtitle: string;
  field: string[];
  performance: "Good" | "Average" | "Bad";
  result: string;
};

//TODO: Get Data from API/DB
export const payments: Payment[] = [
  {
    id: "728ed52f",
    candidateName: "Michael Burrow",
    jobtitle: "Front-end Dev",
    field: ["Developer"],
    performance: "Good",
    result: "https://google.com",
  },
  {
    id: "489e1d42",
    candidateName: "Tak Kumar",
    jobtitle: "Full-stack Dev",
    field: ["Developer", "Product"],
    performance: "Average",
    result: "https://google.com",
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
    header: "Job Title",
  },
  {
    accessorKey: "field",
    header: "Field",
  },
  {
    accessorKey: "performance",
    header: "Performance",
    cell: ({ row }) => {
      return (
        <div>
          <li
            className={`${row.original.performance === "Good" ? "marker:text-green-400" : row.original.performance === "Average" ? "marker:text-yellow-400" : "marker:text-red-300"}`}
          >
            {row.original.performance}
          </li>
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: "Result",
    cell: ({ row }) => {
      return (
        <Link href={row.original.result} className="underline" target="_blank">
          Click here
        </Link>
      );
    },
  },
];
