import React from "react";

interface Milestone {
  goalTitle: string;
  goalDescription: string;
  milestones: string[];
}

interface Props {
  data: Milestone;
}

const MilestoneComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-[90%] my-[1.8rem] border border-[#333333] container rounded-xl mx-auto bg-gradient-to-b p-2 md:p-6  gap-y-6 flex flex-col from-gradient1 via-gradient1/49 to-gradient2/64">
      <p className="text-white text-[18px] text-left font-bold md:text-[28px]">
        {data.goalTitle}
      </p>

      <div className="bg-[#01F2A7] w-full rounded-lg p-5">
        <p className="text-black text-[14px] text-left font-bold md:text-[24px]">
          Goal
        </p>
        <p className="text-black text-[14px] text-left font-light md:text-[18px]">
          {data.goalDescription}
        </p>
      </div>

      <div className="pt-8 border border-[#FFFFFF17] rounded-xl px-4 md:px-8 py-2 md:py-4">
        <p className="text-white text-[14px] text-left font-bold md:text-[24px]">
          Key milestones:
        </p>
        <ul className="list-disc ps-5 py-2 text-white">
          {data.milestones.map((milestone, index) => (
            <li key={index} className="ps-4">
              <p className="text-white text-[14px] text-left font-light md:text-[18px]">
                {milestone}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MilestoneComponent;
