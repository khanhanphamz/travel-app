import Image from "next/image";
import React from "react";

interface ButtonProps {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`flexCenter ap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="blod-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
