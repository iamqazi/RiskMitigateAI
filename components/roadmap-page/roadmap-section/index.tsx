import React from "react";
import MilestoneComponent from "../milestone-card";
import { milestoneData } from "@/utils/data";

const RoadmapSection: React.FC = () => {
  return (
    <section className="bg-black py-24 w-full">
      <div className=" mx-auto text-center">
        <h1 className="flex justify-center items-center flex-col text-[28px] sm:text-[32px] md:text-[46px] font-heading font-semibold mb-6 text-center sm:text-left px-4 sm:px-0">
          2025 Roadmap
        </h1>

        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          milestoneData.map((item: any, index: number) => (
            <MilestoneComponent key={index} data={item} />
          ))
        }
      </div>
    </section>
  );
};

export default RoadmapSection;
