"use client";

import React, { FC } from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  variant?: "outline" | "filled";
  href?: string;
  onClick?: () => void;
  download?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  text,
  variant = "outline",
  href,
  onClick,
  download = false,
  className,
}) => {
  const base = `${className} rounded-[30px] font-semibold py-3 px-10 transition-all duration-300 border-[1px] border-solid cursor-pointer`;

  const outline =
    "text-crimson border-crimson bg-transparent hover:bg-crimson hover:text-white";

  const filled = "bg-crimson border-crimson text-white hover:bg-crimson/80";

  const classes = `${base} ${variant === "outline" ? outline : filled}`;

  if (href) {
    return (
      <Link href={href} className={classes} download={download}>
        {text}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
