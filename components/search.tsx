"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { File } from "lucide-react";
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

// TODO to be added from db
//fake data for search
const data = [
  {
    _id: 1,
    title: "test 1",
    icon: "null",
  },
  {
    _id: 2,
    title: "test 2",
  },
  {
    _id: 3,
    title: "test 3",
  },
];

export const SearchCommand = () => {
  const { user } = useUser();
  const router = useRouter();
  //   const documents = useQuery(api.documents.getSearch);
  const [isMounted, setIsMounted] = useState(false);

  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

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
    router.push(`/documents/${id}`);
    onClose();
  };

  if (!isMounted) return null;

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder={`Search ..`} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Documents">
          {data?.map((doc) => (
            <CommandItem
              key={doc._id}
              value={`${doc._id}-${doc.title}`}
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
