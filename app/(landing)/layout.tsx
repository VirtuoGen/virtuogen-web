import Navbar from "./_components/navbar";
import Footer from "@/components/footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="dark:bg-virtuo-black-two h-full bg-virtuo-white-origin">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default LandingLayout;
