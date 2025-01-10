import Image from "next/image";
import RoadmapSection from "@/components/roadmap-page/roadmap-section";
import FirstSection from "@/components/shared/section-hero";
import Banner from "@/components/banner";
import FutureVision from "@/components/roadmap-page/future-vision";

export default function Roadmap() {
  return (
    <>
      <section className="mx-auto">
        <FirstSection
          buttonText="Roadmap"
          heading="Our Vision"
          paragraph1="In the rapidly evolving world of decentralized finance (DeFi), 
          managing risks effectively is the key to success. At RiskMitigateAI, we offer a
           groundbreaking solution tailored to the unique challenges of the Solana blockchain, empowering 
           users and platforms to make smarter, safer financial decisions."
          paragraph2=""
        />
        <div className="flex flex-row w-full mx-auto container gap-0 md:w-[80%]">
          <Image
            src="/roadmap.svg"
            width="10"
            height="10"
            alt=""
            className="w-[2.5rem] md:block hidden"
          />
          <RoadmapSection />
        </div>
        <FutureVision />

        <Banner />
      </section>
    </>
  );
}
