import Navbar from "./_components/navbar";
import Footer from "@/components/footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="bg-virtuo-white-origin h-full dark:bg-[#040404]">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default LandingLayout;
