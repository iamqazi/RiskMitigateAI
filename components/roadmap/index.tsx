import React from "react";

const Timeline = () => {
  // Roadmap data array with quarter and description
  const roadmap = [
    {
      quarter: "Q1",
      year: "2025",
      description:
        "Beta version launch with risk prediction and collateral monitoring.",
    },
    {
      quarter: "Q2",
      year: "2025",
      description: "Integration with Solend and other Solana protocols.",
    },
    {
      quarter: "Q3",
      year: "2025",
      description:
        "Advanced analytics and real-time interest rate optimization.",
    },
    {
      quarter: "Q4",
      year: "2025",
      description: "Full version release with multi-protocol support.",
    },
  ];

  return (
    <section className="max-w-[1181px] mx-auto h-auto bg-black px-4 sm:h-[800px]">
      <div className="flex justify-center">
        <span className="text-[32px] sm:text-[48px] font-medium pb-24 font-heading text-center text-white">
          Roadmap
        </span>
      </div>
      <div className="flex justify-start lg:justify-center mt-[230px] sm:mt-[230px] lg:mt-[200px]">
        <ol>
          {roadmap.map((item, index) => (
            <li
              key={index}
              className="relative inline-block w-full sm:w-full lg:w-40 h-1 mb-8 sm:mb-10"
            >
              <div className="absolute bg-gradient-to-b border border-[#333333] from-[#373b3f] via-[#0b0e12] to-[#0b0e12] py-[20px] px-[16px] sm:px-[31px] rounded">
                <h3 className="text-[32px] sm:text-[48px] flex gap-2 font-bold text-white font-text pr-[16px] sm:pr-[31px]">
                  {item.quarter} <span>{item.year}</span>
                </h3>
                <p className="text-[16px] sm:text-[18px] font-light font-text text-white">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
