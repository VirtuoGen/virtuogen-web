const Page = () => {
  return (
    <section className="mx-auto flex h-[100vh-20vh] max-h-[1100px] w-screen max-w-[1600px] flex-col overflow-x-hidden">
      <div className="mx-6 flex items-center justify-between py-8 md:p-10">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Dashboard
        </h1>
      </div>

      <div className="grid h-[60vh] w-full grid-rows-4 gap-3 rounded px-8 text-[15px] md:grid-rows-2 md:px-16">
        <div className="row-span-1 row-start-1 rounded-md bg-virtuo-gray2 dark:bg-virtuo-black-one">
          01
        </div>
        <div className="row-span-1 row-start-1 rounded-md bg-virtuo-gray2 dark:bg-virtuo-black-one">
          02
        </div>
        <div className="row-span-1 row-start-2 rounded-md bg-virtuo-gray2 dark:bg-virtuo-black-one">
          03
        </div>
        <div className="row-span-1 row-start-2 rounded-md bg-virtuo-gray2 dark:bg-virtuo-black-one">
          04
        </div>
        <div className="col-span-2 row-span-3 row-start-4 rounded-md bg-virtuo-gray2 dark:bg-virtuo-black-one md:col-span-1 md:row-span-2 md:row-start-1">
          05
        </div>
        <div className="col-span-2 row-span-1 row-start-3 rounded-md bg-virtuo-gray2 dark:bg-virtuo-black-one md:col-span-1 md:row-span-2 md:row-start-1">
          06
        </div>
      </div>
    </section>
  );
};

export default Page;
