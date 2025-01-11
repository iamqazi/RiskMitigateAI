// components/HeroSection.tsx
"use client";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import React from "react";

const HeroSection: React.FC = () => {
  // const router = useRouter();
  const handleButtonClick = () => {
    const signupSection = document.getElementById("signup");
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      {/* Left side: Image (Hidden for sm and md, visible for lg and above) */}
      <Image
        src={"/GradientBlur.png"}
        width={545}
        height={545}
        alt="img"
        className=" absolute top-[1200px]"
      />

      {/* Hero Image */}
      <Image
        src={"/Group7.png"}
        height={905}
        width={905}
        alt="Hero Image"
        className="hidden lg:block absolute  right-0 -top-40"
      />

      {/* Main Content */}
      <div className="max-w-[1181px] relative mx-auto  text-white flex flex-col lg:flex-row items-center justify-between py-24 px-6 lg:px-4">
        <div className="flex flex-col max-w-[600px] justify-center space-y-6">
          <h1 className="text-[32px] lg:text-[46px] font-heading font-semibold text-center lg:text-left">
            Enhancing Safety and Efficiency in{" "}
            <span className="text-[#01F2A7]">Solana Lending</span>
          </h1>
          <p className="text-[18px] lg:text-[23px] font-text text-[#C5C6C5] text-center lg:text-left">
            RiskMitigateAI helps users predict borrower defaults, monitor
            collateral health, and optimize interest rates on Solana lending
            platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <button
              onClick={handleButtonClick}
              className="px-6 py-3 font-medium w-[185px] bg-white text-black rounded-[8px]"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
