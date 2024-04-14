"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const Logo = ({ classname }: { classname?: string }) => {
  const router = useRouter();

  return (
    <div
      className={cn("items-center gap-x-2 md:flex", classname)}
      onClick={() => router.replace("/")}
    >
      <p className="bg-gradient-to-r from-virtuo-orange-gradientStart to-virtuo-orange-gradientEnd bg-clip-text font-dmsans text-2xl font-medium text-transparent hover:cursor-pointer">
        VirtuoGen
      </p>
    </div>
  );
};

export default Logo;
