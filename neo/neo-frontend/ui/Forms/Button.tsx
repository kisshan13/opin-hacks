import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={twMerge([
        " border border-dark-v-1/20 bg-dark-v-2 text-white active:scale-90 transition-all hover:shadow-lg shadow-sm hover:border-dark-v-2/30 font-medium px-10 py-2 rounded-md",
        className,
      ])}
    >
      {children}
    </button>
  );
}

export default Button;
