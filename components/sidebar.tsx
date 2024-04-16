"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { motion, useAnimationControls } from "framer-motion";
import {
  Briefcase,
  Building2,
  ChevronRight,
  FilePenLine,
  LayoutDashboard,
  LogOut,
  NotebookPen,
} from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

import { cn } from "@/lib/utils";
import { useUserType } from "@/lib/store/use-user-type";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      damping: 15,
      duration: 0.4,
    },
  },
  open: {
    width: "16rem",
    transition: {
      damping: 15,
      duration: 0.4,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
    transition: { duration: 0.5 },
  },
  open: {
    rotate: 180,
    transition: { duration: 0.3 },
  },
};

interface NavLink {
  name: string;
  icon: JSX.Element;
  href?: string;
}

const recruiterNavLinks: NavLink[] = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="w-8 min-w-8" />,
    href: `/recruiter/dashboard`,
  },
  {
    name: "Jobs Posted",
    icon: <Briefcase className="w-8 min-w-8" />,
    href: `/recruiter/jobs-posted`,
  },
  {
    name: "Shortlisted Profiles",
    icon: <Building2 className="w-8 min-w-8" />,
    href: `/recruiter/shortlisted-candidates`,
  },
  {
    name: "Candidate Profiles",
    icon: <FilePenLine className="w-8 min-w-8" />,
    href: `/recruiter/candidate-profiles`,
  },
];

const candidateNavLinks: NavLink[] = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="w-8 min-w-8" />,
    href: "/candidate/dashboard",
  },
  {
    name: "Job Board",
    icon: <Briefcase className="w-8 min-w-8" />,
    href: "/candidate/jobs-board",
  },
  {
    name: "Tasks",
    icon: <NotebookPen className="w-8 min-w-8" />,
    href: "/candidate/interview-list",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const typeOfUser = useUserType((state) => state.userType);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen, containerControls, svgControls]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
    return !isOpen;
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="fixed left-0 top-0 z-10 flex h-full flex-col gap-20 bg-virtuo-gray2 p-5  dark:bg-virtuo-black-one"
        id="container"
      >
        <div className="relative flex w-full flex-row place-items-center justify-between">
          <Image
            className="h-10 w-10 rounded-full"
            src={user?.imageUrl!}
            alt="user icon"
            width={40}
            height={40}
          />
          {isOpen ? (
            <p className="text-virtuo-gray dark:text-white/[0.6]">
              {isOpen && user?.firstName} <br />
              <span className="truncate text-xs">
                {isOpen && user?.primaryEmailAddress?.emailAddress}
              </span>
            </p>
          ) : (
            <></>
          )}
          {/* TODO: Add expand and collapse feature */}
          <motion.div
            onClick={handleOpenClose}
            initial="open"
            animate={isOpen ? "open" : "close"}
            variants={svgVariants}
            className="left-1/2 m-3 rounded-full bg-virtuo-gray opacity-60"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.div>
        </div>
        <div className="flex flex-col space-y-6">
          {typeOfUser === "Recruiter"
            ? recruiterNavLinks.map((value, index) => (
                <NavigationLink name={value.name} key={index} href={value.href}>
                  {value.icon}
                </NavigationLink>
              ))
            : candidateNavLinks.map((value, index) => (
                <NavigationLink name={value.name} key={index} href={value.href}>
                  {value.icon}
                </NavigationLink>
              ))}
        </div>
        <NavigationLink
          name="Log-out"
          classNames="mt-auto"
          onClick={() => signOut(() => router.push("/"))}
        >
          <LogOut className="w-8 min-w-8" />
        </NavigationLink>
      </motion.nav>
    </>
  );
};

export default Sidebar;

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  name: string;
  classNames?: string;
  href?: string;
}

const NavigationLink = ({
  children,
  name,
  classNames,
  href,
  ...rest
}: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={href || "#"}
      className={cn(
        "flex cursor-pointer place-items-center gap-3 rounded stroke-neutral-400 stroke-[0.75] p-1 text-virtuo-gray transition-colors duration-100 hover:bg-neutral-700/30 hover:stroke-virtuo-orange-origin hover:text-virtuo-orange-origin dark:text-white/[0.6]",
        classNames,
        pathname.includes(href!) &&
          "text-virtuo-orange-origin dark:text-virtuo-orange-origin",
      )}
      {...rest}
      replace
    >
      {children}
      <p
        className={`${pathname.includes(href!) ? "font-semibold text-virtuo-orange-origin" : ""} overflow-clip whitespace-nowrap font-dmsans tracking-wide text-inherit`}
      >
        {name}
      </p>
    </Link>
  );
};
