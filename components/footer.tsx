import Link from "next/link";

import { Instagram, LinkedinIcon, SquareArrowOutUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { FooterLinks } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="z-50 flex w-full flex-col justify-center bg-gradient-to-r from-[#FFE6D5] via-virtuo-white-origin to-[#FFB88A] px-20 dark:from-virtuo-black-one dark:via-[#3B3B3B] dark:to-[#1B1B1B]">
      <div className="mx-auto my-10 flex w-full max-w-[1600px] flex-col justify-center space-y-10">
        <Logo classname="mx-auto md:mx-0" />

        <div className="z-50 my-20 flex w-full flex-col items-center justify-between gap-x-2 space-y-6 text-sm font-light md:flex-row md:space-x-20 md:space-y-0">
          <div className="flex space-x-40 md:space-x-20">
            {Object.entries(FooterLinks).map(([category, links]) => (
              <div className="flex flex-col" key={category}>
                <h1 className="mb-6 font-normal">{category}</h1>
                <ul className="flex flex-col space-y-2">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        "text-muted-foreground transition-all duration-500 hover:scale-105 hover:text-virtuo-orange-origin",
                        link.title === "Docs" && "flex items-center",
                      )}
                      target="#"
                    >
                      {link.title}
                      {link.title === "Docs" && (
                        <SquareArrowOutUpRight
                          height={12}
                          width={12}
                          className="ml-1"
                        />
                      )}
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
              className="bg-virtuo-white-origin dark:bg-[#505050] dark:placeholder:text-virtuo-white-origin/40"
            />
            <Button
              variant="secondary"
              size="icon"
              className="mx-auto w-1/2 rounded-md bg-virtuo-black-one text-xs font-light text-virtuo-white-origin transition-all duration-500 hover:bg-virtuo-orange-hover hover:text-virtuo-white-origin dark:bg-secondary dark:hover:bg-virtuo-orange-hover md:mx-0 md:text-sm"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="my-2 h-[0.5px] w-full bg-virtuo-black-one dark:bg-virtuo-white-origin/40" />
      <div className="z-50 mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between md:flex-row">
        <p className="whitespace-nowrap text-center text-sm dark:text-virtuo-white-origin/50">
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
