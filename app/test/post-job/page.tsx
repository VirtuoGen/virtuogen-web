import JobForm from "../_components/JobForm";

function ProfileForm() {
  return (
    <section className="mx-auto mb-10 flex h-full w-full max-w-[1600px] flex-col overflow-hidden">
      <div className="mx-6 flex items-center justify-between p-0 py-8 md:p-10">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Post a Job
        </h1>
      </div>

      <JobForm />
    </section>
  );
}

export default ProfileForm;
