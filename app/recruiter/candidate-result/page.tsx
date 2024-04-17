"use client";
import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  Cake,
  CircleX,
  Mail,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { questionData } from "@/lib/utils";

const Page = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  let backgroundColor = ["#56C021", "#FF802F", "#0068FE"];
  let borderColor = ["#56C021", "#FF802F", "#0068FE"];

  // Define the additional colors you want to add
  const additionalColors = [
    "#8A2BE2", // Purple
    "#DAA520", // Goldenrod
    "#FF69B4", // Hot Pink
    "#7FFF00", // Chartreuse
    "#DC143C", // Crimson
    "#00CED1", // Dark Turquoise
    "#FFD700", // Gold
    "#ADFF2F", // Green Yellow
    "#00FA9A", // Medium Spring Green
    "#FF6347", // Tomato
    "#800000", // Maroon
    "#4682B4", // Steel Blue
    "#C71585", // Medium Violet Red
    "#00008B", // Dark Blue
  ];

  // Add the additional colors to both arrays
  backgroundColor = backgroundColor.concat(additionalColors);
  borderColor = borderColor.concat(additionalColors);
  const scores:any = questionData[questionIndex].scores;

  // Get the keys of the scores object
  const keys = Object.keys(questionData[questionIndex].scores);

  // Capitalize the keys and replace underscores with spaces
  const capitalizedKeys = keys.map((key) => {
    // Replace underscores with spaces
    let formattedKey = key.replace(/_/g, " ");

    // Capitalize the first letter of each word in the key
    formattedKey = formattedKey
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedKey;
  });

  let list = [];
  for (const key in questionData[questionIndex].scores) {
    if (scores.hasOwnProperty(key)) {
      // Format the key and value as a string and add it to the list
      let formattedKey = key
        .replace(/_/g, " ")
        .replace(/\b\w/g, (match) => match.toUpperCase());
      list.push(`${formattedKey}: ${scores[key]}`);
    }
  }

  const convertString = (str: string) => {
    str.replace(/_/g, "");

    let formattedStr = str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return formattedStr;
  };

  const data = {
    labels: capitalizedKeys,
    datasets: [
      {
        data: Object.values(questionData[questionIndex].scores),
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="mx-auto flex h-[100vh-20vh] max-h-[1100px] w-screen max-w-[1600px] flex-col overflow-x-hidden">
      <div className="mx-6 flex items-center justify-between py-8 md:px-6 md:py-4">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Result Analysis
        </h1>
      </div>

      <div className="grid h-fit w-full grid-cols-3 grid-rows-3 gap-3 rounded px-8 text-[15px] md:grid-rows-8 md:px-10">
        <div className="col-span-3 row-span-1 flex flex-col rounded-md bg-virtuo-gray2 px-6 pb-10 pt-3 dark:bg-virtuo-black-one md:col-span-1 md:row-span-4 md:row-start-1">
          <h1 className="text-lg">Profile</h1>
          <Image
            src="/assets/backgrounds/test_candidate.png"
            alt="candidate"
            height={150}
            width={150}
            className="mx-auto mt-4 size-[100px] rounded-full"
          />
          <div className="mx-auto mt-3 text-center text-base">
            <p className="font-medium">Michael Burrow</p>
            <p className="font-light">Candidate ID: 19978</p>
            <p className="font-light">Role: Frontend Development</p>
          </div>
          <p className="mx-auto mt-3 rounded-lg bg-[#FFDFCB] px-2 py-2 text-center text-sm font-light text-virtuo-orange-origin">
            Experience Level : Fresher
          </p>
        </div>

        <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-2 md:row-span-8 md:row-start-1">
          <h1 className="text-lg">Analysis</h1>
          <div className="flex h-fit w-full items-start">
            <div className="mt-3 flex w-3/5 flex-col">
              <div className="flex flex-col gap-3">
                <div>
                  <h1 className="text-lg font-semibold text-virtuo-orange-origin">
                    Question 1
                  </h1>
                  <p className="text-virtuo-gray-origin text-sm">
                    {questionData[questionIndex].question}
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-virtuo-orange-origin">
                    Response:
                  </h1>
                  <p className="text-virtuo-gray-origin text-sm">
                    {questionData[questionIndex].response}
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-virtuo-orange-origin">
                    Scores:
                  </h1>
                  <p className="text-virtuo-gray-origin text-sm grid grid-cols-2 gap-2">
                    {
                      list.map((item, index) => (
                        <div key={index}>{item}</div>
                      ))
                    }
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-virtuo-orange-origin">
                    Total Score:
                  </h1>
                  <p className="text-virtuo-gray-origin text-sm">
                    {questionData[questionIndex].total_score}
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-virtuo-orange-origin">
                    Overall Grade:
                  </h1>
                  <p className="text-virtuo-gray-origin text-sm">
                    {questionData[questionIndex].overall_grade}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-fit w-3/5 flex-col items-center justify-evenly">
              <Doughnut
                data={data}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "left",
                      labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        color: "white",
                      },
                    },
                    title: {
                      display: true,
                      text: "Result Analysis",
                    },
                  },
                }}
              />
              <div className="mt-3 flex justify-end space-x-4">
                {questionIndex !== 0 && (
                  <Button
                    variant="outline"
                    className="flex h-[40px] items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
                    onClick={() => {
                      setQuestionIndex(questionIndex - 1);
                    }}
                  >
                    <ArrowLeft className="size-5" fill="white" />
                    <span>Previous</span>
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="flex h-[40px] items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
                  onClick={() => {
                    setQuestionIndex(questionIndex + 1);
                  }}
                  disabled={questionData.length === questionIndex + 1}
                >
                  <ArrowRight className="size-5" fill="white" />
                  <span>Next</span>
                </Button>
                {/* <Button
                  variant="outline"
                  className="flex h-[40px] items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
                >
                  <CircleX className="size-5" />
                  <span>Reject</span>
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-1 md:row-span-3 md:row-start-5">
          <h1 className="text-lg">Contact</h1>
          <div className="mt-4 flex w-[80%] flex-col space-y-4">
            <div className="flex justify-start space-x-3">
              <Mail className="size-5" />
              <span>xyzaugust90@gmail.com</span>
            </div>
            <div className="flex justify-start space-x-3">
              <Phone className="size-5" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex justify-start space-x-3">
              <Cake className="size-5" />
              <span>18/02/2003</span>
            </div>
            <div className="flex justify-start space-x-3">
              <MapPin className="size-5" />
              <span>Kolkata, West Bengal, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
