import Navbar from "@/app/(landing)/_components/navbar";
import Footer from "@/components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar requireLogin={false} />
      <main className="dark:bg-virtuo-black-two h-full bg-virtuo-white-origin">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
