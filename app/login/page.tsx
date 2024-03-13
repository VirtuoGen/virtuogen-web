"use client";

import Link from "next/link";

import { useMotionTemplate, motion } from "framer-motion";

import { UserButton } from "@clerk/nextjs";
import { Building2, ChevronRight, UserRoundSearch } from "lucide-react";

import Cursor from "../(landing)/_components/cursor";
import Bento from "../(landing)/_components/bento";
import { Reveal } from "../(landing)/_components/reveal";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/app/(landing)/_components/sticky-scroll-reveal";
import styles from "../(landing)/_components/landing.module.css";
import Logo from "@/components/logo";
import { LampContainer } from "./lamp";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden">
      <Reveal>
        <section className="text-black relative flex h-screen flex-col items-center justify-center space-y-8 dark:text-white-origin">
          <div className="flex flex-col whitespace-nowrap text-center text-3xl font-medium md:text-5xl">
            <div className="mb-10">
              <span className="bg-gradient-to-r from-orange-gradientStart to-orange-gradientEnd bg-clip-text pr-1 font-dmsans text-3xl font-medium  text-transparent md:text-5xl">
                VirtuoGen
              </span>
              <div className="group relative mx-auto h-3 max-w-7xl">
                <div className="h-3 w-full bg-black-one"></div>
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="link" className="bg-black-one">
                <span className="mr-2">
                  <UserRoundSearch className="h-4 w-4" />
                </span>
                Sign Up as Job Seeker
              </Button>
              <Button variant="link" className="bg-black-one">
                <span className="mr-2">
                  <Building2 className="h-4 w-4" />
                </span>
                Sign Up as Recruiter
              </Button>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
