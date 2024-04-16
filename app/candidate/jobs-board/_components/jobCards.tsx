import Image from "next/image";
import Link from "next/link";

import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface JobCardsProps {
  classnames?: string;
  title: string;
  companyImageUrl: string;
  companyName: string;
  location: string;
  salary: string;
  level: string;
  roleType: string;
}

const JobCards = (prop: JobCardsProps) => {
  return (
    <Card
      className={cn(
        "w-[460px] rounded-2xl bg-virtuo-gray2 dark:bg-virtuo-black-one",
        prop.classnames,
      )}
    >
      <CardHeader>
        <CardTitle className="flex-flex-col h-fit rounded-lg bg-[#FFE1CC] px-6 py-4 font-dmsans">
          <span className="space-x-g flex h-[10px] w-[100px] items-center justify-center rounded-lg bg-virtuo-orange-origin px-5 py-4 text-xs text-white transition-all duration-500">
            {prop.roleType}
          </span>
          <Image
            src={`/assets/companyLogos${prop.companyImageUrl}`}
            alt={prop.companyName}
            height={200}
            width={200}
            className="ml-auto h-20 w-20 rounded-full"
          />
          <p className="text-xl font-medium text-black">{prop.title}</p>
          <span className="text-lg font-normal text-black/[0.6]">
            {prop.companyName}
          </span>
          <li className="space-x-0 text-base font-light text-black/[0.6]">
            <span className="relative -left-2">{prop.location}</span>
          </li>
          <div className="mt-6 flex space-x-3">
            <span className="flex h-[10px] w-[100px] items-center justify-center whitespace-nowrap rounded-full bg-transparent px-5 py-4 text-xs font-light tracking-wide text-black outline outline-[1px] outline-black/[0.6] transition-all duration-500">
              {prop.level}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <h1 className="text-2xl">{prop.salary}</h1>
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
  );
};

export default JobCards;
