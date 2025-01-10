import AboutUs from "@/components/about-us";
import Banner from "@/components/banner";
import Benefits from "@/components/benefits";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Roadmap from "@/components/roadmap";
import Header from "@/components/shared/header";
import ResponsiveGrid from "@/components/use";

export default function LandingPage() {
  return (
    <>
      <section className="mx-auto">
        {" "}
        <Header /> <HeroSection />
        <AboutUs /> <Benefits />
        <Roadmap /> <ResponsiveGrid /> <Banner />
        <Footer />
      </section>
    </>
  );
}
