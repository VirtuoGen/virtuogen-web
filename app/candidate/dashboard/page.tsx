import Image from "next/image";

import { cn, candidateDashboardData } from "@/lib/utils";
import { DataTable } from "@/components/data-table";
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
        <div className="col-span-4 row-span-1 row-start-1 rounded-md bg-virtuo-gray2 px-6 py-3 dark:bg-virtuo-black-one lg:col-span-1 lg:row-span-2 lg:row-start-1">
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
            <p className="font-light">UI/UX Designer</p>
          </div>
          <p className="mx-auto mt-3 rounded-lg bg-[#FFDFCB] px-2 py-2 text-center text-sm font-light text-virtuo-orange-origin">
            Experience Level : Beginner
          </p>
        </div>
        {candidateDashboardData.map((data, index) => (
          <div
            key={index}
            className={cn(
              "row-span-1 rounded-md bg-virtuo-gray2 px-6 py-3 dark:bg-virtuo-black-one",
              index > 1
                ? "col-span-2 row-start-2  lg:row-start-2"
                : "col-span-2 row-start-3  lg:row-start-1",
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
        <div className="col-span-4 row-span-1 row-start-4 rounded-md bg-virtuo-gray2 px-6 pb-3 pt-8 dark:bg-virtuo-black-one lg:col-span-1 lg:row-span-2 lg:row-start-1">
          <h1 className="text-lg">Scheduled Interview</h1>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="my-6 flex items-center" key={index}>
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
      </div>
      <div className="mx-auto my-6 h-[calc(100vh-30vh)] w-[90%] rounded-xl bg-virtuo-white-card py-6 outline dark:bg-virtuo-black-one dark:outline-none">
        <h1 className="mb-6 px-4">Company Applied</h1>
        <DataTable columns={columns} data={payments} />
      </div>
    </section>
  );
};

export default Page;
