import Image from "next/image";
import Link from "next/link";

import { Cake, Eye, Mail, MapPin, Phone } from "lucide-react";

const Page = () => {
  return (
    <section className="mx-auto flex h-[100vh-20vh] max-h-[1100px] w-screen max-w-[1600px] flex-col overflow-x-hidden">
      <div className="mx-6 flex items-center justify-between py-8 md:px-6 md:py-4">
        <h1 className="text-2xl font-semibold text-virtuo-black-origin dark:text-virtuo-white-origin">
          Candidates Profile
        </h1>
      </div>

      <div className="grid h-fit w-full grid-cols-3 grid-rows-5 gap-3 rounded px-8 text-[15px] md:grid-rows-8 md:px-10">
        <div className="col-span-3 row-span-1 flex flex-col rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-1 md:row-span-4 md:row-start-1">
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

        <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-2 md:row-span-2 md:row-start-1">
          <h1 className="text-lg">Resume</h1>
          <div className="mt-3 flex items-center">
            <Image
              src="/assets/icons/resume.svg"
              alt="resume"
              width={50}
              height={50}
              className="size-12"
            />
            <Link
              href="/assets/icons/resume.svg"
              locale={false}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Downlod Resume"
              download={true}
              className="ml-3 hover:underline"
            >
              Resume.pdf
            </Link>
            <Eye className="ml-auto size-5" />
          </div>
        </div>

        <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pt-3 dark:bg-virtuo-black-one md:col-span-2 md:row-span-4 md:row-start-3">
          <h1 className="text-lg">Work Experience</h1>
          <div className="mt-2 flex items-center space-x-3">
            <Image
              src="/assets/backgrounds/test_candidate_work.png"
              alt="candidate education"
              width={50}
              height={50}
              className="size-12"
            />
            <div>
              <h1>UI/UX Designer</h1>
              <div className="flex">
                <span>Leidos</span>
                <li className="ml-3">Arlington, VA, USA</li>
              </div>
            </div>
          </div>
          <ol className="mt-2 list-decimal px-[60px] text-virtuo-gray dark:text-white/[0.6]">
            <li>
              Led UI/UX design initiatives: Spearheaded the UI/UX design process
              for multiple projects, from concept to delivery, ensuring a
              seamless and intuitive user experience across web and mobile
              platforms.
            </li>
            <li>
              User research and usability testing: Conducted user research,
              including interviews, surveys, and usability testing, to gain
              insights into user behavior, preferences, and pain points,
              informing design decisions and optimizing user flows.
            </li>
          </ol>
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

        <div className="col-span-3 row-span-1 rounded-md bg-virtuo-gray2 px-6 pb-4 pt-3 dark:bg-virtuo-black-one md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-7">
          <h1 className="text-lg">Education</h1>
          <div className="mt-2 flex items-center space-x-3">
            <Image
              src="/assets/backgrounds/test_candidate_education.png"
              alt="candidate education"
              width={50}
              height={50}
              className="size-12"
            />
            <h1>Parsons School of Design</h1>
            <li>New York City</li>
          </div>
          <p className="px-[60px] text-virtuo-gray dark:text-white/[0.6]">
            Bachelor of Fine Arts (BFA) in Communication Design
          </p>
          <p className="px-[60px] text-virtuo-gray dark:text-white/[0.6]">
            2024 - Present
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
