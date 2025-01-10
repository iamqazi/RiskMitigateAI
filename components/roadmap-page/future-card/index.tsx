import React from "react";
import Image from "next/image";

interface FutureVision {
  title: string;
  description: string;
}

interface Props {
  data: FutureVision;
}

const FutureCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full  border border-[#333333] container rounded-xl mx-auto bg-gradient-to-b p-4 md:p-6  gap-y-4 flex flex-col from-gradient1 via-gradient1/49 to-gradient2/64">
      <Image src={"/flag.png"} width={"80"} height={"80"} alt="flag" />
      <p className="text-[#01F2A7] text-[18px] text-left font-bold md:text-[24px]">
        {data.title}
      </p>
      <p className="text-white text-[14px] text-left font-light md:text-[18px]">
        {data.description}
      </p>
    </div>
  );
};

export default FutureCard;
