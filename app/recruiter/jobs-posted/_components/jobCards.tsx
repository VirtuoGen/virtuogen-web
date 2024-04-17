"use client";

import Image from "next/image";
import Link from "next/link";

import { PlusIcon, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { fetchJobs } from "@/actions/recruiterJobBoard";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";

interface JobCardsProps {
  classnames?: string;
}

const JobCards = (prop: JobCardsProps) => {
  const [jobs, setJobs] = useState<any>([]);
  const { user } = useUser();

  const router = useRouter();

  // fetchJobData();
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const data = await fetchJobs(
          user?.emailAddresses[0].emailAddress as string,
        );
        console.log(data);
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
      }
    };
    if (user) {
      fetchJobData();
    }
  }, [user]);

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
            <p className="text-xl font-medium text-black">{job.jobTitle}</p>
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
          <Link href="/recruiter/jobs-posted/jobs">
            <Button
              className="bg-black text-white hover:underline dark:bg-virtuo-black-two dark:hover:bg-accent"
              size="lg"
            >
              <Zap fill="#FF802F" color="#FF802F" className="mr-2 size-4" />
              Show
            </Button>
          </Link>
        </CardContent>
      </Card>
    ))
  ) : (
    <Button
      variant="outline"
      className="flex h-1/2 items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
      onClick={() => router.replace("/recruiter/post-job")}
    >
      <PlusIcon className="size-4" />
      <span className="hidden md:block">Post a Job</span>
    </Button>
  );
};

export default JobCards;
