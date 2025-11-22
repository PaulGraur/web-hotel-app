import React from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/ButtonComponent";
import laptop from "@/images/home-page/our-software-section/laptop.png";

const OurSoftwareSection = () => {
  return (
    <section className="bg-blush/10 py-[40px] xl:py-[90px] lg:rounded-[30px] lg:mx-[20px] xl:relative xl:overflow-visible">
      <div className="container flex xl:relative xl:z-10">
        <div className="xl:w-[40%]">
          <Typography tag="h2" mb text="Get our software" />
          <Typography
            tag="p"
            mb
            text="The source of powerful qorld and making your future sure. It’s a  straight forward software for you."
          />
          <Typography
            tag="p"
            mb
            text="The source of powerful qorld and making future sure. Its a  straight forward software. Paired with dynamic image of the actual tool and the performance."
          />
          <Button text="Download now" background="crimson" />
        </div>
      </div>

      <div className="xl:absolute xl:right-0 xl:-bottom-28 xl:-translate-y-1/4 xl:z-0 mt-[40px] xl:mt-0">
        <Image src={laptop} alt="laptop" />
      </div>
    </section>
  );
};

export default OurSoftwareSection;
