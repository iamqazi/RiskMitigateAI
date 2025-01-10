import React from "react";
import FutureCard from "../future-card";
import { futureVisionData } from "@/utils/data";

const FutureVision: React.FC = () => {
  return (
    <section className="bg-[#121315] text-white pt-[4rem]">
      <div className=" mx-auto text-center px-4">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center mx-auto">
          <h1 className=" justify-center w-[60%]  text-[28px] sm:text-[32px] md:text-[48px] font-heading font-normal mb-6 text-center  px-4 sm:px-0">
            Future Vision: Beyond 2025
          </h1>

          <div className="rounded-full bg-[#01F2A7] px-[5rem] py-2 mx-auto w-fit">
            <p className=" text-[22px] text-black  md:text-[28px] font-heading font-normal text-center ">
              2026 Goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-[4rem] w-[80%]">
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              futureVisionData.map((item: any, index: number) => (
                <FutureCard key={index} data={item} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
