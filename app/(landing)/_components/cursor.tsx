"use client";

import { useEffect } from "react";

import styles from "./landing.module.css";

const animation = () => {
  const blob = document.getElementById("blob");

  window.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob!.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 5000, fill: "forwards" },
    );
  };
};

export const Cursor = () => {
  useEffect(() => {
    animation();
  });

  return (
    <div
      className={`${styles.blob} dark:bg-virtuo-white-origin bg-virtuo-orange-origin fixed -left-1/2 -top-1/2 h-[10vmax] blur-2xl dark:h-[7vmax] dark:blur-3xl`}
      id="blob"
    />
  );
};

export default Cursor;
