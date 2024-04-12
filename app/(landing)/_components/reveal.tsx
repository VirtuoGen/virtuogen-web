"use client";

import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  timer?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  timer = 0.5,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className={`${width} relative overflow-hidden`} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: timer, delay: 0.1, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
