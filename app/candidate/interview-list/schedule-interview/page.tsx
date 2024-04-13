import Image from "next/image";

import { Mails, CalendarClock, Zap, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <section className="mx-auto mb-10 flex h-full w-full max-w-[1600px] flex-col overflow-hidden">
      <div className="mx-6 flex items-center justify-between p-0 py-8 md:p-10">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Schedule Interview
        </h1>
      </div>

      <div className="px-8 md:px-16">
        <div className="mt-2 flex items-center rounded-md bg-virtuo-gray2 px-4 py-9 dark:bg-virtuo-black-one">
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
            <Mails className="size-5" />
            <span className="ml-3">Message</span>
          </Button>
        </div>
        <div className="my-10 grid w-full grid-cols-3 grid-rows-4 gap-3">
          <div className="col-span-3 row-span-4 rounded-b-md rounded-t-lg bg-virtuo-gray2 dark:bg-virtuo-black-one lg:col-span-2">
            <div className="flex items-center space-x-2 rounded-t-lg bg-[#FFE1CC] px-4 py-1 text-base font-light text-black">
              <CalendarClock color="#FF802F" width={16} height={16} />{" "}
              <p>Interview Invitation</p>{" "}
            </div>
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
          <div className="col-span-3 row-span-2 rounded-md bg-virtuo-gray2 px-6 pb-10 pt-3 dark:bg-virtuo-black-one lg:col-span-1 lg:col-start-3 lg:h-[90%]">
            <h1 className="text-base lg:text-lg">Date</h1>
            <div className="mt-3 flex space-x-3">
              <div className="size-[80px] rounded-md bg-[#FFE1CC] lg:size-[120px]"></div>
              <div className="text-xs lg:text-base">
                <h2 className="text-base font-semibold lg:text-lg">
                  First Round
                </h2>
                <p className="mt-1 lg:mt-4">Date: </p>
                <p>Time: </p>
                <p>Type: </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 row-span-1 flex justify-end space-x-3 rounded-md md:col-span-1 md:col-start-3">
            <Button
              variant="outline"
              className="flex h-[40px] items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
            >
              <Zap className="size-5" fill="white" />
              <span className="hidden md:block">Accept</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-[40px] items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
            >
              <CalendarDays className="size-5" />
              <span className="hidden md:block">Re-schedule</span>
            </Button>
          </div>

          {/* <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-1 md:col-start-3">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Page;
