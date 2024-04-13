import Navbar from "./_components/navbar";
import Footer from "@/components/footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full bg-virtuo-white-origin dark:bg-[#040404]">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default LandingLayout;
