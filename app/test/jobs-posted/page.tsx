import JobCards from "./jobCards";
import { companyData } from "@/lib/utils";

const Page = () => {
  return (
    <section className="mx-auto flex h-[100vh-20vh] max-h-[1100px] w-screen max-w-[1600px] flex-col overflow-x-hidden">
      <div className="mx-6 flex items-center justify-between py-8 md:p-10">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Jobs Listed
        </h1>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-3 gap-y-4 rounded pl-8 text-[15px] md:pl-16 lg:grid-cols-2 lg:place-items-start">
        {companyData.map((data, index) => (
          <JobCards
            key={index}
            companyImageUrl={data.companyImageUrl}
            companyName={data.companyName}
            level={data.level}
            location={data.location}
            roleType={data.roleType}
            title={data.title}
            salary={data.salary}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
