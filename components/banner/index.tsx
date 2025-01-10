"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/signup");
  };
  return (
    <section className="max-w-[1181px]  mt-12  mx-auto pb-[60px] bg-black px-4 md:px-6">
      <div className="bg-[#01F2A7] py-8 px-6 md:px-8 rounded-[24px] h-auto md:h-[260px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="flex flex-col gap-4 md:gap-6 px-4 md:px-6 text-center md:text-left">
          <h1 className="text-[32px] md:text-[48px] font-medium font-heading text-black">
            Let’s try our service now!
          </h1>
          <p className="text-[16px] md:text-[18px] font-light font-text text-black">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money.
          </p>
        </div>
        <div>
          <button
            onClick={handleButtonClick}
            className="bg-black mb-2 text-[#ffff] w-full md:w-[152px] h-[48px] md:h-[58px] font-medium py-3 px-6 rounded-[8px] text-[16px] md:text-[18px]"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
