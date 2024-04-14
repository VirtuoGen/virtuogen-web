"use client";

import { Bell, PlusIcon, Search } from "lucide-react";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/lib/store/use-search";
import { useUserType } from "@/lib/store/use-user-type";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const search = useSearch();
  const typeOfUser = useUserType((state) => state.userType);

  return (
    <header className="ml-20 flex justify-between px-6 py-5 ">
      <Logo classname="flex" />
      <div className="flex items-center space-x-3 ">
        <Button
          variant="outline"
          className="bg-virtuo-white-card/ group flex max-h-[34px] items-center justify-start space-x-4 rounded-md py-1 pl-3 pr-3 text-sm font-medium text-muted-foreground hover:bg-primary/5 dark:bg-virtuo-black-one md:w-[200px]"
          onClick={search.onOpen}
        >
          <Search className="size-4 fill-virtuo-white-origin" />
          <span className="hidden truncate md:block">Search</span>
        </Button>
        {typeOfUser === "Recruiter" && (
          <Button
            variant="outline"
            className="flex h-1/2 items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
            onClick={() => router.replace("/recruiter/post-job")}
          >
            <PlusIcon className="size-4" />
            <span className="hidden md:block">Post a Job</span>
          </Button>
        )}
        <Bell className="size-4 fill-virtuo-white-origin md:size-5" />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
