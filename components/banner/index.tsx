"use client";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Banner = () => {
  const [email, setEmail] = useState<string>();
  // const router = useRouter();
  const handleButtonClick = () => {
    if (!email || email === "") {
      toast.error("Please enter a valid email address");
    } else {
      setTimeout(() => {
        toast.success("You application has been submitted successfully");
        setEmail("");
      }, 500);
    }
  };

  return (
    <section className="max-w-[1181px]  mt-12  mx-auto pb-[60px] bg-black px-4 md:px-6">
      <div className="bg-[#01F2A7] py-8 px-6 md:px-8 rounded-[24px] h-auto md:h-[290px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="flex flex-col gap-y-[2rem] mx-auto leading-[2.3rem] px-4 md:px-6 text-center md:text-left">
          <h1 className="text-[32px]  md:text-[48px] font-normal text-center text-black">
            Stay ahead of the curve join our Early
          </h1>
          <h1 className="text-[32px] md:text-[48px] font-bold text-center text-black">
            Early Access Program!
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center  gap-x-2 w-full">
            <input
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(event: any) => {
                setEmail(event.target.value);
              }}
              className="text-black ps-4 rounded-full bg-white px-2 py-2 md:w-[80%]"
              type="text"
              placeholder="Email"
            />

            <button
              type="button"
              onClick={handleButtonClick}
              className="md:w-[40%] w-full uppercase hover:opacity-70 transition-all ease-in-out delay-100 py-2 px-10 bg-black text-white shadow-md rounded-full  focus:ring-opacity-50 sm:w-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
