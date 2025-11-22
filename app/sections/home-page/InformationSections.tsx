import React from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import information from "@/images/home-page/information-page/information.png";

const InformationSection = () => {
  return (
    <section className="container">
      <div className="flex flex-col-reverse gap-[40px] xl:flex-row">
        <Image src={information} alt="information" />

        <div className="xl:mt-[100px]">
          <Typography tag="h2" mb text="Serving information with  security." />
          <Typography
            tag="p"
            mb
            text="The source of powerful qorld and making future sure. Its a  straight forward software. Paired with dynamic image of the actual tool for you."
          />
          <Typography
            tag="p"
            text="Where possibilities are made possible. We must have expand Possibilities of better tomorrow. The directly secure of your network deliveing  services."
          />
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
