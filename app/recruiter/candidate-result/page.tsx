import Image from "next/image";

import { Cake, CircleX, Mail, MapPin, Phone, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <section className="mx-auto flex h-[100vh-20vh] max-h-[1100px] w-screen max-w-[1600px] flex-col overflow-x-hidden">
      <div className="mx-6 flex items-center justify-between py-8 md:px-6 md:py-4">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Result Analysis
        </h1>
      </div>

      <div className="grid h-fit w-full grid-cols-3 grid-rows-3 gap-3 rounded px-8 text-[15px] md:grid-rows-8 md:px-10">
        <div className="col-span-3 row-span-1 flex flex-col rounded-md bg-virtuo-gray2 px-6 pb-10 pt-3 dark:bg-virtuo-black-one md:col-span-1 md:row-span-4 md:row-start-1">
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
            <p className="font-light">Candidate ID: 19978</p>
            <p className="font-light">Role: Frontend Development</p>
          </div>
          <p className="mx-auto mt-3 rounded-lg bg-[#FFDFCB] px-2 py-2 text-center text-sm font-light text-virtuo-orange-origin">
            Experience Level : Beginner
          </p>
        </div>

        <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-2 md:row-span-8 md:row-start-1">
          <h1 className="text-lg">Analysis</h1>
          <div className="mt-3 flex items-center">
            {/* TODO: Add analytics Data */}
          </div>
          <div className="mt-3 flex justify-end space-x-4">
            <Button
              variant="outline"
              className="flex h-[40px] items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
            >
              <Zap className="size-5" fill="white" />
              <span>Accept</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-[40px] items-center justify-center space-x-1 px-5 py-4 transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
            >
              <CircleX className="size-5" />
              <span>Reject</span>
            </Button>
          </div>
        </div>

        <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-1 md:row-span-3 md:row-start-5">
          <h1 className="text-lg">Contact</h1>
          <div className="mt-4 flex w-[80%] flex-col space-y-4">
            <div className="flex justify-start space-x-3">
              <Mail className="size-5" />
              <span>xyzaugust90@gmail.com</span>
            </div>
            <div className="flex justify-start space-x-3">
              <Phone className="size-5" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex justify-start space-x-3">
              <Cake className="size-5" />
              <span>18/02/2003</span>
            </div>
            <div className="flex justify-start space-x-3">
              <MapPin className="size-5" />
              <span>Kolkata, West Bengal, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
