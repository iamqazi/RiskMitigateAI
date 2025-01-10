"use client";
import FirstSection from "@/components/shared/section-hero";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WhyUs() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/signup");
  };
  return (
    <>
      {/* First Section */}{" "}
      <FirstSection
        buttonText="Why Us"
        heading="Why Choose RiskMitigateAI?"
        paragraph1="In the rapidly evolving world of decentralized finance (DeFi), managing risks effectively is the key to success. At RiskMitigateAI, we offer a groundbreaking solution tailored to the unique challenges of the Solana blockchain, empowering users and platforms to make smarter, safer financial decisions."
        paragraph2=""
      />
      <section className="py-10 max-w-[1181px] mx-auto px-4">
        <h2 className="text-[48px] text-white font-heading text-center mb-8">
          What Sets Us Apart?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 border bg-[#100F14] border-[#29282D] rounded-lg">
            <h3 className="text-[24px] font-text text-white mb-4">
              1. AI-Driven Precision
            </h3>
            <p className="text-[#C5C6C5] text-[16px] font-text ">
              Our platform uses advanced machine learning algorithms to predict
              risks, optimize decisions, and provide actionable insights. From
              borrower default predictions to real-time collateral health
              monitoring, RiskMitigateAI offers unparalleled accuracy and
              reliability.
            </p>
          </div>

          <div className="p-6 border bg-[#100F14] border-[#29282D] rounded-lg">
            <h3 className="text-[24px] font-text text-white mb-4">
              2. Built for Solana
            </h3>
            <p className="text-[#C5C6C5] text-[16px] font-text ">
              Unlike generic tools, RiskMitigateAI is purpose-built for the
              Solana blockchain, ensuring seamless integration with platforms
              like Solend and other Solana-based protocols. We leverage Solana’s
              speed, scalability, and low-cost transactions to deliver an
              optimized risk management experience.
            </p>
          </div>

          <div className="p-6 border bg-[#100F14] border-[#29282D] rounded-lg">
            <h3 className="text-[24px] font-text text-white mb-4">
              3. User-Centric Design
            </h3>
            <p className="text-[#C5C6C5] text-[16px] font-text ">
              We understand that DeFi can be complex. That’s why we’ve designed
              our platform to be intuitive and user-friendly. Whether you’re a
              seasoned DeFi user or just starting out, RiskMitigateAI simplifies
              risk management so you can focus on your goals.
            </p>
          </div>

          <div className="p-6 border bg-[#100F14] border-[#29282D] rounded-lg">
            <h3 className="text-[24px] font-text text-white mb-4">
              4. Proactive Alerts and Insights
            </h3>
            <p className="text-[#C5C6C5] text-[16px] font-text ">
              Stay ahead of the curve with real-time alerts and actionable
              insights. Our platform not only monitors risks but also provides
              personalized recommendations to help you take control of your
              financial decisions.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-8 lg:mt-8">
          <div className="p-6 max-w-[610px] border bg-[#100F14] border-[#29282D] rounded-lg">
            <h3 className="text-[24px] font-text text-white mb-4">
              5. Dynamic Interest Rate Optimization
            </h3>
            <p className="text-[#C5C6C5] text-[16px] font-text ">
              With our intelligent rate adjustment feature, users can maximize
              their returns or minimize borrowing costs. RiskMitigateAI ensures
              stable liquidity pools, benefiting both users and platforms in the
              ecosystem.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 max-w-[1181px] mx-auto px-4">
        <h2 className="text-[48px] text-white font-heading text-center mb-8">
          Our Value to You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 border bg-[#100F14] border-[#29282D] rounded-lg">
            <h3 className="text-[36px] font-text text-white mb-4">For Users</h3>
            <ul className="list-disc pl-5 space-y-2 text-[#C5C6C5] text-[16px] font-text">
              <li>Reduce financial losses with proactive risk management.</li>
              <li>
                Make confident decisions with detailed insights and
                recommendations.
              </li>
              <li>
                Stay informed with real-time alerts for collateral health and
                market changes.
              </li>
            </ul>
          </div>

          <div className="p-6 border bg-[#100F14] border-[#29282D] rounded-lg">
            <h3 className="text-[24px] font-text text-white mb-4">
              For Platforms
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-[#C5C6C5] text-[16px] font-text">
              <li>
                Improve ecosystem stability with AI-enhanced risk prediction and
                collateral management.
              </li>
              <li>
                Retain users with tools that simplify and enhance their DeFi
                experience.
              </li>
              <li>
                Maximize efficiency and liquidity through dynamic rate
                optimization.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <section className="flex mx-auto flex-col md:flex-row items-center max-w-[1181px] justify-between bg-black text-white px-6 gap-8">
        <div className="flex-1 flex flex-col items-start ">
          <h2 className="text-[30px] sm:text-[32px] md:text-[48px] font-heading font-medium mb-4">
            Why Wait? Experience the Difference.
          </h2>
          <p className="text-[18px] md:text-[16px] font-text text-[#C5C6C5] mb-6">
            At RiskMitigateAI, we don’t just mitigate risks—we empower you to
            navigate DeFi with confidence. Whether you’re a lender, borrower, or
            protocol operator, our platform is designed to meet your needs and
            exceed your expectations.
          </p>
        </div>
        <div className="flex-1 ">
          <Image
            src="/about-1.png" // Replace with your image path
            alt="Section Image"
            className="w-full h-auto object-cover rounded-md"
            height={400}
            width={600}
          />
        </div>
      </section>
      <section className="max-w-[1181px]  mt-12  mx-auto pb-[60px] bg-black px-4 md:px-6">
        <div className="bg-[#01F2A7] py-8 px-6 md:px-8 rounded-[24px] h-auto md:h-[320px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex flex-col gap-y-[2rem] mx-auto leading-[2.3rem] px-4 md:px-6 text-center md:text-left">
            <h1 className="text-[32px] font-heading leading-[70px]  md:text-[48px] font-normal text-center text-black">
              Ready to join the future of risk management?
            </h1>{" "}
            <div className="flex flex-col md:flex-row justify-center items-center  gap-x-2 w-full">
              <button
                onClick={handleButtonClick}
                type="button"
                className="md:w-[40%] w-full uppercase hover:opacity-70 transition-all ease-in-out delay-100 py-2 px-10 bg-black text-white shadow-md rounded-[8px]  focus:ring-opacity-50 sm:w-auto"
              >
                Sign Up for Beta Access
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
