import Navbar from "../(landing)/_components/navbar";
import Footer from "@/components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar requireLogin={false} />
      <main className="h-full bg-white-origin dark:bg-[#040404]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
