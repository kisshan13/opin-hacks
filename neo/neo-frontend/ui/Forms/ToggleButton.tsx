import React from "react";
import { twMerge } from "tailwind-merge";

interface ToggleButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

function ToggleButton({ isActive, ...props }: ToggleButtonProps) {
  return (
    <div
      {...props}
      className={twMerge([
        " group cursor-pointer group relative w-[60px] h-[30px] rounded-full dark:bg-dark-v-2 bg-light-v-1 border",
        isActive && "bg-dark-v-1/30 dark:bg-primary/30",
      ])}
    >
      <div
        className={twMerge([
          " absolute content-none dark:bg-primary translate-x-[26px] transition-transform bottom-[4px] left-[4px] rounded-full w-5 h-5 bg-dark-v-1 ",
          !isActive && "opacity-70 translate-x-0",
        ])}
      ></div>
    </div>
  );
}

export default ToggleButton;
