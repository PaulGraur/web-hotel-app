import React, { FC, ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/navigation";

import Back from "@/images/vectors/back.svg";
import Cube from "@/images/vectors/cube.svg";

interface ButtonProps {
  text?: string;
  className?: string;
  href?: string;
  target?: string;
  tag?: "Link" | "button";
  type?: "button" | "submit" | "reset";
  background?: "ebony" | "transparent" | "onyx" | "white";
  bordered?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon?:
    | "cube"
    | "profile"
    | "telegram"
    | "facebook"
    | "instagram"
    | "google"
    | "logout"
    | "back";
}

const Button: FC<ButtonProps> = ({
  text,
  className = "",
  href = "",
  target,
  tag = "button",
  type = "button",
  background = "ebony",
  bordered = false,
  fullWidth = false,
  disabled = false,
  onClick,
  icon,
}) => {
  const finalBackground = bordered ? "transparent" : background;
  const backgroundClass =
    finalBackground === "ebony"
      ? "bg-ebony"
      : finalBackground === "white"
      ? "bg-show"
      : finalBackground === "onyx"
      ? "bg-onyx"
      : "bg-transparent";

  const disabledBg =
    finalBackground === "ebony"
      ? "disabled:bg-ebony disabled:bg-opacity-50 disabled:text-ivory"
      : "disabled:bg-black disabled:bg-opacity-60 disabled:text-ivory";

  const textClass =
    finalBackground === "ebony" || finalBackground === "onyx"
      ? "text-white"
      : bordered
      ? "text-ebony"
      : "";

  const borderClass = bordered ? "border border-ebony border-solid" : "";
  const widthClass = fullWidth ? "w-full" : "";
  const hoverClass = bordered
    ? "hover:bg-ebony/85 hover:text-white transition-colors duration-300"
    : finalBackground === "ebony"
    ? "hover:bg-ebony/85 transition-colors duration-300"
    : "";

  const classes = `${className} ${disabledBg} ${backgroundClass} ${borderClass} ${textClass} ${widthClass} ${hoverClass} w-max text-ebony text-[22px] font-bold py-[12px] px-[30px] rounded-[36px] flex items-center justify-center disabled:cursor-not-allowed group`;

  const renderIcon = () => {
    const iconMap: Record<string, ReactNode> = {
      cube: (
        <Image
          src={Cube}
          alt="Cube"
          width={20}
          height={20}
          className="mr-2 inline-block"
        />
      ),
      back: (
        <Image
          src={Back}
          alt="Back icon"
          width={20}
          height={20}
          className="mr-2 inline-block w-[15px] filter group-hover:brightness-0 group-hover:invert group-active:brightness-0 group-active:invert transition duration-300 ease-in-out"
        />
      ),
    };

    return icon ? iconMap[icon] : null;
  };

  if (tag === "Link" && href) {
    return (
      <Link href={href} target={target} className={classes}>
        {renderIcon()}
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {renderIcon()}
      {text}
    </button>
  );
};

export default Button;
