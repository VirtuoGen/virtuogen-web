"use client";

import { Building2, UserRoundSearch } from "lucide-react";
import { SignUpButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { useUserType } from "@/lib/store/use-user-type";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden">
      <section className="relative flex h-[calc(100vh-40vh)] flex-col items-center justify-center space-y-8 text-virtuo-black-origin dark:text-virtuo-white-origin">
        <div className="flex flex-col space-y-10 whitespace-nowrap text-center text-3xl font-medium md:text-5xl">
          <span className="bg-gradient-to-r from-virtuo-orange-gradientStart to-virtuo-orange-gradientEnd bg-clip-text pr-1 font-dmsans text-3xl font-medium  text-transparent md:text-5xl">
            VirtuoGen
          </span>
          <div className="relative z-40">
            <div className="relative -mt-7">
              <h2 className="text-sm">Get started with VirtuoGen!</h2>
              <span className="absolute -bottom-2 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-virtuo-orange-origin/0 via-virtuo-orange-origin/100 to-virtuo-orange-origin/0 transition-opacity duration-500 group-hover:opacity-40" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <SignUpButton
              afterSignInUrl="/candidate/dashboard"
              afterSignUpUrl="/candidate-sign-up"
              mode="modal"
            >
              <Button
                variant="link"
                className="border bg-virtuo-white-card transition-all duration-500 hover:bg-virtuo-black-origin hover:text-virtuo-white-origin dark:bg-virtuo-black-one dark:hover:bg-accent"
              >
                <span className="mr-2">
                  <UserRoundSearch className="h-4 w-4" />
                </span>
                Sign In as Job Seeker
              </Button>
            </SignUpButton>
            <SignUpButton
              afterSignInUrl="/recruiter/dashboard"
              afterSignUpUrl="/recruiter-sign-up"
              mode="modal"
            >
              <Button
                variant="link"
                className="border bg-virtuo-white-card transition-all duration-500 hover:bg-virtuo-black-origin hover:text-virtuo-white-origin dark:bg-virtuo-black-one dark:hover:bg-accent"
              >
                <span className="mr-2">
                  <Building2 className="h-4 w-4" />
                </span>
                Sign In as Recruiter
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>
    </div>
  );
}
