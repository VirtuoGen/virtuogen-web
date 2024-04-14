import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import { SearchCommand } from "@/components/search";

const RecruiterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col">
      <SearchCommand />
      <SideBar />
      <Header />
      <main className="main-layout">{children}</main>
    </div>
  );
};

export default RecruiterLayout;
