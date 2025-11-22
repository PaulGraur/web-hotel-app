import React, { FC } from "react";
import Image from "next/image";
import Typography from "@/components/Typography";

interface CardProps {
  src: string;
  alt: string;
  title: string;
  text: string;
  background: string;
  shadowColor: string;
}

const SolutionCardComponent: FC<CardProps> = ({
  src,
  alt,
  title,
  text,
  background,
  shadowColor,
}) => {
  return (
    <div className="flex flex-col items-start p-[35px] border rounded-[30px] transition-all duration-300 hover:shadow-lg hover:border-transparent">
      <div
        className="rounded-[30px] mb-[25px] p-[25px]"
        style={{
          background,
          boxShadow: `0 10px 30px ${shadowColor}`,
        }}
      >
        <Image src={src} alt={alt} />
      </div>

      <div>
        <Typography tag="h3" mb text={title} />
        <Typography tag="p" text={text} />
      </div>
    </div>
  );
};

export default SolutionCardComponent;
