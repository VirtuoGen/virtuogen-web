import Footer from "@/components/footer";
import Navbar from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full bg-virtuo-white-origin dark:bg-virtuo-black-two">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default LandingLayout;
