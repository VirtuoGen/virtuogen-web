"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Building2, SquareUser } from "lucide-react";

import { content } from "@/lib/utils";
import styles from "./landing.module.css";

export const StickyScroll = () => {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setSvgHeight(ref.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <div className="relative h-full w-full rounded-r-2xl border bg-white-card dark:bg-black-one">
      <Image
        src={"/assets/noise.png"}
        alt="noise"
        fill={true}
        sizes="100vw"
        className="absolute h-full w-full opacity-10"
      />
      <div className="absolute -left-[48px]">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="-mt-1 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-neutral-200 shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--orange-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--orange-600)",
            }}
            className="bg-white h-2 w-2 rounded-full border border-neutral-300"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight - 10} // Set the SVG height
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.5"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <ul
        ref={ref}
        className={`${styles.content} ${styles.content} z-20 scroll-smooth rounded-r-2xl`}
      >
        {content.map((value, index) => (
          <li key={index} className="relative flex flex-col">
            <div className="flex items-center space-x-2">
              <Image
                src={value.titleIconUrl}
                alt={value.title}
                width={30}
                height={30}
              />
              <h1 className="font-dmsans text-lg md:text-xl">{value.title}</h1>
            </div>
            <p className="ml-5 mt-4 text-sm md:text-base">
              {value.description}
            </p>
            <ol className="list-decimal text-sm text-orange-origin md:text-base">
              {value.points.map((list, index) => {
                const [beforeColon, afterColon] = list.split(":");
                return (
                  <li key={index}>
                    {beforeColon}:
                    <span className="text-black-one dark:text-white-origin">
                      {afterColon}
                    </span>
                  </li>
                );
              })}
            </ol>
            <div className="flex items-center space-x-3">
              <SquareUser className="h-5 w-5 text-black-one/40 dark:text-white-origin/40" />
              <h2 className="font-dmsans text-sm text-black-one/40 dark:text-white-origin/40 md:text-lg">
                {value.icon1Header}
              </h2>
            </div>
            <div className="mt-2 flex items-center space-x-3">
              <Building2 className="h-5 w-5 text-black-one/40 dark:text-white-origin/40" />
              <h2 className="font-dmsans text-sm text-black-one/40 dark:text-white-origin/40 md:text-lg">
                {value.icon2Header}
              </h2>
            </div>
            <div
              className={`absolute -bottom-6 h-0.5 w-full transform ${index !== 3 ? "border" : ""} border-dashed border-black-origin dark:border-white-origin`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
