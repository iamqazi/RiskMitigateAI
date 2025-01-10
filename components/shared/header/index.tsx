"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const router = useRouter();

  const handleButtonClick = () => {
    window.open("/whitepaper.pdf", "_blank");
  };

  const handleButtonClickHome = () => {
    router.push("/");
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen(false); // Close the mobile menu after clicking
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "why-us", "roadmap"];
      let active = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            active = sectionId;
          }
        }
      });

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full bg-black border-b py-[18px] border-gray-900 sticky top-0 z-10">
        <div className="max-w-[1181px] h-[48px] mx-auto flex justify-between items-center p-4">
          {/* Logo on the left */}
          <Link href="/" className="text-white text-xl font-bold">
            <Image
              onClick={handleButtonClickHome}
              src={"/logo.png"}
              width={190}
              height={50}
              alt="logo"
            />
          </Link>

          {/* Navbar menu for medium and large screens */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-8 text-white">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className={`${
                    activeSection === "home"
                      ? "text-[#01F2A7]"
                      : "hover:text-gray-300"
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <Link href="/pages/about">
                  <button
                    className={`${
                      activeSection === "about"
                        ? "text-[#01F2A7]"
                        : "hover:text-gray-300"
                    }`}
                  >
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className={`${
                    activeSection === "why-us"
                      ? "text-[#01F2A7]"
                      : "hover:text-gray-300"
                  }`}
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className={`${
                    activeSection === "roadmap"
                      ? "text-[#01F2A7]"
                      : "hover:text-gray-300"
                  }`}
                >
                  Roadmap
                </button>
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
          {/* <button
            className="text-white text-xl md:hidden"
            onClick={toggleNav}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button> */}
        </div>
      </header>

      <div className="md:hidden block">
        <Menu right>
          <Link id="home" className="menu-item" href="/">
            Home
          </Link>
          <Link id="about" className="menu-item" href="/about">
            About
          </Link>
          <Link id="contact" className="menu-item" href="/contact">
            Contact
          </Link>
          <Link className="menu-item--small" href="">
            Settings
          </Link>
        </Menu>
      </div>

      {/* Mobile Menu */}
      {/* <nav
        className={`${
          isNavOpen ? "block" : "hidden"
        } md:hidden absolute top-0 right-0 w-[100%] z-10 flex flex-col justify-center items-center h-screen bg-[#01F2A7] p-4 transition-transform transform`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
       
        <button
          onClick={toggleNav}
          className="absolute top-4 right-4 text-white text-2xl"
          aria-label="Close navigation menu"
        >
          ✖
        </button>

       
        <ul className="flex flex-col text-black space-y-4">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className={`${
                activeSection === "home"
                  ? "text-[#01F2A7]"
                  : "hover:text-gray-300"
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`${
                activeSection === "about"
                  ? "text-[#01F2A7]"
                  : "hover:text-gray-300"
              }`}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("why-us")}
              className={`${
                activeSection === "why-us"
                  ? "text-[#01F2A7]"
                  : "hover:text-gray-300"
              }`}
            >
              Why Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("roadmap")}
              className={`${
                activeSection === "roadmap"
                  ? "text-[#01F2A7]"
                  : "hover:text-gray-300"
              }`}
            >
              Roadmap
            </button>
          </li>
        </ul>

     
        <button
          onClick={handleButtonClick}
          className="mt-4 bg-[#ffff] text-[16px] text-black font-medium px-[48px] py-[10px] rounded-[8px]"
        >
          White Paper
        </button>
      </nav> */}
    </>
  );
}
