import { cn } from "@/lib/utils";

const Logo = ({ classname }: { classname?: string }) => {
  return (
    <div className={cn("items-center gap-x-2 md:flex", classname)}>
      <p className="font-dmsans bg-gradient-to-r from-orange-gradientStart to-orange-gradientEnd bg-clip-text text-2xl font-medium text-transparent hover:cursor-pointer">
        VirtuoGen
      </p>
    </div>
  );
};

export default Logo;
