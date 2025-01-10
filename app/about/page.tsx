"use client";
import AboutBoxes from "@/components/shared/boxes";
import FirstSection from "@/components/shared/section-hero";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/signup");
  };
  return (
    <>
      {/* First Section */}{" "}
      <FirstSection
        buttonText="About Us"
        heading=" Who We Are"
        paragraph1="    At RiskMitigateAI, we are pioneers in integrating cutting-edge
            artificial intelligence with the Solana blockchain to redefine risk
            management for decentralized finance (DeFi). Our mission is to make
            lending, borrowing, and collateral management on Solana safer,
            smarter, and more efficient for users and platforms alike."
        paragraph2=" With a focus on proactive solutions, we aim to empower individuals
            and businesses to navigate the complexities of DeFi with confidence
            and clarity."
      />
      {/* Second Section */}
      <section className="flex mx-auto flex-col md:flex-row items-center max-w-[1181px] justify-between bg-black text-white px-6 gap-8">
        <div className="flex-1 flex flex-col items-start order-1 lg:order-2">
          <button className="w-[175px] h-[36px] border px-2 border-[#464646] mb-[32px] font-medium bg-[#000] text-white rounded-[8px]">
            <span className="flex gap-2 items-center">
              <Image src={"/about.png"} height={28} width={28} alt="img" />
              <span className="uppercase font-text">Our Mission</span>
            </span>
          </button>
          <h2 className="text-[30px] sm:text-[32px] md:text-[48px] font-heading font-medium mb-4">
            To revolutionize decentralized finance
          </h2>
          <p className="text-[18px] md:text-[16px] font-text text-[#C5C6C5] mb-6">
            by delivering intelligent risk management tools that ensure safety,
            efficiency, and growth in the Solana ecosystem.
          </p>
        </div>
        <div className="flex-1 order-2 lg:order-1">
          <Image
            src="/about-1.png" // Replace with your image path
            alt="Section Image"
            className="w-full h-auto object-cover rounded-md"
            height={400}
            width={600}
          />
        </div>
      </section>
      <section className="bg-black text-white py-24">
        <div className="max-w-[1181px] mx-auto text-center px-4">
          <div className="mb-4">
            <button className="w-[170px] h-[36px] border px-2 border-[#464646] font-medium bg-[#000] text-white rounded-[8px]">
              <span className="flex gap-2 items-center">
                <Image src={"/about.png"} height={28} width={28} alt="img" />
                <span className="uppercase font-text">what we do</span>
              </span>
            </button>
          </div>
          {/* Heading */}
          <div className="flex justify-center items-center mx-auto">
            <h1 className="flex justify-center items-center flex-col text-[28px] sm:text-[32px] md:text-[46px] font-heading font-semibold mb-6 text-center sm:text-left px-4 sm:px-0">
              We Specialize In <br /> <span>Providing</span>
            </h1>
          </div>
          {/* Paragraph */}
          <p className="text-[14px] md:text-[16px] mx-auto max-w-[620px] font-text text-[#C5C6C5] mb-12">
            AI-driven tools to help users and platforms manage risks more
            effectively. Our flagship product, RiskMitigateAI, is designed to:
          </p>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {/* Box One */}
            <div className="flex h-auto max-w-[535px] md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
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
            <div className="flex h-auto max-w-[535px] md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
              <div className="text-[#01F2A7] border flex items-center justify-center w-[60px] md:w-[80px] p-2 h-[60px] md:h-[80px] mb-6 md:mb-[31px] rounded-[8px] border-[#353539] bg-[#29282D] text-[36px] md:text-[48px] mt-[10px]">
                <Image src={"/Group4.png"} width={56} height={50} alt="img" />
              </div>
              <h2 className="text-[20px] md:text-[24px] font-heading font-semibold mb-4">
                Monitoring Collateral Health
              </h2>
              <p className="text-center font-text text-[14px] md:text-[18px] text-[#C5C6C5]">
                Tracks the value of collateral in real-time and sends alerts
                when it approaches liquidation thresholds.
              </p>
            </div>
            {/* Box Three */}
            <div className="flex h-auto max-w-[535px] md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
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
            {/* Box Four */}
            <div className="flex h-auto max-w-[535px] md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
              <div className="text-[#01F2A7] border flex items-center justify-center w-[60px] md:w-[80px] p-2 h-[60px] md:h-[80px] mb-6 md:mb-[31px] rounded-[8px] border-[#353539] bg-[#29282D] text-[36px] md:text-[48px] mt-[10px]">
                <Image src={"/icons-2.png"} width={56} height={50} alt="img" />
              </div>
              <h2 className="text-[20px] md:text-[24px] font-heading font-semibold mb-4">
                Provide actionable insights
              </h2>
              <p className="text-center font-text text-[14px] md:text-[18px] text-[#C5C6C5]">
                Empower lending platform with actionable insights, enabling
                smarter decisions & proactive risk management.
              </p>
            </div>
            {/* Paragraph */}
          </div>{" "}
          <p className="text-[14px] pt-[32px] md:text-[16px] mx-auto max-w-[620px] font-text text-[#C5C6C5] mb-12">
            By seamlessly integrating with Solana-based platforms, such as
            Solend, we enhance the user experience and contribute to the
            ecosystem stability.
          </p>
        </div>
      </section>{" "}
      {/* Second Section */}
      <section className="flex mx-auto flex-col md:flex-row items-center max-w-[1181px] justify-between bg-black text-white px-6 gap-8">
        <div className="flex-1 flex flex-col items-start ">
          <button className="w-[175px] h-[36px] border px-2 border-[#464646] mb-[32px] font-medium bg-[#000] text-white rounded-[8px]">
            <span className="flex gap-2 items-center">
              <Image src={"/about.png"} height={28} width={28} alt="img" />
              <span className="uppercase font-text">Our Vision</span>
            </span>
          </button>
          <h2 className="text-[30px] sm:text-[32px] md:text-[48px] font-heading font-medium mb-4">
            To become the leading AI risk management
          </h2>
          <p className="text-[18px] md:text-[16px] font-text text-[#C5C6C5] mb-6">
            platform in DeFi, setting the standard for safety and innovation in
            the Solana blockchain.
          </p>
        </div>
        <div className="flex-1 ">
          <Image
            src="/about-2.png" // Replace with your image path
            alt="Section Image"
            className="w-full h-auto object-cover rounded-md"
            height={400}
            width={600}
          />
        </div>
      </section>
      <section>
        <AboutBoxes />
      </section>{" "}
      <section className="bg-black text-white py-24">
        <div className="max-w-[1181px] mx-auto px-4">
          <div className="mb-4">
            <button className="w-[214px] h-[36px] border px-2 border-[#464646] font-medium bg-[#000] text-white rounded-[8px]">
              <span className="flex gap-2 items-center">
                <Image src={"/about.png"} height={28} width={28} alt="img" />
                <span className="uppercase font-text">Our Technology</span>
              </span>
            </button>
          </div>
          {/* Heading */}
          <div className="flex justify-start items-center mx-auto">
            <h1 className="flex justify-start items-start flex-col text-[28px] sm:text-[32px] md:text-[46px] font-heading font-semibold mb-6 text-center sm:text-left px-4 sm:px-0">
              RiskMitigateAI <br /> <span>leverages</span>
            </h1>
          </div>

          {/* Three Divs with Icon, Heading, and Paragraph */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Box One */}
            <div className="flex h-auto md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
              <div className="text-[#01F2A7] border flex items-center justify-center w-[60px] md:w-[80px] p-2 h-[60px] md:h-[80px] mb-6 md:mb-[31px] rounded-[8px] border-[#353539] bg-[#29282D] text-[36px] md:text-[48px] mt-[10px]">
                <Image src={"/icons3.png"} width={56} height={50} alt="img" />
              </div>
              <h2 className="text-[20px] md:text-[24px] text-center font-heading font-semibold mb-4">
                Artificial Intelligence
              </h2>
              <p className="text-center font-text text-[14px] md:text-[18px] text-[#C5C6C5]">
                Advanced algorithms to predict risks, optimize decisions, and
                provide real-time insights.
              </p>
            </div>

            {/* Box Two */}
            <div className="flex h-auto md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
              <div className="text-[#01F2A7] border flex items-center justify-center w-[60px] md:w-[80px] p-2 h-[60px] md:h-[80px] mb-6 md:mb-[31px] rounded-[8px] border-[#353539] bg-[#29282D] text-[36px] md:text-[48px] mt-[10px]">
                <Image src={"/icons-22.png"} width={56} height={50} alt="img" />
              </div>
              <h2 className="text-[20px] md:text-[24px] text-center font-heading font-semibold mb-4">
                Blockchain Integration
              </h2>
              <p className="text-center font-text text-[14px] md:text-[18px] text-[#C5C6C5]">
                Deep integration with Solana protocols to ensure secure and
                seamless operations.
              </p>
            </div>

            {/* Box Three */}
            <div className="flex h-auto md:h-[380px] flex-col items-center bg-[#100F14] p-6 md:p-8 rounded-[8px] border-[#29282D] border cursor-pointer hover:shadow-[0px_4px_18px_2px_rgba(1,242,167,0.54)] transition-all">
              <div className="text-[#01F2A7] border flex items-center justify-center w-[60px] md:w-[80px] p-2 h-[60px] md:h-[80px] mb-6 md:mb-[31px] rounded-[8px] border-[#353539] bg-[#29282D] text-[36px] md:text-[48px] mt-[10px]">
                <Image src={"/icons-1.png"} width={56} height={50} alt="img" />
              </div>
              <h2 className="text-[20px] md:text-[24px] text-center font-heading font-semibold mb-4">
                Real-Time Analytics
              </h2>
              <p className="text-center font-text text-[14px] md:text-[18px] text-[#C5C6C5]">
                Instant access to data, empowering users to act before risks
                materialize.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1181px] mx-auto py-16 sm:py-20 md:py-24 px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-[60px]">
          {" "}
          {/* Right div with button, heading, and para */}
          <div className="flex flex-col justify-center items-start gap-6 order-1 lg:order-2 ">
            <button className="w-[120px] sm:w-[134px] h-[36px] border px-2 border-[#464646] font-medium bg-gradient-to-b from-[#1F1F23] to-[#2E2D35] text-white rounded-[8px]">
              <span className="flex gap-2 items-center">
                <Image src={"/benefit.png"} height={28} width={28} alt="img" />
                <span className="uppercase font-text">Benefits</span>
              </span>
            </button>

            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-heading font-normal text-white text-left sm:text-left sm:px-0">
              Why Choose RiskMitigateAI?
            </h2>

            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-text text-[#C5C6C5]">
              Discover the key benefits that set us apart in delivering smarter
              risk management solutions for lending platforms.
            </p>
            <button className="px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] w-[140px] sm:w-[152px] h-[40px] sm:h-[45px] bg-[#01F2A7] text-black rounded-[8px] font-semibold">
              Get Started
            </button>
          </div>
          {/* Left div with three sub-divs */}
          <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
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
        </div>
      </section>
      <section className="max-w-[1181px]  mt-12  mx-auto pb-[60px] bg-black px-4 md:px-6">
        <div className="bg-[#01F2A7] py-8 px-6 md:px-8 rounded-[24px] h-auto md:h-[420px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex flex-col gap-y-[2rem] mx-auto leading-[2.3rem] px-4 md:px-6 text-center md:text-left">
            <h1 className="text-[32px] font-heading leading-[70px]  md:text-[48px] font-normal text-center text-black">
              Join Us on Our Journey
            </h1>
            <p className="text-black font-text text-[16px] text-center max-w-[630px] ">
              At RiskMitigateAI, we’re not just building tools—we’re shaping the
              future of DeFi. Whether you’re a lender, borrower, or platform
              operator, we’re here to help you navigate the world of
              decentralized finance with confidence.
            </p>
            <h1 className="text-[32px] md:text-[48px] font-bold text-center text-black">
              Early Access Program!
            </h1>
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
