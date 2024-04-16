import { DataTable } from "@/components/data-table";
import { columns, payments } from "./_components/column";

const Page = () => {
  return (
    <section className="mx-auto flex h-[100vh-20vh] max-h-[1100px] w-screen max-w-[1600px] flex-grow flex-col overflow-x-hidden">
      <div className="mx-6 flex items-center justify-between py-8 md:p-10">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Assignment Submissions & Results
        </h1>
      </div>
      <div className="mx-auto mb-6 h-[calc(100vh-30vh)] w-[90%] rounded-xl bg-virtuo-white-card py-6 outline dark:bg-virtuo-black-one dark:outline-none">
        <h1 className="mb-6 px-4">Candidate Status</h1>
        <DataTable columns={columns} data={payments} />
      </div>
    </section>
  );
};

export default Page;
