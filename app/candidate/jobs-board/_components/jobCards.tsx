"use client";

import Image from "next/image";
import Link from "next/link";

import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { fetchJobBoard } from "@/actions/candidateJobBoard";
import { Spinner } from "@/components/spinner";

interface JobCardsProps {
  classnames?: string;
}

const JobCards = (prop: JobCardsProps) => {
  const [jobs, setJobs] = useState<any>([]);
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const data = await fetchJobBoard();
        console.log(data);
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
      }
    };
    fetchJobData();
  }, []);
  return jobs.length !== 0 ? (
    jobs.map((job: any, index: any) => (
      <Card
        className={cn(
          "w-[460px] rounded-2xl bg-virtuo-gray2 dark:bg-virtuo-black-one",
          prop.classnames,
        )}
        key={index}
      >
        <CardHeader>
          <CardTitle className="flex-flex-col h-fit rounded-lg bg-[#FFE1CC] px-6 py-4 font-dmsans">
            <span className="space-x-g flex h-[10px] w-[100px] items-center justify-center rounded-lg bg-virtuo-orange-origin px-5 py-4 text-xs text-white transition-all duration-500">
              {job.employmentType}
            </span>
            <Image
              src={job.comapnyLogo}
              alt={job.companyName}
              height={200}
              width={200}
              className="ml-auto h-20 w-20 rounded-full"
            />
            <p className="text-xl font-medium text-black">{job.companyTitle}</p>
            <span className="text-lg font-normal text-black/[0.6]">
              {job.companyName}
            </span>
            <li className="space-x-0 text-base font-light text-black/[0.6]">
              <span className="relative -left-2">{job.location}</span>
            </li>
            <div className="mt-6 flex space-x-3">
              <span className="flex h-[10px] w-[100px] items-center justify-center whitespace-nowrap rounded-full bg-transparent px-5 py-4 text-xs font-light tracking-wide text-black outline outline-[1px] outline-black/[0.6] transition-all duration-500">
                {job.experienceLevel}
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <h1 className="text-2xl">{job.salaryRange}</h1>
          <Link href="/candidate/jobs-board/job-details">
            <Button
              className="bg-black text-white hover:underline dark:bg-virtuo-black-two dark:hover:bg-accent"
              size="lg"
            >
              <Zap fill="#FF802F" color="#FF802F" className="mr-2 size-4" />
              Apply
            </Button>
          </Link>
        </CardContent>
      </Card>
    ))
  ) : (
    <div>
      <Spinner />
    </div>
  );
};

export default JobCards;
