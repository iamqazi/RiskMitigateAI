import Image from "next/image";

// Define types for the props
interface FirstSectionProps {
  buttonText: string;
  heading: string;
  paragraph1: string;
  paragraph2: string;
}

const FirstSection: React.FC<FirstSectionProps> = ({
  buttonText,
  heading,
  paragraph1,
  paragraph2,
}) => {
  return (
    <section className="relative max-w-[1181px] mx-auto flex flex-col items-center justify-center pt-[100px] md:mt-[50px] pb-8 bg-black text-white px-4">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/left.png"
          alt="Left Background"
          className="absolute top-1/2 left-0 w-1/3 transform -translate-y-1/2 opacity-20 sm:opacity-40"
          height={50}
          width={50}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/right.png"
          alt="Right Background"
          className="absolute top-1/2 right-0 w-1/3 transform -translate-y-1/2 opacity-20 sm:opacity-40"
          height={50}
          width={50}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <div className="relative text-center">
        <button className="w-[134px] h-[36px] border px-2 border-[#464646] mb-[32px] font-medium bg-[#000] text-white rounded-[8px]">
          <span className="flex gap-2 items-center">
            <Image src="/about.png" height={28} width={28} alt="img" />
            <span className="uppercase font-text">{buttonText}</span>
          </span>
        </button>
        <h1 className="flex justify-center items-center text-[28px] sm:text-[32px] md:text-[46px] font-heading font-semibold mb-6 text-center sm:text-left px-4 sm:px-0">
          {heading}
        </h1>
        <p className="text-[20px] md:text-[16px] mx-auto max-w-[800px] font-text text-[#C5C6C5]">
          {paragraph1}
        </p>
        <p className="text-[20px] md:text-[16px] mx-auto max-w-[800px] font-text text-[#C5C6C5] mb-12">
          {paragraph2}
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
