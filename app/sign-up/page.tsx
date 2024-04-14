"use client";

import SignUpForm from "./_components/signUpForm";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden pb-10">
      <section className="relative mx-auto flex h-[calc(100vh-10vh)] max-w-[1600px] flex-col items-center justify-center space-y-8 text-virtuo-black-origin dark:text-virtuo-white-origin">
        <div className="flex w-[80%] flex-col space-y-10 whitespace-nowrap text-center text-3xl font-medium md:w-1/2 md:text-5xl lg:w-[40%]">
          <h1 className=" pr-1 font-dmsans text-3xl font-medium md:text-5xl">
            Your{" "}
            <span className="bg-gradient-to-r from-virtuo-orange-gradientStart to-virtuo-orange-gradientEnd bg-clip-text text-transparent">
              Space
            </span>
            , Log In Now
          </h1>
          <div className="relative z-40">
            <div className="relative -mt-7">
              <h2 className="text-sm">Register to get started</h2>
              <span className="absolute -bottom-2 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-virtuo-orange-origin/0 via-[#ff8f47]/100 to-[#ff8f47]/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </div>
          </div>
          <SignUpForm />
        </div>
      </section>
    </div>
  );
}
