import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-[1181px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-6">
        {/* Left Box */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={270}
              height={48}
              className="w-[270px] h-[48px]"
            />
          </div>
          <p className="text-sm">
            Enhance risk management for Solana-based <br />
            lending platforms like Solend.
          </p>
        </div>

        {/* Center Box */}
        <div className="flex flex-col items-start">
          <h4 className="text-[20px] font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-[16px] font-text font-normal hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[16px] font-text font-normal hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/why-us"
                className="text-[16px] font-text font-normal hover:underline"
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                href="/roadmap"
                className="text-[16px] font-text font-normal hover:underline"
              >
                Roadmap
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <div className="h-12">
            <h4 className="text-[20px] font-semibold mb-4"></h4>
          </div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-[16px] font-text font-normal hover:underline"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-[16px] font-text font-normal hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-use"
                className="text-[16px] font-text font-normal hover:underline"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Box */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold mb-4">Social Media</h4>
          <div className="flex flex-col justify-start items-center gap-2">
            {/* <div className="flex items-center gap-2">
              <span className="w-[40px] relative h-[40px]  border border-[#29282D] rounded-full ">
                <Image
                  src={"/telegram.png"}
                  width={24}
                  height={24}
                  alt="img"
                  className="absolute top-[10px] left-1"
                />{" "}
              </span>
              <span className="text-[#C6C7C6] text-[16px] ">
                @RiskMitigateAI
              </span>{" "}
            </div> */}
            {/* <div className="flex items-center gap-2">
              <span className="w-[40px] relative h-[40px]  border border-[#29282D] rounded-full ">
                <Image
                  src={"/facebook.png"}
                  width={24}
                  height={24}
                  alt="img"
                  className="absolute top-[7px] left-[7px]"
                />{" "}
              </span>
              <span className="text-[#C6C7C6] text-[16px] ">
                @RiskMitigateAI
              </span>{" "}
            </div> */}
            <div className="flex items-center gap-2">
              <span className="w-[40px] relative h-[40px]  border border-[#29282D] rounded-full ">
                <Image
                  src={"/x.png"}
                  width={24}
                  height={24}
                  alt="img"
                  className="absolute top-[7px] left-[7px]"
                />{" "}
              </span>
              <span className="text-[#C6C7C6] text-[16px] ">
                @RiskMitigateAI
              </span>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 max-w-[1181px] mx-auto border-t border-gray-600 pt-4 text-center">
        <p className="text-sm">© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
