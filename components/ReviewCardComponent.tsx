"use client";
import { Rating } from "@mantine/core";
import Image from "next/image";
import { Link } from "@/navigation";
import Typography from "@/components/Typography";
import { FaTelegramPlane, FaInstagram, FaFacebook } from "react-icons/fa";

type ReviewCardComponentProps = {
  avatarUrl: string;
  fullName: string;
  rating: number;
  comment: string;
  date: string;
  socialLinks?: {
    telegram?: string;
    instagram?: string;
    facebook?: string;
  };
};

const ReviewCardComponent = ({
  avatarUrl,
  fullName,
  rating,
  comment,
  date,
  socialLinks,
}: ReviewCardComponentProps) => {
  const SOCIALS = [
    {
      name: "telegram",
      Icon: FaTelegramPlane,
      color: "#0088cc",
      hoverColor: "#006699",
    },
    {
      name: "instagram",
      Icon: FaInstagram,
      color: "#E1306C",
      hoverColor: "#C1275B",
    },
    {
      name: "facebook",
      Icon: FaFacebook,
      color: "#1877F2",
      hoverColor: "#145DBF",
    },
  ];

  return (
    <div className="bg-white rounded-[24px] border border-charcoal/50 shadow-md px-[14px] pt-[14px] pb-[28px]">
      <div className="flex flex-col items-center gap-[12px] mb-[28px]">
        <Image
          src={avatarUrl}
          alt="Avatar"
          width={1028}
          height={1028}
          className="object-cover shadow-md rounded-[24px] w-[100%] h-[240px]"
        />

        <Typography
          tag="h3"
          align="center"
          className="h-[84px]"
          text={fullName}
        />

        <Rating value={rating} readOnly fractions={2} />
      </div>

      <Typography
        tag="p"
        align="center"
        className="h-[90px] line-clamp-3 mb-4"
        text={comment}
      />

      <div className="flex justify-between items-center mt-auto">
        <Typography tag="h5" className="text-eb" text={date} />

        {socialLinks && (
          <div className="flex gap-3">
            {SOCIALS.filter(
              (s) => socialLinks[s.name as keyof typeof socialLinks]
            ).map(({ name, Icon, color, hoverColor }) => (
              <Link
                key={name}
                href={socialLinks[name as keyof typeof socialLinks]!}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[${color}] hover:text-[${hoverColor}]`}
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCardComponent;
