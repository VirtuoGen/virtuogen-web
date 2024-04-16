"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Briefcase,
  Building2,
  File,
  FilePenLine,
  LayoutDashboard,
  NotebookPen,
} from "lucide-react";
import { useUser } from "@clerk/clerk-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearch } from "@/lib/store/use-search";
import { useUserType } from "@/lib/store/use-user-type";

interface NavLink {
  _id: number;
  title: string;
  icon: JSX.Element;
  href?: string;
}
// TODO to be added from db
//fake data for search
const recruiterNavLinks: NavLink[] = [
  {
    _id: 1,
    title: "Dashboard",
    icon: <LayoutDashboard className="w-8 min-w-8" />,
    href: `/dashboard`,
  },
  {
    _id: 2,
    title: "Jobs Posted",
    icon: <Briefcase className="w-8 min-w-8" />,
    href: `/jobs-posted`,
  },
  {
    _id: 3,
    title: "Shortlisted Candidates",
    icon: <Building2 className="w-8 min-w-8" />,
    href: `/shortlisted-candidates`,
  },
  {
    _id: 4,
    title: "Candidate Profiles",
    icon: <FilePenLine className="w-8 min-w-8" />,
    href: `/candidate-profiles`,
  },
];

const candidateNavLinks: NavLink[] = [
  {
    _id: 1,
    title: "Dashboard",
    icon: <LayoutDashboard className="w-8 min-w-8" />,
    href: "/dashboard",
  },
  {
    _id: 2,
    title: "Job Board",
    icon: <Briefcase className="w-8 min-w-8" />,
    href: "/jobs-board",
  },
  {
    _id: 3,
    title: "Inteview List",
    icon: <NotebookPen className="w-8 min-w-8" />,
    href: "/interview-list",
  },
];

export const SearchCommand = () => {
  const { user } = useUser();
  const router = useRouter();

  const typeOfUser = useUserType((state) => state.userType);
  //   const documents = useQuery(api.documents.getSearch);
  const [isMounted, setIsMounted] = useState(false);
  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

  const navLinks =
    typeOfUser.toLowerCase() === "recruiter"
      ? recruiterNavLinks
      : candidateNavLinks;

  //doing this to prevent hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const onSelect = (id: string) => {
    router.push(`/${typeOfUser.toLowerCase()}/${id}`);
    onClose();
  };

  if (!isMounted) return null;

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder={`Search ..`} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Documents">
          {navLinks?.map((doc) => (
            <CommandItem
              key={doc._id}
              value={`${doc.href}`}
              title={doc.title}
              onSelect={onSelect}
            >
              {doc.icon ? (
                <p className="mr-2 text-[18px]">{doc.icon}</p>
              ) : (
                <File className="mr-2 h-4 w-4" />
              )}
              <span>{doc.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
