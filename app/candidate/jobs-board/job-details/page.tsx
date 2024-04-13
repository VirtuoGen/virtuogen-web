import Image from "next/image";

import {
  Banknote,
  Briefcase,
  CalendarDays,
  Clock,
  Hash,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <section className="mx-auto mb-10 flex h-full w-full max-w-[1600px] flex-col overflow-hidden">
      <div className="mx-6 flex items-center justify-between p-0 py-8 md:p-10">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Details for Jobs
        </h1>
      </div>

      <div className="px-8 md:px-16">
        <div className="mt-2 flex items-center">
          <Image
            src="/assets/backgrounds/test_candidate_work.png"
            alt="candidate education"
            width={50}
            height={50}
            className="size-12"
          />
          <div className="ml-3">
            <h1>UI/UX Designer</h1>
            <li>Arlington, VA, USA</li>
          </div>
          <Button
            variant="outline"
            className="ml-auto flex h-1/2 items-center justify-center space-x-1 px-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
          >
            <Zap className="size-5" />
            <span className="ml-3">Apply</span>
          </Button>
        </div>
        <Separator className="my-10" />
        <div className="flex justify-between px-10 text-virtuo-gray dark:text-white/[0.6]">
          {[
            {
              icon: <Banknote className="size-5" />,
              label: "Stipend per month",
              value: "Rs. 25,000",
            },
            {
              icon: <Briefcase className="size-5" />,
              label: "Mode",
              value: "Remote",
            },
            {
              icon: <Clock className="size-5" />,
              label: "Qualifications",
              value: "0-3 years",
            },
            {
              icon: <CalendarDays className="size-5" />,
              label: "Start Date",
              value: "Immediate",
            },
            {
              icon: <Hash className="size-5" />,
              label: "Openings",
              value: "2",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center space-x-2">
                {item.icon}
                <p>{item.label}</p>
              </div>
              <span className="text-black dark:text-white">{item.value}</span>
            </div>
          ))}
        </div>
        <Separator className="my-10" />
        <div className="grid w-full grid-cols-3 grid-rows-4 gap-3 ">
          <div className="col-span-3 row-span-4 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-2">
            <h1 className="text-lg">About</h1>
            <div className="px-6 pt-4 text-virtuo-gray dark:text-white/[0.6]">
              <p>
                We are seeking a talented and creative Visual Design intern with
                a passion for UI & UX design, video making, Adobe After Effects,
                and Figma to join our team at Boni! This is an exciting
                opportunity to gain hands-on experience in a fast-paced and
                dynamic environment.
              </p>
              <br />
              <span>
                Selected intern&apos;s day-to-day responsibilities include:
              </span>
              <br />
              <ol className="my-8 list-decimal">
                <li>
                  Collaborate with our design team to create visually stunning
                  and user-friendly interfaces for our digital products
                </li>
                <li>
                  Assist in the development and implementation of design
                  concepts, wireframes, and mockups
                </li>
                <li>
                  Create engaging and informative videos using Adobe After
                  Effects to promote our products and services
                </li>
                <li>
                  Contribute to the user research process by assisting in
                  conducting usability testing and gathering user feedback
                </li>
                <li>
                  {" "}
                  Work closely with developers to ensure the successful
                  implementation of design elements and maintain design
                  consistency throughout the product
                </li>
                <li>
                  Stay up-to-date with industry trends and best practices and
                  provide recommendations to improve our design processes
                </li>
              </ol>
            </div>
          </div>
          <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-1 md:col-start-3">
            <h1 className="text-lg">Skills - Mandatory</h1>
            <div className="mt-3">
              <span className="mx-auto mt-3 rounded-full bg-[#FFDFCB] px-2 py-2 text-center text-sm font-light text-virtuo-orange-origin">
                Product Designer
              </span>
            </div>
          </div>
          <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-1 md:col-start-3">
            <h1 className="text-lg">Extra Benefits</h1>
            <div className="mt-3">
              <span className="mx-auto mt-3 whitespace-nowrap rounded-full bg-[#FFDFCB] px-2 py-2 text-center text-sm font-light text-virtuo-orange-origin">
                Letter of Recommendation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
