import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

function Input({ className, label, ...props }: InputProps) {
  return (
    <label className=" dark:text-light-v-1 grid gap-1">
      <span className=" text-sm font-medium">{label}</span>
      <input
        className={twMerge([
          " px-4 py-2 bg-light-v-1 border focus:border-black/30 border-black/25 dark:bg-dark-v-2 rounded-md focus:outline-none focus:ring-0 focus-visible:outline-none ",
        ])}
        {...props}
      />
    </label>
  );
}

export default Input;
