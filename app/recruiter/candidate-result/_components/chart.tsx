"use client";

import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

import { Button } from "@/components/ui/button";
import { questionData } from "@/lib/utils";

const Chart = () => {
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
  const scores: any = questionData[questionIndex].scores;

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
      </div>
    </div>
  );
};

export default Chart;
