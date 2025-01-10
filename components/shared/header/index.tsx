"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/signup");
  };
  return (
    <>
      <header className="w-full bg-black border-b py-[18px] border-gray-900 sticky top-0 z-10">
        <div className="max-w-[1181px] h-[48px] mx-auto flex justify-between items-center p-4">
          {/* Logo on the left */}
          <div className="text-white text-xl font-bold">
            <Image src={"/logo.png"} width={190} height={50} alt="logo" />
          </div>

          {/* Navbar menu for medium and large screens */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-8 text-white">
              <li>
                <a href="#home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gray-300">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-gray-300">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Signup button on the right for medium and large screens */}
          <div className="hidden md:block">
            <button
              onClick={handleButtonClick}
              className="bg-[#01F2A7] z-10 text-[16px] text-black font-medium px-[48px] py-[10px] rounded-[8px]"
            >
              White Paper
            </button>
          </div>

          {/* Toggle Button for small and medium screens */}
          <button
            className="text-white text-xl md:hidden"
            onClick={toggleNav}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`${
          isNavOpen ? "block" : "hidden"
        } md:hidden absolute top-0 right-0 w-[100%] z-10 flex flex-col justify-center items-center h-screen bg-[#01F2A7] p-4 transition-transform transform ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        {/* Close button for mobile menu */}
        <button
          onClick={toggleNav}
          className="absolute top-4 right-4 text-white text-2xl"
          aria-label="Close navigation menu"
        >
          ✖
        </button>

        {/* Mobile menu items */}
        <ul className="flex flex-col text-black space-y-4">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#why-us" className="hover:text-gray-300">
              Why Us
            </a>
          </li>
          <li>
            <a href="#roadmap" className="hover:text-gray-300">
              Roadmap
            </a>
          </li>
        </ul>

        {/* Mobile button (White Paper) */}
        <button
          onClick={handleButtonClick}
          className="mt-4 bg-[#ffff] text-[16px] text-black font-medium px-[48px] py-[10px] rounded-[8px]"
        >
          White Paper
        </button>
      </nav>
    </>
  );
}
