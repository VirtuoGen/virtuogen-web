"use client";

import Link from "next/link";

import { UserButton } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";

import Cursor from "./_components/cursor";
import Bento from "./_components/bento";
import { Reveal } from "./_components/reveal";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/app/(landing)/_components/sticky-scroll-reveal";
import styles from "./_components/landing.module.css";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden">
      <Cursor />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:29px_34px]" />
      <Reveal>
        <section className="text-black relative flex h-screen flex-col items-center justify-center space-y-8 dark:text-white-origin">
          <div className="flex flex-col whitespace-nowrap text-center text-3xl font-medium md:text-5xl">
            <p className="font-dmsans">
              Empowering Your Talent
              <br />
              Journey with{" "}
              <span className="font-volkhov bg-gradient-to-r from-orange-gradientStart to-orange-gradientEnd bg-clip-text pr-1 text-3xl font-medium italic text-transparent md:text-5xl">
                AI Insight
              </span>
            </p>
            <p className="pt-2 text-[10px] text-gray-600 dark:text-white-origin/50 sm:text-sm md:pt-8">
              Smarter Interviews. Better Hires: Let AI Lead the way
            </p>
          </div>
          <div className="flex space-x-5">
            <Button
              variant="outline"
              size="lg"
              className="dark:hover:bg-orange-hover rounded-full py-5 text-base transition-all duration-500 hover:bg-accent-foreground hover:text-white-origin"
            >
              Get started
            </Button>
            <Link
              href="/"
              className="flex items-center text-sm text-gray-600 hover:underline dark:text-white-origin/50"
            >
              <p>Explore More</p> <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-80">
            <div className="absolute -right-[120px] h-48 w-[300px] rounded-3xl bg-gradient-to-br from-[#817DFF]/50 to-[#817DFF]/20 bg-clip-padding shadow-xl shadow-gray-300 backdrop-blur-sm backdrop-filter dark:shadow-none md:-right-40 md:h-72 md:w-[520px]" />
            <div className="absolute -left-6 top-32 h-36 w-[200px] rounded-3xl bg-gradient-to-br from-[#817DFF]/50 to-[#817DFF]/20 bg-clip-padding shadow-xl shadow-gray-300 backdrop-blur-sm backdrop-filter dark:shadow-none md:top-48 md:h-64 md:w-[420px]" />
            <div className="absolute -top-10 right-4 h-40 w-40 rounded-full blur-[80px] dark:block dark:bg-[#FFEED5]/30 md:right-72 md:h-44 md:w-44 md:blur-[90px]" />
            <div className="absolute top-48 h-40 w-40 rounded-full blur-[80px] dark:block dark:bg-[#FFEED5]/30 md:left-[300px] md:top-56 md:h-44 md:w-44 md:blur-[90px]" />
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="mt-10 flex h-screen items-center justify-center">
          <div className="mx-auto h-[80vh] w-[90%] rounded-3xl bg-gradient-to-tr from-[#FFF5EE]/100 via-[#FFFFFF]/100 to-[#FFF5EE]/100 dark:from-[#3B3B3B]/15 dark:via-[#050505]/80 dark:to-black-one/50">
            <div className={`${styles.introduction}`}>
              <div className="relative flex h-full w-full flex-col items-center justify-start rounded-3xl bg-gradient-to-tr">
                <p className="text-black font-dmsans mt-8 text-3xl dark:text-white-origin">
                  Introducing
                </p>
                <span className="font-dmsans bg-gradient-to-r from-orange-gradientStart to-orange-gradientEnd bg-clip-text pr-1 text-2xl font-medium text-transparent sm:text-3xl md:text-5xl">
                  VirtuoGen
                </span>
                <p className="mt-10 w-1/2 text-center text-black-one dark:text-white-origin/50">
                  An AI-driven interview bot, merging cutting-edge natural
                  language processing for a groundbreaking hiring experience.
                  Our platform evaluates technical prowess, cultural fit, and
                  soft skills, elevating recruitment efficiency and
                  effectiveness
                </p>
                <div className="absolute -right-10 -top-10 hidden h-32 w-32 rounded-full bg-[#FFEED5]/30 blur-[90px] dark:block" />
                <div className="absolute -bottom-10 -left-10 hidden h-32 w-32 rounded-full bg-[#FFEED5]/30 blur-[90px] dark:block" />
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="relative mx-auto mt-10 flex h-screen w-[80%] flex-col items-center justify-center space-x-6 space-y-6 bg-transparent sm:space-x-0 md:w-full lg:w-[90%] lg:flex-row lg:space-x-20 lg:space-y-0">
          <div className="flex flex-col whitespace-nowrap text-center text-3xl font-medium md:text-5xl">
            <p className="font-dmsans">
              Your Personal
              <br />
              <span className="font-volkhov bg-gradient-to-r from-orange-gradientStart to-orange-gradientEnd bg-clip-text pr-1 text-3xl font-medium italic text-transparent md:text-5xl">
                Interview
              </span>{" "}
              Navigator
            </p>
            <p className="pt-2 text-[10px] text-gray-600 dark:text-white-origin/50 sm:text-sm md:pt-8">
              Discovering the Ultimate Beneficiary in Our Journey!
            </p>
          </div>
          <div className="h-[550px] w-full rounded-r-2xl md:w-1/2">
            <StickyScroll />
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="relative mx-auto mt-10 w-[90%] items-center justify-center space-y-6">
          <div className="flex flex-col whitespace-nowrap text-center text-3xl font-medium md:text-5xl">
            <p className="font-dmsans">
              Facilitating{" "}
              <span className="font-volkhov bg-gradient-to-r from-orange-gradientStart to-orange-gradientEnd bg-clip-text pr-1 text-3xl font-medium italic text-transparent md:text-5xl">
                Feedback,
              </span>
              <br />
              Beyond Verbal
            </p>
            <p className="pt-2 text-[10px] text-gray-600 dark:text-white-origin/50 sm:text-sm md:pt-8">
              Explore our AI Interview Solution
            </p>
          </div>
          <Bento />
        </section>
      </Reveal>
    </div>
  );
}
