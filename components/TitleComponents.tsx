import React from "react";
import Typography from "@/components/Typography";

type TitleProps = {
  text: string;
  additionalText?: string;
};

const TitleComponents = ({ text, additionalText = "" }: TitleProps) => {
  return (
    <div className="bg-darkBlack rounded-[24px] py-[20px] xl:py-[40px] xl:mx-[20px]">
      <div className="container">
        {additionalText ? (
          <>
            <Typography tag="h1" align="center">
              {text}
            </Typography>

            <Typography tag="p">{additionalText}</Typography>
          </>
        ) : (
          <Typography tag="h1" align="center" className="text-white">
            {text}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default TitleComponents;
