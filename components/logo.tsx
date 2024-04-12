import { cn } from "@/lib/utils";

const Logo = ({ classname }: { classname?: string }) => {
  return (
    <div className={cn("items-center gap-x-2 md:flex", classname)}>
      <p className="from-virtuo-orange-gradientStart to-virtuo-orange-gradientEnd bg-gradient-to-r bg-clip-text font-dmsans text-2xl font-medium text-transparent hover:cursor-pointer">
        VirtuoGen
      </p>
    </div>
  );
};

export default Logo;
