"use client";

import Image from "next/image";
import Link from "next/link";

import { ColumnDef } from "@tanstack/react-table";
import { Mails } from "lucide-react";

import { Button } from "@/components/ui/button";

//TODO: Change to zod schema when connection to API
type Payment = {
  id: string;
  candidateName: string;
  jobtitle: string;
  mail: string;
};

//TODO: Get Data from API/DB
export const payments: Payment[] = [
  {
    id: "728ed52f",
    candidateName: "Michael Burrow",
    jobtitle: "Front-end Dev",
    mail: "mailto:xyz@yourapplicationdomain.com",
  },
  {
    id: "489e1d42",
    candidateName: "Tak Kumar",
    jobtitle: "Full-stack Dev",
    mail: "mailto:xyz@yourapplicationdomain.com",
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
    accessorKey: "mail",
    header: "Mail",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center space-x-3">
          <Link href={row.original.mail} target="_blank">
            <Button
              variant="outline"
              className="flex h-1/2 items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
            >
              <span className="hidden md:block">Schedule an interview</span>
            </Button>
          </Link>
          <Link href={row.original.mail} target="_blank">
            <Button
              variant="outline"
              className="flex h-1/2 items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
            >
              <Mails className="size-4" />
              <span className="hidden md:block">Message</span>
            </Button>
          </Link>
        </div>
      );
    },
  },
];
