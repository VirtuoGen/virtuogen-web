"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { useMotionValue } from "framer-motion";

import { CardPattern, generateRandomString } from "./CardPattern";
import { bento } from "@/lib/utils";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.05 * index,
      ease: "easeIn",
    },
  }),
};

const highlightWords = (
  text: string,
  wordsToHighlight?: string[],
  additionalStyles?: React.CSSProperties,
) => {
  if (wordsToHighlight) {
    const pattern = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");
    return text.split(pattern).map((word, index) => {
      if (wordsToHighlight.includes(word.toLowerCase())) {
        return (
          <span
            key={index}
            style={{ color: "#E87B35", ...(additionalStyles || {}) }}
            className="hover:cursor-pointer"
          >
            {word}
          </span>
        );
      }
      return word;
    });
  }
  return text;
};

const Bento = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div className="grid grid-cols-12 gap-4 overflow-hidden pb-10">
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={1}
        className="relative col-span-12 flex items-end rounded-2xl border bg-cover pb-4 pr-4 lg:col-span-6"
        style={{ backgroundImage: `url('${bento[0].imageUrl}')` }}
      >
        <div className="flex w-full flex-col space-y-4 rounded-r-xl bg-virtuo-white-origin/80 p-4 text-virtuo-black-origin">
          <h3 className="flex items-center font-dmsans text-xs font-bold text-virtuo-orange-origin">
            <Image
              src={bento[0].icon}
              alt={bento[0].subHeader}
              height={18}
              width={18}
              className="mr-2"
            />
            {bento[0].subHeader}
          </h3>
          <h1 className="font-dmsans text-xl font-semibold">
            {bento[0].mainHeader}
          </h1>
          <p className="text-start text-virtuo-black-origin/90">
            {highlightWords(
              bento[0].description,
              bento[0].wordsToHighlight?.map((word) => word.toLowerCase()),
            )}
          </p>
        </div>
      </motion.div>
      <div className="col-span-12 grid gap-4 lg:col-span-6">
        {bento.map(
          (value, index) =>
            index !== Number(0) &&
            index !== Number(5) &&
            index !== Number(6) && (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                key={index}
                className={`col-span-12 lg:col-span-1 ${index === 1 || index === 3 ? "col-start-1" : "col-span-1 lg:col-start-2"} relative flex flex-col space-y-4 rounded-2xl border bg-virtuo-white-card bg-cover p-4 text-virtuo-black-one dark:bg-virtuo-black-one dark:text-virtuo-white-origin`}
              >
                <Image
                  src={"/assets/backgrounds/noise.png"}
                  alt="noise"
                  fill={true}
                  sizes="100vw"
                  className="absolute h-full w-full opacity-10"
                />
                <h3 className="z-10 flex items-center font-dmsans text-xs font-bold text-virtuo-orange-origin">
                  <Image
                    src={value.icon}
                    alt={value.subHeader}
                    height={18}
                    width={18}
                    className="mr-2"
                  />
                  {value.subHeader}
                </h3>
                <h1 className="z-10 font-dmsans text-xl font-semibold">
                  {value.mainHeader}
                </h1>
                <p className="z-10 text-start text-virtuo-black-one dark:text-virtuo-white-origin/65">
                  {highlightWords(
                    value.description,
                    value.wordsToHighlight?.map((word) => word.toLowerCase()),
                    value.additionalStyles,
                  )}
                </p>
                <Image
                  src={value.imageUrl}
                  alt={value.subHeader}
                  width={200}
                  height={200}
                  className="mx-auto h-[10vh] w-full"
                />
              </motion.div>
            ),
        )}
      </div>
      <motion.div
        className="relative col-span-12 rounded-2xl border bg-virtuo-white-card p-4 dark:bg-virtuo-black-one lg:col-span-8"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={5}
      >
        <Image
          src={"/assets/backgrounds/noise.png"}
          alt="noise"
          fill={true}
          sizes="100vw"
          className="absolute h-full w-full opacity-10"
        />
        <div className="flex flex-col space-y-4">
          <h3 className="z-10 mt-4 flex items-center font-dmsans text-xs font-bold text-virtuo-orange-origin">
            <Image
              src={bento[5].icon}
              alt={bento[5].subHeader}
              height={18}
              width={18}
              className="mr-2"
            />
            {bento[5].subHeader}
          </h3>
          <h1 className="z-10 font-dmsans text-xl font-semibold">
            {bento[5].mainHeader}
          </h1>
          <p className="z-10 text-start text-virtuo-black-one dark:text-virtuo-white-origin/65">
            {highlightWords(
              bento[5].description,
              bento[5].wordsToHighlight?.map((word) => word.toLowerCase()),
            )}
          </p>
          <div className="group/card relative flex h-[200px] w-full items-center justify-center lg:h-[300px]">
            <Image
              src={bento[5].imageUrl}
              alt="hi"
              width={900}
              height={900}
              className="z-40 mx-auto h-[80%] w-[80%] transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="relative col-span-12 rounded-2xl border bg-virtuo-white-card p-4 dark:bg-virtuo-black-one lg:col-span-4"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={6}
      >
        <Image
          src={"/assets/backgrounds/noise.png"}
          alt="noise"
          fill={true}
          sizes="100vw"
          className="absolute h-full w-full opacity-10"
        />

        <div className="flex flex-col space-y-4">
          <h3 className="z-10 mt-4 flex items-center font-dmsans text-xs font-bold text-virtuo-orange-origin">
            <Image
              src={bento[6].icon}
              alt={bento[6].subHeader}
              height={18}
              width={18}
              className="mr-2"
            />
            {bento[6].subHeader}
          </h3>
          <h1 className="z-10 font-dmsans text-xl font-semibold">
            {bento[6].mainHeader}
          </h1>
          <p className="z-10 text-start text-virtuo-black-one dark:text-virtuo-white-origin/65">
            {highlightWords(
              bento[6].description,
              bento[6].wordsToHighlight?.map((word) => word.toLowerCase()),
            )}
          </p>
          <div
            className="group/card relative flex h-[200px] w-full items-center justify-center lg:h-[300px]"
            onMouseMove={onMouseMove}
          >
            <CardPattern
              mouseX={mouseX}
              mouseY={mouseY}
              randomString={randomString}
            />
            <Image
              src={bento[6].imageUrl}
              alt="hi"
              width={200}
              height={200}
              className="z-40 mx-auto h-[80%] w-[80%] transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Bento;
