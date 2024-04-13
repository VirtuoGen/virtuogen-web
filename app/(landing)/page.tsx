"use client";

import Link from "next/link";
import Image from "next/image";

import { ChevronRight } from "lucide-react";

import Cursor from "./_components/cursor";
import Bento from "./_components/bento";
import { Reveal } from "./_components/reveal";
import styles from "./_components/landing.module.css";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "./_components/sticky-scroll-reveal";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden">
      <Cursor />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:29px_34px]" />
      <Reveal>
        <section className="relative mx-auto flex h-screen max-h-[1110px] max-w-[1600px] flex-col items-center justify-center space-y-8 text-virtuo-black-origin dark:text-virtuo-white-origin">
          <div className="flex flex-col whitespace-nowrap text-center text-3xl font-medium md:text-5xl">
            <p className="font-dmsans">
              Empowering Your Talent
              <br />
              Journey with{" "}
              <span className="bg-gradient-to-r from-virtuo-orange-gradientStart to-virtuo-orange-gradientEnd bg-clip-text pr-1 font-volkhov text-3xl font-medium italic text-transparent md:text-5xl">
                AI Insight
              </span>
            </p>
            <p className="pt-2 text-[10px] text-virtuo-gray dark:text-virtuo-white-origin/50 sm:text-sm md:pt-8">
              Smarter Interviews. Better Hires: Let AI Lead the way
            </p>
          </div>
          <div className="flex space-x-5">
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full py-5 text-base transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
              >
                Get started
              </Button>
            </Link>
            <Link
              href="/"
              className="flex items-center text-sm text-virtuo-gray hover:underline dark:text-virtuo-white-origin/50"
            >
              <p>Explore More</p> <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-80">
            <div
              className="absolute -right-[120px] h-48 w-[300px] rounded-3xl bg-gradient-to-br from-[#817DFF]/50 to-[#817DFF]/20 bg-contain bg-clip-padding bg-center bg-no-repeat shadow-xl shadow-gray-300 backdrop-blur-sm backdrop-filter dark:shadow-none md:-right-40 md:h-[400px] md:w-[520px]"
              style={{
                backgroundImage: "url('/assets/backgrounds/testimonial_1.png')",
              }}
            />
            <div
              className="absolute -left-6 top-32 h-36 w-[200px] rounded-3xl bg-gradient-to-br from-[#817DFF]/50 to-[#817DFF]/20 bg-contain  bg-clip-padding bg-top bg-no-repeat shadow-xl shadow-gray-300 backdrop-blur-sm backdrop-filter dark:shadow-none md:top-48 md:h-[300px] md:w-[380px]"
              style={{
                backgroundImage: "url('/assets/backgrounds/testimonial_1.png')",
              }}
            />
            <div className="absolute -top-10 right-4 h-40 w-40 rounded-full blur-[80px] dark:block dark:bg-[#FFEED5]/30 md:right-72 md:h-44 md:w-44 md:blur-[90px]" />
            <div className="absolute top-48 h-40 w-40 rounded-full blur-[80px] dark:block dark:bg-[#FFEED5]/30 md:left-[300px] md:top-56 md:h-44 md:w-44 md:blur-[90px]" />
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="mx-auto my-2 flex h-fit min-h-[1100px] max-w-[1600px] items-center justify-center">
          <div className="mx-auto h-[80vh] max-h-[700px] w-[90%] rounded-3xl bg-gradient-to-tr from-[#FFF5EE]/100 via-[#FFFFFF]/100 to-[#FFF5EE]/100 dark:from-[#3B3B3B]/15 dark:via-[#050505]/80 dark:to-virtuo-black-one/50">
            <div className={`${styles.introduction}`}>
              <div className="relative flex size-full flex-col items-center justify-start rounded-3xl bg-gradient-to-tr">
                <p className="mt-8 font-dmsans text-3xl text-virtuo-black-origin dark:text-virtuo-white-origin">
                  Introducing
                </p>
                <span className="bg-gradient-to-r from-virtuo-orange-gradientStart to-virtuo-orange-gradientEnd bg-clip-text pr-1 font-dmsans text-2xl font-medium text-transparent sm:text-3xl md:text-5xl">
                  VirtuoGen
                </span>
                <p className="mt-10 w-1/2 text-center text-sm text-virtuo-black-one dark:text-virtuo-white-origin/50 md:text-base">
                  An AI-driven interview bot, merging cutting-edge natural
                  language processing for a groundbreaking hiring experience.
                  Our platform evaluates technical prowess, cultural fit, and
                  soft skills, elevating recruitment efficiency and
                  effectiveness
                </p>
                <div className="absolute -right-10 -top-10 hidden size-32 rounded-full bg-[#FFEED5]/30 blur-[90px] dark:block" />
                <div className="absolute -bottom-10 -left-10 hidden size-32 rounded-full bg-[#FFEED5]/30 blur-[90px] dark:block" />
                <div className="relative size-[500px] md:size-[700px]">
                  <Image
                    src="/assets/backgrounds/product_look.png"
                    alt="testimonial"
                    width={500}
                    height={500}
                    className="absolute -top-[100px] size-[500px] md:w-[700px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="relative mx-auto mb-40 mt-2 flex h-fit w-[80%] max-w-[1600px] flex-col items-center justify-center space-x-6 space-y-6 bg-transparent sm:space-x-0 md:w-full lg:w-[90%] lg:flex-row lg:space-x-20 lg:space-y-0">
          <div className="flex flex-col whitespace-nowrap text-center text-3xl font-medium md:text-5xl">
            <p className="font-dmsans">
              Your Personal
              <br />
              <span className="bg-gradient-to-r from-virtuo-orange-gradientStart to-virtuo-orange-gradientEnd bg-clip-text pr-1 font-volkhov text-3xl font-medium italic text-transparent md:text-5xl">
                Interview
              </span>{" "}
              Navigator
            </p>
            <p className="pt-2 text-[10px] text-virtuo-gray dark:text-virtuo-white-origin/50 sm:text-sm md:pt-8">
              Discovering the Ultimate Beneficiary in Our Journey!
            </p>
          </div>
          <div className="h-[550px] w-full rounded-r-2xl md:w-1/2">
            <StickyScroll />
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="relative mx-auto mb-40 w-[90%] max-w-[1600px] items-center justify-center space-y-6">
          <div className="flex flex-col whitespace-nowrap text-center text-3xl font-medium md:text-5xl">
            <p className="font-dmsans">
              Facilitating{" "}
              <span className="bg-gradient-to-r from-virtuo-orange-gradientStart to-virtuo-orange-gradientEnd bg-clip-text pr-1 font-volkhov text-3xl font-medium italic text-transparent md:text-5xl">
                Feedback,
              </span>
              <br />
              Beyond Verbal
            </p>
            <p className="pt-2 text-[10px] text-virtuo-gray dark:text-virtuo-white-origin/50 sm:text-sm md:pt-8">
              Explore our AI Interview Solution
            </p>
          </div>
          <Bento />
        </section>
      </Reveal>
    </div>
  );
}
