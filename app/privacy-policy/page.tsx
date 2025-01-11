"use client";
import FirstSection from "@/components/shared/section-hero";
import { useRouter } from "next/navigation";
import React from "react";

interface Policy {
  heading: string;
  subHeading?: string;
  content: string | string[];
}

const policies: Policy[] = [
  {
    heading: "Information We Collect",
    subHeading: "Information You Provide",
    content: [
      "Account Information: When you sign up for beta access or create an account, we collect your email address and wallet details.",
      "Communications: If you contact us, we may collect your name, email address, and the content of your communication.",
    ],
  },
  {
    heading: "",
    subHeading: "Information We Collect Automatically",
    content: [
      "Usage Data: Includes details about how you use our platform, such as pages visited, features accessed, and time spent on the platform.",
      "Device Information: Information about the device you use, including browser type, operating system, and IP address.",
    ],
  },
  {
    heading: "",
    subHeading: "Blockchain Data",
    content: [
      "On-Chain Activity: As a blockchain-based platform, we may collect publicly available data associated with your wallet address, such as transaction history, collateral positions, and lending activities.",
    ],
  },
  {
    heading: "How We Use Your Information",
    content: [
      "Provide, operate, and improve our services.",
      "Send updates, alerts, and notifications related to your account and platform activity.",
      "Analyze platform usage to enhance functionality and user experience.",
      "Respond to your inquiries and provide support.",
      "Comply with legal obligations and enforce our Terms of Service.",
    ],
  },
  {
    heading: "How We Protect Your Information",
    content: [
      "We implement industry-standard security measures to protect your information, including:",
      "Encryption of sensitive data.",
      "Secure access controls to prevent unauthorized access.",
      "Regular audits and updates to our security practices.",
    ],
  },
  {
    heading: "Sharing Your Information",
    content: [
      "We do not sell, rent, or trade your personal information. However, we may share your information in the following circumstances:",
      "With Service Providers: To facilitate services such as hosting, analytics, and customer support.",
      "For Legal Reasons: To comply with applicable laws, regulations, or legal requests.",
      "In Case of Business Transfers: If RiskMitigateAI is involved in a merger, acquisition, or sale of assets, your information may be transferred to the successor entity.",
    ],
  },
  {
    heading: "Your Rights",
    content: [
      "Access and Correction: Request access to or correction of your personal data.",
      "Data Deletion: Request the deletion of your personal data, subject to legal obligations.",
      "Opt-Out: Opt-out of receiving marketing communications by following the unsubscribe link in our emails.",
      "To exercise these rights, please contact us at contact@riskmitigateai.com.",
    ],
  },
  {
    heading: "Cookies and Tracking Technologies",
    content: [
      "We use cookies and similar technologies to:",
      "Analyze platform usage and improve functionality.",
      "Remember user preferences and enhance the user experience.",
      "You can manage or disable cookies through your browser settings. However, doing so may impact your ability to use certain features of our platform.",
    ],
  },
  {
    heading: "Third-Party Links",
    content:
      "Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing personal information.",
  },
  {
    heading: "Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this policy periodically to stay informed about how we are protecting your information.",
  },
  {
    heading: "Contact Us",
    content:
      "If you have any questions about these Terms of Use, please contact us at: E-mail: contact@riskmitigateai.com",
  },
];

const PrivacyPolicy: React.FC = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/signup");
  };
  return (
    <>
      <FirstSection
        heading="Privacy Policy"
        buttonText="Privacy"
        paragraph2=""
        paragraph1="At RiskMitigateAI, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our platform and services. By accessing or using RiskMitigateAI, you agree to the terms of this Privacy Policy."
      />
      <div className="bg-black text-white max-w-[1180px] mx-auto  px-4 py-8 sm:px-8 lg:px-16">
        {policies.map((policy, index) => (
          <div key={index} className="mb-8 max-w-[800px] mx-auto ">
            {policy.heading && (
              <h2 className="text-[32px] font-normal font-heading mb-[32px] ">
                {policy.heading}
              </h2>
            )}
            {policy.subHeading && (
              <h3 className="text-[24px] font-text mb-6">
                {policy.subHeading}
              </h3>
            )}
            {Array.isArray(policy.content) ? (
              <ul className="list-disc pl-6 space-y-2">
                {policy.content.map((item, idx) => (
                  <li
                    className="text-[#C5C6C5] text-[16px] font-text "
                    key={idx}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{policy.content}</p>
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
              building credit, earning rewards and saving money.
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

export default PrivacyPolicy;
