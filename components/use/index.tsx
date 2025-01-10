// Import necessary modules

const cardData = [
  {
    step: "Step 1",
    title: "Access Your Dashboard",
    descriptions: [
      "Log in and connect your Solana wallet.",
      "Instantly see an overview of your active loans, collateral value, and Borrower Default Risk Scores.",
    ],
  },
  {
    step: "Step 2",
    title: "Monitor Risks",
    descriptions: [
      "Track real-time updates on collateral health and liquidation thresholds.",
      "Check risk scores for each loan to identify potential problems early.",
    ],
  },
  {
    step: "Step 3",
    title: "Take Action",
    descriptions: [
      "Add collateral to secure your position.",
      "Adjust interest rates or close risky positions for stability.",
    ],
  },
  {
    step: "Step 4",
    title: "Stay Informed",
    descriptions: [
      "Set up personalized alerts for key events like collateral drops or market changes.",
      "Receive updates via email, SMS, or directly in the app.",
    ],
  },
];

const Card: React.FC<{ data: (typeof cardData)[0] }> = ({ data }) => {
  return (
    <div className="flex h-auto w-full md:w-[275px]  flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
      <h2 className="text-white text-[16px] md:text-[20px] mt-[51px] font-text font-medium mb-2">
        {data.step}
      </h2>
      <h3 className="text-white text-center mt-[8px] text-[20px] md:text-[24px] font-text font-semibold mb-4">
        {data.title}
      </h3>
      <hr className="w-full border-[#29282D] mt-[34px] " />
      <div className="font-text text-[14px] mt-[26px] md:text-[16px] text-[#C5C6C5]">
        {data.descriptions.map((desc, index) => (
          <p key={index} className="flex gap-2">
            <div className="w-[14px] h-[14px]">
              <span className="w-[12px] h-[12px] bg-[#01F2A7] rounded-full inline-block "></span>
            </div>
            <span>{desc}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

const ResponsiveGrid: React.FC = () => {
  return (
    <div className="container flex flex-col justify-center md:mt-[320px] mt-[-220px] lg:mt-0  mx-auto p-4">
      <h1 className="mb-[76px] text-center text-[24px] md:text-[32px] lg:text-[40px] font-heading font-bold text-[#fff] ">
        How to Use
        <br /> RiskMitigateAI
      </h1>
      <div className="flex lg:flex-row flex-col !justify-center gap-6 ">
        {cardData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
