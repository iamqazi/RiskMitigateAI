"use client";
import FirstSection from "@/components/shared/section-hero";
import { useRouter } from "next/navigation";
import React from "react";

interface Term {
  heading: string;
  subHeading?: string;
  content: string | string[];
}

const terms: Term[] = [
  {
    heading: "Definitions",
    content: [
      "“Platform” refers to the RiskMitigateAI website and its associated tools, features, and services.",
      "“We,” “Us,” or “Our” refers to RiskMitigateAI.",
      "“User” refers to any individual or entity accessing or using our platform.",
    ],
  },
  {
    heading: "Use of the Platform",
    subHeading: "Eligibility",
    content: [
      "You must be at least 18 years old or the age of majority in your jurisdiction to use our platform.",
      "By using our platform, you represent that you meet these eligibility requirements.",
    ],
  },
  {
    heading: "",
    subHeading: "Count Responsibilities",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You agree to notify us immediately if you suspect unauthorized use of your account.",
    ],
  },
  {
    heading: "Prohibited Activities",
    content: [
      "Violate any applicable laws or regulations.",
      "Use the platform for fraudulent or deceptive purposes.",
      "Engage in activities that harm or disrupt the platform’s functionality.",
      "Reverse-engineer, decompile, or disassemble any aspect of our platform.",
      "Share false or misleading information.",
    ],
  },
  {
    heading: "Intellectual Property",
    content: [
      "All content, features, and functionality on the platform are the exclusive property of RiskMitigateAI or its licensors. This includes, but is not limited to:",
      "Text, graphics, and logos.",
      "Software and code.",
      "Design and layout.",
      "You may not use, reproduce, or distribute any content without prior written permission from us.",
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    content: [
      "RiskMitigateAI is provided on an “as-is” and “as-available” basis.",
      "We do not guarantee:",
      "That the platform will be error-free, secure, or uninterrupted.",
      "That the results obtained from using the platform will be accurate or reliable.",
      "We disclaim all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
    ],
  },
  {
    heading: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, RiskMitigateAI and its affiliates will not be liable for:",
      "Any indirect, incidental, or consequential damages arising from your use of the platform.",
      "Loss of data, profits, or business opportunities resulting from your use of our services.",
      "Our total liability for any claims related to the platform will not exceed the amount you paid us for accessing the platform’s services.",
    ],
  },
  {
    heading: "Indemnification",
    content: [
      "You agree to indemnify and hold harmless RiskMitigateAI, its affiliates, and employees from any claims, losses, damages, or expenses arising from:",
      "Your violation of these Terms of Use.",
      "Your use or misuse of the platform.",
    ],
  },
  {
    heading: "Changes to the Terms",
    content:
      "We may update these Terms of Use from time to time. Changes will be posted on this page with an updated effective date. Continued use of the platform after changes are made constitutes your acceptance of the revised terms.",
  },
  {
    heading: "Governing Law",
    content:
      "These Terms of Use will be governed by the laws of a jurisdiction determined to be reasonable and applicable in the event of a dispute.",
  },
  {
    heading: " Termination",
    content:
      "We reserve the right to suspend or terminate your access to the platform at any time, without prior notice, if you violate these Terms of Use or engage in prohibited activities.",
  },
  {
    heading: "Contact Us",
    content:
      "If you have any questions about these Terms of Use, please contact us at: E-mail: contact@riskmitigateai.com",
  },
];

const TermsOfUse: React.FC = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/signup");
  };
  return (
    <>
      <FirstSection
        heading="Terms of Use"
        buttonText="Terms"
        paragraph2=""
        paragraph1="Welcome to RiskMitigateAI! By accessing or using our platform, you agree to comply with these Terms of Use. If you do not agree to these terms, you may not access or use our services."
      />{" "}
      <div className="bg-black text-white max-w-[1180px] mx-auto  px-4 py-8 sm:px-8 lg:px-16">
        {terms.map((term, index) => (
          <div key={index} className="mb-8 max-w-[800px] mx-auto ">
            <h2 className="text-[32px] font-normal font-heading mb-[32px] ">
              {term.heading}
            </h2>
            {term.subHeading && (
              <h3 className="text-[24px] font-text mb-6">{term.subHeading}</h3>
            )}
            {Array.isArray(term.content) ? (
              <ul className="list-disc pl-6 space-y-2">
                {term.content.map((item, idx) => (
                  <li
                    className="text-[#C5C6C5] text-[16px] font-text "
                    key={idx}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#C5C6C5] text-[16px] font-text">
                {term.content}
              </p>
            )}
          </div>
        ))}
      </div>{" "}
      <section className="max-w-[1181px]  mt-12  mx-auto pb-[60px] bg-black ">
        <div className="bg-[#01F2A7] py-8 px-6 md:px-8 rounded-[24px] h-auto md:h-[320px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex flex-col gap-y-[2rem] mx-auto leading-[2.3rem] px-4 md:px-6 text-center md:text-left">
            <h1 className="text-[32px] font-heading leading-[70px]  md:text-[48px] font-normal text-center text-black">
              Let’s try our service now!
            </h1>{" "}
            <p className="text-black font-text text-[16px] text-center max-w-[630px] ">
              With the right credit card, you can improve your financial life by
              building
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center  gap-x-2 w-full">
              <button
                onClick={handleButtonClick}
                type="button"
                className="md:w-[40%] w-full uppercase hover:opacity-70 transition-all ease-in-out delay-100 py-2 px-10 bg-black text-white shadow-md rounded-[8px]  focus:ring-opacity-50 sm:w-auto"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
