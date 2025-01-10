"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Benefits: React.FC = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/signup");
  };
  return (
    <section className="max-w-[1181px] mx-auto py-16 sm:py-20 md:py-24 px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-[60px]">
        {/* Left div with three sub-divs */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex gap-4 hover:bg-[#100F1480] rounded-[8px] hover:border-[#29282D] border border-transparent p-4 transition-all duration-300">
            <div className="pt-2">
              <Image src={"/icon1.png"} width={60} height={60} alt="img" />
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] text-white font-text font-semibold">
                Seamless Integration
              </h3>
              <p className="text-[#C5C6C5] font-text text-[14px] md:text-[16px]">
                Effortlessly integrate RiskMitigateAI with your existing
                Solana-based lending platforms without disrupting your
                operations.
              </p>
            </div>
          </div>

          <div className="flex gap-4 hover:bg-[#100F1480] rounded-[8px] hover:border-[#29282D] border border-transparent p-4 transition-all duration-300">
            <div className="pt-2">
              <Image src={"/icon2.png"} width={60} height={60} alt="img" />
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] text-white font-text font-semibold">
                Real-Time Insights
              </h3>
              <p className="text-[#C5C6C5] font-text text-[14px] md:text-[16px]">
                Leverage AI-powered analytics to gain instant updates on
                borrower behavior, market trends, and collateral value.
              </p>
            </div>
          </div>

          <div className="flex gap-4 hover:bg-[#100F1480] rounded-[8px] hover:border-[#29282D] border border-transparent p-4 transition-all duration-300">
            <div className="pt-2">
              <Image src={"/icon3.png"} width={60} height={60} alt="img" />
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] text-white font-text font-semibold">
                Enhanced Security
              </h3>
              <p className="text-[#C5C6C5] font-text text-[14px] md:text-[16px]">
                Safeguard your assets with cutting-edge encryption and robust
                data protection protocols tailored to the financial sector.
              </p>
            </div>
          </div>
        </div>

        {/* Right div with button, heading, and para */}
        <div className="flex flex-col justify-center items-start gap-6">
          <button className="w-[120px] sm:w-[134px] h-[36px] border px-2 border-[#464646] font-medium bg-gradient-to-b from-[#1F1F23] to-[#2E2D35] text-white rounded-[8px]">
            <span className="flex gap-2 items-center">
              <Image src={"/benefit.png"} height={28} width={28} alt="img" />
              <span className="uppercase font-text">Benefits</span>
            </span>
          </button>

          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-heading font-normal text-white text-center sm:text-left sm:px-0">
            Why Choose RiskMitigateAI?
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-text text-[#C5C6C5]">
            Discover the key benefits that set us apart in delivering smarter
            risk management solutions for lending platforms.
          </p>
          <button
            onClick={handleButtonClick}
            className="px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] w-[140px] sm:w-[152px] h-[40px] sm:h-[45px] bg-[#01F2A7] text-black rounded-[8px] font-semibold"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
