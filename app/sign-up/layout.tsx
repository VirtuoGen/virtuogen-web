import Navbar from "@/app/(landing)/_components/navbar";
import Footer from "@/components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar requireLogin={false} />
      <main className="bg-virtuo-white-origin h-full dark:bg-[#040404]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
