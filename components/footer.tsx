import Link from "next/link";

import { Instagram, LinkedinIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { FooterLinks } from "@/lib/utils";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="z-50 flex w-full flex-col justify-center bg-gradient-to-r from-[#FFE6D5] via-white-origin to-[#FFB88A] px-20 dark:from-[#1A1A1A] dark:via-[#3B3B3B] dark:to-[#1B1B1B]">
      <div className="my-10 flex flex-col justify-center space-y-10">
        <Logo classname="mx-auto md:mx-0" />

        <div className="z-50 my-20 flex w-full flex-col items-center justify-between gap-x-2 space-y-6 text-sm font-light md:flex-row md:space-x-20 md:space-y-0">
          <div className="flex space-x-40 md:space-x-20">
            {["Product", "Resources"].map((value, index) => (
              <div className="flex flex-col" key={index}>
                <h1 className="mb-6 font-normal">{value}</h1>
                <ul className="flex flex-col space-y-2">
                  {FooterLinks.Product.map((value, index) => (
                    <Link
                      key={index}
                      href={value.href}
                      className="transition-all duration-300 hover:scale-105 hover:text-orange-origin"
                    >
                      {value.title}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <h1>
              Get latest news about new features & <br />
              product updates
            </h1>
            <Input
              type="email"
              placeholder="Your Email"
              className="dark:bg-[#505050] dark:placeholder:text-white-origin/40"
            />
            <Button
              variant="secondary"
              size="icon"
              className="hover:bg-orange-hover dark:hover:bg-orange-hover mx-auto w-1/2 rounded-md bg-black-one text-xs font-light text-white-origin transition-all duration-500 hover:text-white-origin dark:bg-secondary md:mx-0 md:text-sm"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="my-2 h-[0.5px] w-full bg-black-one dark:bg-white-origin/40" />
      <div className="z-50 flex flex-col items-center justify-between md:flex-row">
        <p className="whitespace-nowrap text-center text-sm dark:text-white-origin/50">
          VirtuoGen, Inc. @2023 All rights reserved
        </p>
        <div className="flex space-x-1">
          <Link href="/">
            <LinkedinIcon className="m-2 h-5 w-5 transition-all duration-150 hover:scale-110" />
          </Link>
          <Link href="/">
            <Instagram className="m-2 h-5 w-5 transition-all duration-150 hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
