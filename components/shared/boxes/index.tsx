// Import necessary modules

const cardData = [
  {
    step: "01",
    title: "Innovation",
    descriptions: [
      "We push the boundaries of AI and blockchain integration to deliver state-of-the-art solutions.",
    ],
  },
  {
    step: "02",
    title: "Transparency",
    descriptions: [
      "We believe in open communication and building trust with our users and partners.",
    ],
  },
  {
    step: "03",
    title: "User-Centric Design",
    title2: "Follow AI-generated recommendations to manage risks",
    descriptions: [
      "Our tools are designed with simplicity and effectiveness in mind to meet the needs of DeFi users.",
    ],
  },
  {
    step: "04",
    title: "Collaboration",
    descriptions: [
      "We work closely with blockchain platforms and developers to create a more robust DeFi ecosystem.",
    ],
  },
];

const Card: React.FC<{ data: (typeof cardData)[0] }> = ({ data }) => {
  return (
    <div className="flex h-auto w-full md:w-[275px]  flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
      <h2 className="text-[#C5C6C5] text-[16px] md:text-[20px] mt-[51px] font-text font-medium mb-2">
        {data.step}
      </h2>

      <h3 className="text-white text-center mt-[8px] text-[20px] md:text-[20px] font-text font-semibold mb-4">
        {data.title}
      </h3>
      <hr className="w-full border-[#29282D] mt-[34px] " />
      <div className="font-text text-[14px] mt-[26px] md:text-[16px] text-[#C5C6C5]">
        {data.descriptions.map((desc, index) => (
          <p key={index} className=" text-center">
            <span>{desc}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

const AboutBoxes: React.FC = () => {
  return (
    <div className="container flex flex-col justify-center md:mt-[320px] mt-[-220px] lg:mt-0  mx-auto p-4">
      <h1 className="mb-[76px] mt-[60px] text-center text-[24px] md:text-[32px] lg:text-[40px] font-heading font-bold text-[#fff] ">
        Our Core
        <br />
        Values
      </h1>
      <div className="flex lg:flex-row flex-col !justify-center gap-6 ">
        {cardData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default AboutBoxes;
