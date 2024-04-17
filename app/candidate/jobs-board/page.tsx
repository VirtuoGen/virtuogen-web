import { companyData } from "@/lib/utils";
import JobCards from "./_components/jobCards";

const Page = () => {
  return (
    <section className="mx-auto flex w-screen max-w-[1600px] flex-col overflow-x-hidden">
      <div className="mx-6 flex items-center justify-between py-8 md:p-10">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Search for Jobs
        </h1>
      </div>

      <div className="mr-auto grid grid-cols-1 place-items-center gap-3 gap-y-4 rounded pl-8 text-[15px] md:pl-16 lg:grid-cols-2 lg:place-items-start">
        <JobCards />
      </div>
    </section>
  );
};

export default Page;
