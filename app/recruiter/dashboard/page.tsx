import Image from "next/image";

import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn, dashboardData } from "@/lib/utils";
import { DataTable } from "./_components/data-table";
import { columns, payments } from "./_components/column";

const Page = () => {
  return (
    <section className="mx-auto flex h-full w-screen max-w-[1600px] flex-col overflow-x-hidden">
      <div className="mx-6 flex items-center justify-between py-8 md:p-10">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Dashboard
        </h1>
      </div>

      <div className="grid h-full w-full grid-rows-4 gap-3 rounded px-8 text-[15px] lg:grid-rows-2 lg:px-16">
        {dashboardData.map((data, index) => (
          <div
            key={index}
            className={cn(
              "row-span-1 rounded-md bg-virtuo-gray2 px-6 py-3 dark:bg-virtuo-black-one",
              index > 1 ? "row-start-2" : "row-start-1",
            )}
          >
            <Image
              src={`/assets/icons/${data.icon}.svg`}
              alt={data.title}
              width={100}
              height={100}
              className="ml-auto size-5 rounded-sm"
            />
            <h1 className="text-lg ">{data.title}</h1>
            <p className="my-6 text-3xl">{data.value}</p>
            <p>{data.label}</p>
          </div>
        ))}
        <div className="col-span-2 row-span-3 row-start-4 rounded-md bg-virtuo-gray2 px-6 py-3 dark:bg-virtuo-black-one lg:col-span-1 lg:row-span-2 lg:row-start-1">
          <div className="flex justify-between">
            <h1 className="text-lg">Today&apos; Interview</h1>
            <Button
              variant="outline"
              className="flex items-center justify-center space-x-1 bg-virtuo-orange-origin/[0.3] px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover/[0.2]"
            >
              <PlusIcon className="size-4" />
              <span className="hidden md:block">Add an Interview</span>
            </Button>
          </div>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="my-4 flex items-center" key={index}>
              <Image
                src="/assets/backgrounds/test_candidate.png"
                alt="candidate education"
                width={50}
                height={50}
                className="size-12"
              />
              <div className="ml-3">
                <h1>UI/UX Designer</h1>
                <li>Arlington, VA, USA</li>
              </div>
              <Image
                src={`/assets/icons/dashboard_date.svg`}
                alt="Date"
                width={100}
                height={100}
                className="ml-auto size-8 rounded-sm"
              />
            </div>
          ))}
        </div>
        <div className="col-span-2 row-span-1 row-start-3 rounded-md bg-virtuo-gray2 px-6 py-3 dark:bg-virtuo-black-one lg:col-span-1 lg:row-span-2 lg:row-start-1">
          06
        </div>
      </div>
      <div className="mx-auto my-6 h-[calc(100vh-30vh)] w-[90%] rounded-xl bg-virtuo-white-card py-6 outline dark:bg-virtuo-black-one dark:outline-none">
        <h1 className="mb-6 px-4">Candidate Status</h1>
        <DataTable columns={columns} data={payments} />
      </div>
    </section>
  );
};

export default Page;
