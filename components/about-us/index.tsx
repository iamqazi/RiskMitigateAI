// components/AboutUs.tsx

import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-[1181px] mx-auto text-center px-4">
        <div className="mb-4">
          <button className="w-[134px] h-[36px] border px-2 border-[#464646] font-medium bg-[#000] text-white rounded-[8px]">
            <span className="flex gap-2 items-center">
              <Image src={"/about.png"} height={28} width={28} alt="img" />
              <span className="uppercase font-text">About Us</span>
            </span>
          </button>
        </div>
        {/* Heading */}
        <div className="flex justify-center items-center mx-auto">
          <h1 className="flex justify-center items-center flex-col text-[28px] sm:text-[32px] md:text-[46px] font-heading font-semibold mb-6 text-center sm:text-left px-4 sm:px-0">
            What <br /> <span>RiskMitigateAI Does</span>
          </h1>
        </div>

        {/* Paragraph */}
        <p className="text-[14px] md:text-[16px] mx-auto max-w-[620px] font-text text-[#C5C6C5] mb-12">
          RiskMitigateAI is a tool designed to enhance risk management for
          Solana-based lending platforms like Solend. It helps users manage
          lending and borrowing safely by:
        </p>

        {/* Three Divs with Icon, Heading, and Paragraph */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Box One */}
          <div className="flex h-auto md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
            <div className="text-[#01F2A7] border flex items-center justify-center w-[60px] md:w-[80px] p-2 h-[60px] md:h-[80px] mb-6 md:mb-[31px] rounded-[8px] border-[#353539] bg-[#29282D] text-[36px] md:text-[48px] mt-[10px]">
              <Image src={"/Vector.png"} width={56} height={50} alt="img" />
            </div>
            <h2 className="text-[20px] md:text-[24px] font-heading font-semibold mb-4">
              Predicting Borrower Defaults
            </h2>
            <p className="text-center font-text text-[14px] md:text-[18px] text-[#C5C6C5]">
              Uses AI to calculate the likelihood of loan defaults based on
              market trends and user history.
            </p>
          </div>

          {/* Box Two */}
          <div className="flex h-auto md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
            <div className="text-[#01F2A7] border flex items-center justify-center w-[60px] md:w-[80px] p-2 h-[60px] md:h-[80px] mb-6 md:mb-[31px] rounded-[8px] border-[#353539] bg-[#29282D] text-[36px] md:text-[48px] mt-[10px]">
              <Image src={"/Group4.png"} width={56} height={50} alt="img" />
            </div>
            <h2 className="text-[20px] md:text-[24px] font-heading font-semibold mb-4">
              Monitoring Collateral Health
            </h2>
            <p className="text-center font-text text-[14px] md:text-[18px] text-[#C5C6C5]">
              Tracks the value of collateral in real-time and sends alerts when
              it approaches liquidation thresholds.
            </p>
          </div>

          {/* Box Three */}
          <div className="flex h-auto md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
            <div className="text-[#01F2A7] border flex items-center justify-center w-[60px] md:w-[80px] p-2 h-[60px] md:h-[80px] mb-6 md:mb-[31px] rounded-[8px] border-[#353539] bg-[#29282D] text-[36px] md:text-[48px] mt-[10px]">
              <Image src={"/vector2.png"} width={56} height={50} alt="img" />
            </div>
            <h2 className="text-[20px] md:text-[24px] font-heading font-semibold mb-4">
              Optimizing Interest Rates
            </h2>
            <p className="text-center font-text text-[14px] md:text-[18px] text-[#C5C6C5]">
              Dynamically adjusts lending and borrowing rates to ensure stable
              and efficient liquidity pools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
