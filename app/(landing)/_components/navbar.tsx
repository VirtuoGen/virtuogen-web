"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useAuth } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn, navLinks } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Logo from "@/components/logo";

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.59,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const Navbar = ({ requireLogin = true }: { requireLogin?: boolean }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [open, setOpen] = useState(false);

  const scrolled = useScrollTop();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex w-full items-center px-6 py-3",
        scrolled && "border-b bg-white-origin shadow-sm dark:bg-[#040404]",
      )}
      ref={menuRef}
    >
      <Link href="/">
        <Logo classname="mr-16 hidden" />
      </Link>
      <button
        className="block text-2xl text-gray-950 dark:text-white-origin md:hidden"
        tabIndex={0}
        style={{ transform: "none" }}
        onClick={() => setOpen((p) => !p)}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div className="hidden space-x-6 whitespace-nowrap text-lg md:flex">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            className="transition-all duration-300 hover:scale-105 hover:text-orange-origin"
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 right-0 top-full flex origin-top flex-col gap-4 bg-white-origin p-4 shadow-lg"
            variants={menuVars}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            <motion.div
              className="flex h-full flex-col items-start gap-2 overflow-hidden text-lg font-medium"
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
            >
              {navLinks.map((link, index) => {
                return (
                  <MobileNavLink
                    key={index}
                    title={link.title}
                    href={link.href}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex w-full items-center  justify-end gap-x-2 md:ml-auto">
        {!isLoaded && <Spinner />}
        {!userId && requireLogin && (
          <>
            <SignInButton mode="modal">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base transition-all duration-500 hover:bg-accent-foreground hover:text-white-origin dark:bg-secondary dark:hover:bg-orange-hover"
              >
                Log in
              </Button>
            </SignInButton>
          </>
        )}
        {userId && isLoaded && requireLogin && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Dashboard</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

const mobileLinkVars = {
  initial: {
    y: "20px",
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-base uppercase text-black-origin"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
