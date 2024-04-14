import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import { SearchCommand } from "@/components/search";

const RecruiterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col">
      <SearchCommand />
      <SideBar />
      <Header />
      <main className="ml-20 flex flex-row overflow-hidden bg-virtuo-white-origin transition-all duration-300 dark:bg-virtuo-black-origin">
        {children}
      </main>
    </div>
  );
};

export default RecruiterLayout;
