import AboutUs from "@/components/about-us";
import Banner from "@/components/banner";
import Benefits from "@/components/benefits";
import HeroSection from "@/components/hero-section";
import Roadmap from "@/components/roadmap";
import ResponsiveGrid from "@/components/use";

export default function LandingPage() {
  return (
    <>
      <section className="mx-auto">
        {" "}
        <section id="home">
          <HeroSection />
        </section>{" "}
        <section id="about">
          {" "}
          <AboutUs />
        </section>
        <section id="why-us">
          {" "}
          <Benefits />
        </section>
        <section id="roadmap">
          {" "}
          <Roadmap />
        </section>{" "}
        <section>
          {" "}
          <ResponsiveGrid />
        </section>{" "}
        <section id="signup">
          <Banner />
        </section>
      </section>
    </>
  );
}
